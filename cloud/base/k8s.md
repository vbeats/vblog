# K8s

- 节点（Node）：一个节点是一个运行 Kubernetes 中的主机。
- 容器组（Pod）：一个 Pod 对应于由若干容器组成的一个容器组，同个组内的容器共享一个存储卷(volume)。
- 容器组生命周期（pos-states）：包含所有容器状态集合，包括容器组状态类型，容器组生命周期，事件，重启策略，以及 replication controllers。
- Replication Controllers：主要负责指定数量的 pod 在同一时间一起运行 废弃
- 服务（services）：一个 Kubernetes 服务是容器组逻辑的高级抽象，同时也对外提供访问容器组的策略。
- 卷（volumes）：一个卷就是一个目录，容器对其有访问权限。
- 标签（labels）：标签是用来连接一组对象的，比如容器组。标签可以被用来组织和选择子对象。
- 接口权限（accessing_the_api）：端口，IP 地址和代理的防火墙规则。
- web 界面（ux）：用户可以通过 web 界面操作 Kubernetes。
- 命令行操作（cli）：kubectl 命令。

## kubeadm 引导集群

> image registry: `registry.aliyuncs.com/google_containers`

> 1master 2 node

| Node           | role                 |
| -------------- | -------------------- |
| 192.168.100.80 | control-plane,master |
| 192.168.100.81 | worker               |
| 192.168.100.82 | worker               |

## 初始化集群

1. 安装`kubeadm` `kubelet` `kubectl` , `kubelet`设为自启动
2. `kubeadm` 初始化`control-plane` `etcd`

```bash
kubeadm config print init-defaults > k8s.yaml
```

```yaml
apiVersion: kubeadm.k8s.io/v1beta2
bootstrapTokens:
  - groups:
      - system:bootstrappers:kubeadm:default-node-token
    token: abcdef.0123456789abcdef
    ttl: 24h0m0s
    usages:
      - signing
      - authentication
kind: InitConfiguration
localAPIEndpoint:
  advertiseAddress: 192.168.100.80
  bindPort: 6443
nodeRegistration:
  criSocket: /var/run/dockershim.sock
  name: master
  taints:
    - effect: NoSchedule
      key: node-role.kubernetes.io/master
---
apiServer:
  timeoutForControlPlane: 4m0s
apiVersion: kubeadm.k8s.io/v1beta2
certificatesDir: /etc/kubernetes/pki
clusterName: kubernetes
controllerManager: {}
dns:
  type: CoreDNS
etcd:
  local:
    dataDir: /var/lib/etcd
imageRepository: k8s.gcr.io
kind: ClusterConfiguration
kubernetesVersion: v1.20.0
networking:
  dnsDomain: cluster.local
  serviceSubnet: 10.96.0.0/12
  podSubnet: 10.244.0.0/16
scheduler: {}
```

3. 下载必要的组件

```bash
kubeadm config images list --config ./k8s.yaml


# k8s.gcr.io/kube-apiserver:v1.20.0
# k8s.gcr.io/kube-controller-manager:v1.20.0
# k8s.gcr.io/kube-scheduler:v1.20.0
# k8s.gcr.io/kube-proxy:v1.20.0
# k8s.gcr.io/pause:3.2
# k8s.gcr.io/etcd:3.4.13-0
# k8s.gcr.io/coredns:1.7.0


kubeadm config images pull --config ./k8s.yaml
```

4. 初始化`control-plane`

```bash
kubeadm init --config ./k8s.yaml

#  其他节点最后加入
sudo kubeadm join 192.168.100.80:6443 --token abcdef.0123456789abcdef \
    --discovery-token-ca-cert-hash sha256:8a8e18afb8aaa05d35305bd7d65e50542d5673032fcb0988089a298fe330cea3

```

5. 环境变量

```bash
# 非 root 用户使 `kubectl` 命令   admin.conf从control-plane节点同步到其它worker节点
  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

# root用户

  export KUBECONFIG=/etc/kubernetes/admin.conf

```

6. 集群 pod 网关通信组件

> 第三方有多种实现

