"use strict";(self.webpackChunkvblog=self.webpackChunkvblog||[]).push([[172],{6078:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-ae434738",path:"/frontend/article/sts.html",title:"STS",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"sts 临时身份验证",slug:"sts-临时身份验证",children:[{level:3,title:"案例 🦷",slug:"案例-🦷",children:[]}]}],filePathRelative:"frontend/article/sts.md",git:{updatedTime:1636376439e3,contributors:[{name:"bootvue",email:"bootvue@gmail.com",commits:1}]}}},9383:(n,s,a)=>{a.r(s),a.d(s,{default:()=>C});var t=a(6252),e=a(1292);const c=(0,t._)("h1",{id:"sts",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#sts","aria-hidden":"true"},"#"),(0,t.Uk)(" STS")],-1),o=(0,t._)("h2",{id:"sts-临时身份验证",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#sts-临时身份验证","aria-hidden":"true"},"#"),(0,t.Uk)(" sts 临时身份验证")],-1),l=(0,t._)("h3",{id:"案例-🦷",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#案例-🦷","aria-hidden":"true"},"#"),(0,t.Uk)(" 案例 🦷")],-1),p=(0,t._)("blockquote",null,[(0,t._)("p",null,"客户端使用 STS 临时凭证访问云服务")],-1),u=(0,t._)("p",null,[(0,t.Uk)("sts 全称 "),(0,t._)("code",null,"security token service"),(0,t.Uk)(", 目前主流的云服务平台基本都支持, 下文主要以阿里云为案例讲解, aws 大同小异, 可以类比参考. sts 可以使客户端不暴露 accessKey 与 accessSecret 实现对云服务的直接安全请求调用, 减少与后端接口的交互与额外的流量消耗.")],-1),_=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"TIP"),(0,t._)("p",null,[(0,t.Uk)("服务端生成 sts 临时 token 与 signature, 客户端直接基于 "),(0,t._)("code",null,"sts token"),(0,t.Uk)("、"),(0,t._)("code",null,"signature"),(0,t.Uk)(" 签名等必要的参数信息实现 OSS 文件上传.")])],-1),k=(0,t._)("p",null,"使用 STS 授权用户直接访问 OSS 的流程如下： (图片来源 阿里云文档)",-1),i=(0,t._)("p",null,[(0,t._)("img",{src:e,alt:"sts"})],-1),r=(0,t._)("ol",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("创建用于 sts 认证的"),(0,t._)("code",null,"子用户"),(0,t.Uk)(", 复制下"),(0,t._)("code",null,"子用户的 AccessKey ID 与 AccessKey Secret")])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("新建 "),(0,t._)("code",null,"Ram"),(0,t.Uk)(" 角色, 分配 "),(0,t._)("code",null,"AliyunSTSAssumeRoleAccess"),(0,t.Uk)(" 的系统策略权限, 同时新增权限策略, 添加对应云服务的策略, 以 oss 为例:")]),(0,t._)("p",null,"具体策略配置方式查看文档, 或者通过生成器生成.")])],-1),m=(0,t._)("div",{class:"language-json ext-json line-numbers-mode"},[(0,t._)("pre",{class:"language-json"},[(0,t._)("code",null,[(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},'"Version"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"1"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token property"},'"Statement"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token property"},'"Effect"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"Allow"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token property"},'"Action"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},'"oss:PutObject"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"oss:GetObject"'),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token property"},'"Resource"'),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},'"acs:oss:*:*:xx-bucket/oo"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"acs:oss:*:*:xx-bucket/oo/*"'),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br")])],-1),U=(0,t._)("ol",{start:"3"},[(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("复制下 "),(0,t._)("code",null,"Ram"),(0,t.Uk)(" 角色的 "),(0,t._)("code",null,"ARN"),(0,t.Uk)(" 字段值, 也可以修改"),(0,t._)("code",null,"最大会话时间"),(0,t.Uk)(".")])]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("账号相关权限分配结束, 下面开始写服务端代码, 生成 "),(0,t._)("code",null,"sts token"),(0,t.Uk)("、signature "),(0,t._)("code",null,"、"),(0,t.Uk)("policy` 等信息.")])])],-1),b=(0,t._)("p",null,[(0,t.Uk)("接口调用也可以用 "),(0,t._)("code",null,"OpenAPI Explorer"),(0,t.Uk)(" 调试请求")],-1),d=(0,t._)("p",null,"以 java 代码为例(基于旧 sdk):",-1),g=(0,t._)("div",{class:"language-java ext-java line-numbers-mode"},[(0,t._)("pre",{class:"language-java"},[(0,t._)("code",null,[(0,t._)("span",{class:"token comment"},"// STS接入地址，例如sts.cn-hangzhou.aliyuncs.com。"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" regionId "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'""'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 填写步骤1生成的访问密钥AccessKey ID和AccessKey Secret。"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" accessKeyId "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"xxxxxxxxxx"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" accessKeySecret "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"ooooooooooo"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" endPoint "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"....."'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("  "),(0,t._)("span",{class:"token comment"},"// oss bucket endpoint"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 填写步骤3获取的角色ARN。"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" roleArn "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" appConfig"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getAliArn"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 自定义角色会话名称，用来区分不同的令牌，例如可填写为SessionTest。"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" roleSessionName "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"xxTest"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" path "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token string"},'"oo"'),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// oss bucket 内文件子路径"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"Long"),(0,t.Uk)(" maxFileSize "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"10"),(0,t.Uk)(" _ "),(0,t._)("span",{class:"token number"},"1024"),(0,t.Uk)(" _ "),(0,t._)("span",{class:"token number"},"1024L"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 最大 10M"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token comment"},"// 1 小时有效"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token class-name"},"OffsetDateTime"),(0,t.Uk)(" expires "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"LocalDateTime"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"now"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"plusHours"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"1L"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"atOffset"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token class-name"},"ZoneOffset"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"of"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},'"+8"'),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n​\n"),(0,t._)("span",{class:"token keyword"},"try"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// sts token"),(0,t.Uk)("\n    ​\n    "),(0,t._)("span",{class:"token comment"},"// 构造 profile。"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},"IClientProfile"),(0,t.Uk)(" profile "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"DefaultProfile"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getProfile"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("regionId"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" accessKeyId"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" accessKeySecret"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// 构造 client。"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},"DefaultAcsClient"),(0,t.Uk)(" client "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"DefaultAcsClient"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("profile"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"final"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"AssumeRoleRequest"),(0,t.Uk)(" request "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"AssumeRoleRequest"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    request"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setRoleArn"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("roleArn"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    request"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setRoleSessionName"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("roleSessionName"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    request"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"setDurationSeconds"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"3600L"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(),(0,t._)("span",{class:"token comment"},"// 设置临时访问凭证的有效时间为 3600 秒。"),(0,t.Uk)("\n    ​\n    "),(0,t._)("span",{class:"token class-name"},"AssumeRoleResponse"),(0,t.Uk)(" response "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" client"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getAcsResponse"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("request"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},[(0,t.Uk)("AssumeRoleResponse"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("Credentials")]),(0,t.Uk)(" credentials "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" response"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getCredentials"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" stsToken "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" credentials"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getSecurityToken"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    ​\n    "),(0,t._)("span",{class:"token comment"},"// 签名"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},"OSS"),(0,t.Uk)(" ossClient "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"OSSClientBuilder"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"build"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("endPoint"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" credentials"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getAccessKeyId"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" credentials"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getAccessKeySecret"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" stsToken"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    ​\n    "),(0,t._)("span",{class:"token comment"},"// policy 策略, 进一步限定权限"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token comment"},"// 临时访问凭证最后获得的权限是步骤 4 设置的角色权限和该 Policy 设置权限的交集，"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},"PolicyConditions"),(0,t.Uk)(" policyConditions "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"PolicyConditions"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    policyConditions"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"addConditionItem"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token class-name"},"PolicyConditions"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("COND_CONTENT_LENGTH_RANGE"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" maxFileSize"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    ​\n    "),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" policy "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" ossClient"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"generatePostPolicy"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token class-name"},"Date"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"from"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("expires"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"toInstant"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" policyConditions"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token class-name"},"String"),(0,t.Uk)(" signature "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" ossClient"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"calculatePostSignature"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("policy"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    ​\n    log"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"info"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},'"endpoint: {},policy: {},signature: {}, path: {}, accessKeyId: {}, sts_token: {}"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("endPoint"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Base64Utils"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"encodeToString"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("policy"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getByte"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token class-name"},"StandardCharsets"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("UTF_8"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    signature"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" credentials"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"getAccessKeyId"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" stsToken"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"catch"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token class-name"},"ClientException"),(0,t.Uk)(" e"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    log"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"error"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},'"获取 sts token 失败"'),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" e"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"12"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"13"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"14"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"15"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"16"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"17"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"18"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"19"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"20"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"21"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"22"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"23"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"24"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"25"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"26"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"27"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"28"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"29"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"30"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"31"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"32"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"33"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"34"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"35"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"36"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"37"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"38"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"39"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"40"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"41"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"42"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"43"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"44"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"45"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"46"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"47"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"48"),(0,t._)("br")])],-1),f=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"WARNING"),(0,t._)("p",null,[(0,t.Uk)("注意: 生成客户端参数 "),(0,t._)("code",null,"signature"),(0,t.Uk)(" 时, 基于的是生成 "),(0,t._)("code",null,"sts"),(0,t.Uk)(" 时返回的"),(0,t._)("code",null,"临时 AccessKeyId"),(0,t.Uk)(" 和"),(0,t._)("code",null,"临时的 AccessKeySecret"),(0,t.Uk)(", 包括最后客户端发起 http 请求使用的也是与 sts 对应返回的"),(0,t._)("code",null,"临时 AccessKeyId"),(0,t.Uk)(", 而不是一开始创建的"),(0,t._)("code",null,"子用户 id"),(0,t.Uk)(".")])],-1),y=(0,t._)("p",null,[(0,t.Uk)("权限方面, 一定是 "),(0,t._)("code",null,"Ram"),(0,t.Uk)(" 角色权限、"),(0,t._)("code",null,"policy"),(0,t.Uk)("、"),(0,t._)("code",null,"bucket"),(0,t.Uk)(" 权限的最小交集. 注意不要搞的太复杂啰嗦把自己带沟里.")],-1),S=(0,t._)("ol",{start:"5"},[(0,t._)("li",null,"客户端(web、app、小程序、postman 等等)拿到 sts token、signature、policy、临时的 accessKeyId 等信息就可以直接发起 post 请求向 oss 上传文件了.")],-1),h=(0,t._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t.Uk)("url: bucket endpoint\n\n请求方式: post/form-data\n\n参数:\nkey: 上传后的文件路径+文件名\npolicy: policy json 字符串"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("base64"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)("\nOSSAccessKeyId: 临时的 accessKeyId\nsignature: 基于临时 accessKeyId accessKeySecret 计算的签名\nx-oss-security-token: sts token\nfile: 要上传的文件\n")])]),(0,t._)("div",{class:"line-numbers"},[(0,t._)("span",{class:"line-number"},"1"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"2"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"3"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"4"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"5"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"6"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"7"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"8"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"9"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"10"),(0,t._)("br"),(0,t._)("span",{class:"line-number"},"11"),(0,t._)("br")])],-1),A=(0,t._)("p",null,"总结: 基于 sts 客户端文件上传 oss, 节省了服务端的带宽流量, 安全可靠, 不止 oss 服务, 绝大多数云服务也都可以基于 sts 的方式请求, 具体可以结合项目情况灵活选择.",-1),x={},C=(0,a(3744).Z)(x,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)(t.HY,null,[c,o,l,p,u,_,k,i,r,m,U,b,d,g,f,y,S,h,A],64)}]])},3744:(n,s)=>{s.Z=(n,s)=>{for(const[a,t]of s)n[a]=t;return n}},1292:(n,s,a)=>{n.exports=a.p+"assets/img/sts.82e8c691.jpg"}}]);