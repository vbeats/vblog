# Rancher 🐄

[文档](https://docs.rancher.cn/rancher2/)

## 高可用部署(k3s)

| ip             | role                      |
| -------------- | ------------------------- |
| 192.168.100.80 | *.demo.com, 数据库(外部存储-非必须), nginx     |
| 192.168.100.81 | k3s server,rancher server |
| 192.168.100.82 | k3s server,rancher server |

> server 节点安装 kubectl k3s helm 工具

1. k3s 集群

直接在`k3s server` 节点部署 rancher

`k3s`新版本高可用集群支持使用 内嵌存储

`nginx` 4层 TCP代理

```conf
stream {
    upstream k3s_server {
        least_conn;
        server 192.168.1.81:6443 max_fails=3 fail_timeout=5s;
        server 192.168.1.82:6443 max_fails=3 fail_timeout=5s;
    }

    server {
        listen 6443;
        proxy_connect_timeout 1s;
        proxy_timeout 3s;
        proxy_pass k3s_server;
    }

}
```

```bash
# 初始server节点
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn \
  sh -s - server --token=123456 --cluster-init --tls-san=k3s.demo.com \
  [ --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name" ]

# token /var/lib/rancher/k3s/server/node-token

# 其他节点加入集群
curl -sfL http://rancher-mirror.cnrancher.com/k3s/k3s-install.sh | INSTALL_K3S_MIRROR=cn \
  K3S_TOKEN=K10bc1b67a30b2f973e3537f6c67d6f600a0f28ecd30d698cff83d8ef78ebbc66ae::server:123456 \
  sh -s - server --server https://k3s.demo.com:6443 --tls-san=k3s.demo.com


kubectl get nodes -A
```

保存`kubeconfig`文件

```bash
cp /etc/rancher/k3s/k3s.yaml ~/.kube/config

# config中 server地址改为 https://k3s.demo.com:6443

```

2. 配置nginx

`rancher` 7层HTTP代理 `rancher.demo.com`

```conf
upstream rancher {
    server node2:80;
    server node4:80;
}

map $http_upgrade $connection_upgrade {
    default Upgrade;
    '' close;
}

server {
    listen 443 ssl http2;
    server_name rancher.demo.com;
    ssl_certificate /root/tls/tls.crt;
    ssl_certificate_key /root/tls/tls.key;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://rancher;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 900s;
        proxy_buffering off;
    }
}

server {
    listen 80;
    server_name rancher.demo.com;
    return 301 https://$server_name$request_uri;
}

```

3. helm 安装 rancher server

```bash
helm repo add rancher-stable https://releases.rancher.com/server-charts/stable

# k8s secret添加ssl证书

kubectl -n cattle-system create secret tls tls-rancher-ingress \
  --cert=tls.pem \
  --key=tls.key

# 私有ca
kubectl -n cattle-system create secret generic tls-ca \
  --from-file=cacerts.pem=/root/tls/cacerts.pem

```

如果ssl证书是自签名证书  需要设置一下traefik-ingress  省的80 443一直在重定向

在`k3s-server`节点修改 `/var/lib/rancher/k3s/server/manifests`下的`traefik.yaml`, 保存后会自动更新

```yml
  valuesContent: |-
    additionalArguments:
      - "--entryPoints.web.proxyProtocol.insecure"
      - "--entryPoints.web.forwardedHeaders.insecure"
```

示例:

```yml
---
apiVersion: helm.cattle.io/v1
kind: HelmChart
metadata:
  name: traefik-crd
  namespace: kube-system
spec:
  chart: https://%{KUBERNETES_API}%/static/charts/traefik-crd-10.9.100.tgz
---
apiVersion: helm.cattle.io/v1
kind: HelmChart
metadata:
  name: traefik
  namespace: kube-system
spec:
  chart: https://%{KUBERNETES_API}%/static/charts/traefik-10.9.100.tgz
  set:
    global.systemDefaultRegistry: ""
  valuesContent: |-
    additionalArguments:
      - "--entryPoints.web.proxyProtocol.insecure"
      - "--entryPoints.web.forwardedHeaders.insecure"
    rbac:
      enabled: true
    ports:
      websecure:
        tls:
          enabled: true
    podAnnotations:
      prometheus.io/port: "8082"
      prometheus.io/scrape: "true"
    providers:
      kubernetesIngress:
        publishedService:
          enabled: true
    priorityClassName: "system-cluster-critical"
    image:
      name: "rancher/mirrored-library-traefik"
    tolerations:
    - key: "CriticalAddonsOnly"
      operator: "Exists"
    - key: "node-role.kubernetes.io/control-plane"
      operator: "Exists"
      effect: "NoSchedule"
    - key: "node-role.kubernetes.io/master"
      operator: "Exists"
      effect: "NoSchedule"
```

```bash

helm install rancher rancher-latest/rancher \
  --namespace cattle-system \
  --set hostname=rancher.demo.com \
  --set replicas=2 \
  --set ingress.tls.source=secret \
  --set privateCA=true \
  --set tls=external

# tls验证

openssl s_client -connect rancher.demo.com:443 -servername rancher.demo.com -CAfile ca.crt

# 查看安装
kubectl -n cattle-system rollout status deploy/rancher

kubectl -n cattle-system get deploy rancher

kubectl get pods -n cattle-system

kubectl describe pod rancher-xxxxx -n cattle-system

kubectl get ingress -A

kubectl describe ingress rancher -n cattle-system

# ingress 示例

Name:             rancher
Namespace:        cattle-system
Address:          192.168.1.81,192.168.1.83
Default backend:  default-http-backend:80 (<error: endpoints "default-http-backend" not found>)
Rules:
  Host              Path  Backends
  ----              ----  --------
  rancher.demo.com
                       rancher:80 (10.42.0.32:80,10.42.1.48:80)
Annotations:        field.cattle.io/publicEndpoints:
                      [{"addresses":["192.168.1.81","192.168.1.82"],"port":80,"protocol":"HTTP","serviceName":"cattle-system:rancher","ingressName":"cattle-syst...
                    meta.helm.sh/release-name: rancher
                    meta.helm.sh/release-namespace: cattle-system
                    nginx.ingress.kubernetes.io/proxy-connect-timeout: 30
                    nginx.ingress.kubernetes.io/proxy-read-timeout: 1800
                    nginx.ingress.kubernetes.io/proxy-send-timeout: 1800
                    nginx.ingress.kubernetes.io/ssl-redirect: false
Events:             <none>

```