[flannel](https://github.com/coreos/flannel)

```bash
# 集群主节点执行即可
kubectl apply -f flannel.yaml  # 镜像需要拉取
```

## dashboard

[dashboard](https://github.com/kubernetes/dashboard/)

```bash
# port需要开放
kubectl edit services kubernetes-dashboard -n kubernetes-dashboard

# type: NodePort
```

## 高可用集群

上云吧

## kubectl

`kubectl create/apply -f xxx.yaml --record` create 与 apply : apply 更新 create 新建,已存在报错 record 记录每次变化

`kubectl get pods -o wide -n xkube-system` : namespace

`kubectl logs podName -c containerName -n kube-system`: 查看某个 pod 日志

`kubectl describe pod xxxx -n kube-system`:查看 pod 详细信息

`kubectl get/delete namespace/namespaces/ns/services/svc/deploy/secrets/pods -n xxxx -o yaml/wide` : services:svc deployment: deploy ns:namespace

`kubectl scale deployment/deployName --replicas=3` : 伸缩

`kubectl set image deployment/deployName xxx/vvv:latest`:更新 deploy 镜像

`kubectl rollout undo deployment/deployName --to-revesion=2`:回滚到某次的状态 默认上一次

`kubectl rollout status deployment/deployName`:查看回滚状态

`kubectl rollout history deployment/deployName`:查看部署历史

`kubectl explain spec.xx` : 查看 yaml 配置模板

`kubectl exit pod/svc xxx`: 编辑资源 yaml, 修改某些字段可能无效

`kubectl exec podName -c containerName -it -- /bin/bash` :进入 pod 容器内

`kubectl label pod xxx k=v --override=true`: 修改某个资源的 label

`kubectl expose deployment xxxx --port=80 --target-port=80`

- svc 绑定端口 port/对外暴露端口 target-port/容器内端口 默认一致 node-port/外部可以访问的端口
- 默认 type: ClusterIP 集群内访问 NodePort:外部可以访问

`kubectl create configmap xxx --from-file=/xxxx` :configmap

`kubectl get cm/confgmap`

`kubectl taint ndoes xxx k=v:effect`: 设置污点

## pod

### 生命周期

```bash
pause启动(完成网络与volume初始化)
init初始化(依次,上一个成功才开始下一个)  start(postStart)  run  stop(preStop)   readines:就绪检测 liveness: 存活检测

init初始化失败,会按照容器重启策略重启

正在初始化的状态为pending

initContainers name不能重复
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
    - name: myapp-container
      image: busybox
      command: ["sh", "-c", "echo The app is running! && sleep 3600"]
  initContainers:
    - name: init-myservice
      image: busybox
      command:
        [
          "sh",
          "-c",
          "until nslookup myservice; do echo waiting for myservice; sleep 2; done;",
        ]
    - name: init-mydb
      image: busybox
      command:
        [
          "sh",
          "-c",
          "until nslookup mydb; do echo waiting for mydb; sleep 2; done;",
        ]
```

### 状态检测

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: readiness
  name: readiness-http
spec:
  containers:
    - name: readiness-http
      image: nginx
      ports:
        - name: http
          containerPort: 80
      readinessProbe:
        httpGet:
          path: /health
          port: http
          scheme: HTTP
```

```yaml
apiVersion: v1
kind: Pod
metadata:
  labels:
    test: liveness
  name: liveness-http
spec:
  containers:
    - name: liveness-http
      image: nginx
      ports:
        - name: http
          containerPort: 80
      lifecycle:
        postStart:
          exec:
            command:
              [
                "/bin/sh",
                "-c",
                "echo liveness-http test > /usr/share/nginx/html/health",
              ]
      livenessProbe:
        httpGet:
          path: /health
          port: http
          scheme: HTTP
```

### 类型

`自主pod`:退出了就拉倒
`控制器管理的pod`:按控制器策略创建

## 服务发现

pod 资源的抽象 label-selector 对 pod 逻辑分组

### port

- ClusterPort 集群内
- NodePort 每个 node 节点都绑定端口对外服务
- LoadBalancer
- ExternalName 集群外部服务引入到集群内部来

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector:
    app: MyApp
  ports:
    - protocol: TCP
      port: 80
      targetPort: 9376
```

### headless service

有状态服务使用

### ExternalName

```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-service
  namespace: prod
spec:
  type: ExternalName
  externalName: my.database.example.com
```

## ingress 负载均衡器

[nginx-ingress](https://github.com/kubernetes/ingress-nginx)

## 存储

### config map

k:文件名 v:文件内容

```
kubectl create configmap xxx --from-file=/xxxx --from-liberal=kk=vv
```

### secret

- service account: 访问 k8s api, 默认挂载到 pod 的`/run/secrets/kubernets.io/serviceaccount/`中
- opaque: base64 编码
- docker config json: 用于 registry 认证

### volume

- emptyDir :暂存,删光 pod 就没了
- hostPath: 挂载主机目录

### pv/pvc

- 回收策略
- 读写策略

statefulset/deployment--->pvc 模板---->选择符合条件的 pv

## 工作负载

### Replication Controllers

废弃

### Replica Sets

支持 selector, 管理 pods 的创建调度

```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: frontend
  labels:
    app: guestbook
    tier: frontend
spec:
  # modify replicas according to your case
  replicas: 3
  selector:
    matchLabels:
      tier: frontend
  template:
    metadata:
      labels:
        tier: frontend
    spec:
      containers:
        - name: php-redis
          image: gcr.io/google_samples/gb-frontend:v3
```

### Deployment

通过 replica sets 管理 pods, 回滚 更新等等

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
  labels:
    app: nginx
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
        - name: nginx
          image: nginx:1.14.2
          ports:
            - containerPort: 80
```

### Daemon Sets

所有 node 或某些 node 节点都运行某一个 pod

### Stateful Sets

有状态服务,podname hostname 重新调度后不会改变
有序部署 伸缩

### Cron Jobs

定时任务

### Jobs

批处理任务,执行失败的可以重新执行

### hpa

自动伸缩

## 调度器

`Scheduler`: 分配 pod 到合适的节点

### 调度过程

1. 预选,排除不符合的节点
2. 符合条件的节点排序

### affinity

`节点亲和性/pod亲和性` 标签匹配

node hostname 标签 : `kubernetes.io/hostname`

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: with-node-affinity
spec:
  affinity:
    nodeAffinity:
      requiredDuringSchedulingIgnoredDuringExecution:
        nodeSelectorTerms:
          - matchExpressions:
              - key: kubernetes.io/e2e-az-name
                operator: In
                values:
                  - e2e-az1
                  - e2e-az2
      preferredDuringSchedulingIgnoredDuringExecution:
        - weight: 1
          preference:
            matchExpressions:
              - key: another-node-label-key
                operator: In
                values:
                  - another-node-label-value
  containers:
    - name: with-node-affinity
      image: k8s.gcr.io/pause:2.0
```

### taint/toleration

`污点/容忍`

k=v(可以为空):effect(noschedule prefernoschedule noExecute)

`kubectl taint ndoes xxx k=v:effect`

```yaml
tolerations:
  - key: "xxx"
    operator: "Equal"
    value: "xxxx"
    effect: "NoSchedule"
    tolerationSeconds: 7200
```

### 指定节点

```yaml
spec:
  nodeName: "xxx"
---
spec:
  nodeSelector:
    key: value # label
```

### 安全控制

1. authentication
2. authorization
3. admission control

### rbac

- Role
- ClusterRole
- RoleBinding
- ClusterRoleBinding

## yaml 配置

### version

`必须有` `apps/v1` `kubectl api-versions`

### kind

资源类型: `Pod` `Deployment`等

### metadata

- name
- namespace 默认 default
- labels

### spec

资源详细信息

- initContainers: init 容器,依次启动
- containers : 容器集合

  - name
  - image
  - imagePullPolicy:always never ifnotpresent
  - command: 容器启动命令
  - args
  - workingDir
  - volumeMounts: 存储卷, name path 等等
  - ports: 端口集合
    - name: 端口名称
    - containerPort: 容器监听端口
    - hostPort: 主机监听端口,默认与 containerPort 一致
    - protocol: tcp/udp
  - env: 环境变量
  - resources: 资源限制

- restartPolicy: pod 重启策略 always onfailure never
- nodeSelector: k/v 标签, node 过滤标签
- imagePullSecrets: pull image 时的 secret
- hostNetwork: 是否使用宿主机网络 默认 false

## Helm

> 包管理工具, heml3 移除了 tiller

### chart

应用信息集合,各种配置

### release

chart 的实例

### 自定义 chart

1. `Chart.yaml`

```yaml
# name version必须有
name: xxxx
version: 1.0.0
```

2. 创建 k8s yaml 文件

`./templates/deployment.yaml`

```yaml
apiVersion: apps/v1
kind: Deployment
#  ...
```

`./templates/service.yaml`

```yaml
# service yaml配置
```

3. 启动

```bash
helm create xxx  # 创建chart目录和chart用到的公共文件目录结构

helm lint xxx   # 检查配置

helm install --set name=xxx .

helm install -n xxx -namespace vvv .

helm list

helm upgrade xxxx
```

### Values

`valuse.yaml` 定义变量信息

```yaml
xxx: test
```

`k8s.yaml` 中引用:

```yaml
xx: { { .Values.xxx } }
```
