# Rancher 🐄

[文档](https://docs.rancher.cn/rancher2/)

## 高可用部署(k3s)

| ip             | role                      |
| -------------- | ------------------------- |
| 192.168.100.80 | demo.com,数据库,nginx     |
| 192.168.100.81 | k3s server,rancher server |
| 192.168.100.82 | k3s server,rancher server |

> server 节点安装 kubectl k3s helm 工具

1. k3s 集群

k3s server 节点也同时作为 agent 节点部署 rancher

```bash
curl -sfL https://get.k3s.io | sh -s - server \
  --datastore-endpoint="mysql://username:password@tcp(hostname:3306)/database-name"


k3s kubectl get nodes

```

保存`kubeconfig`文件

```bash
cp /etc/rancher/k3s/k3s.yaml ~/.kube/config


kubectl get pods --all-namespaces

# 创建rancher的namespace
kubectl create namespace cattle-system
```

2. 负载均衡器

`7层代理` tls 在 rancher server/k3s 集群内 ingress 终止

```nginx
    upstream rancher {
        server 192.168.100.81:80;
        server 192.168.100.82:80;
    }

    map $http_upgrade $connection_upgrade {
        default Upgrade;
        '' close;
    }

    server {
        listen 443 ssl http2;
        server_name demo.com;
        ssl_certificate /root/demo.com.crt;
        ssl_certificate_key /root/demo.com.key;

        location / {
            proxy_set_header Host $host;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Port $server_port;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_pass http://rancher;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection $connection_upgrade;
            # This allows the ability for the execute shell window to remain open for up to 15 minutes. Without this parameter, the default is 1 minute and will automatically close.
            proxy_read_timeout 900s;
            proxy_buffering off;
        }
    }

    server {
        listen 80;
        server_name demo.com;
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

# tls认证
helm install rancher rancher-stable/rancher \
  --namespace cattle-system \
  --set hostname=demo.com \
  --set ingress.tls.source=secret \
  --set privateCA=true \
  --set tls=ingress \
  --set replicas=2


# tls验证

openssl s_client -connect demo.com:443 -servername demo.com # -CAfile ca.crt

# 查看安装
kubectl -n cattle-system rollout status deploy/rancher

kubectl -n cattle-system get deploy rancher

kubectl get pods -n cattle-system

kubectl describe pod xxxxx -n cattle-system

```
