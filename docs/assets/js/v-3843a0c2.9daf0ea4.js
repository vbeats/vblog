"use strict";(self.webpackChunkvblog=self.webpackChunkvblog||[]).push([[301],{8816:(l,e,n)=>{n.r(e),n.d(e,{data:()=>a});const a={key:"v-3843a0c2",path:"/backend/base/jvm.html",title:"JVM 🌟",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"反编译",slug:"反编译",children:[]},{level:2,title:"指令集架构",slug:"指令集架构",children:[]},{level:2,title:"生命周期",slug:"生命周期",children:[]},{level:2,title:"Runtime",slug:"runtime",children:[]},{level:2,title:"架构图",slug:"架构图",children:[]},{level:2,title:"classlocader",slug:"classlocader",children:[]},{level:2,title:"jvm 参数",slug:"jvm-参数",children:[]},{level:2,title:"GC",slug:"gc",children:[]},{level:2,title:"oom",slug:"oom",children:[]},{level:2,title:"调试",slug:"调试",children:[]},{level:2,title:"CountDownLatch",slug:"countdownlatch",children:[]},{level:2,title:"CyclicBarrier",slug:"cyclicbarrier",children:[]},{level:2,title:"Semaphore",slug:"semaphore",children:[]},{level:2,title:"ReentrantLock",slug:"reentrantlock",children:[]},{level:2,title:"Condition",slug:"condition",children:[]},{level:2,title:"ReadWriteLock/ReetrantReadWriteLock",slug:"readwritelock-reetrantreadwritelock",children:[]},{level:2,title:"volatile",slug:"volatile",children:[]},{level:2,title:"BlockingQueue",slug:"blockingqueue",children:[]},{level:2,title:"ThreadPool",slug:"threadpool",children:[]},{level:2,title:"ForkJoin",slug:"forkjoin",children:[]},{level:2,title:"CompleteableFuture",slug:"completeablefuture",children:[]},{level:2,title:"函数式编程",slug:"函数式编程",children:[]}],filePathRelative:"backend/base/jvm.md",git:{updatedTime:1636184149e3,contributors:[{name:"bootvue",email:"bootvue@gmail.com",commits:1}]}}},9349:(l,e,n)=>{n.r(e),n.d(e,{default:()=>ml});var a=n(6252),r=n(772);const i=(0,a._)("h1",{id:"jvm-🌟",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#jvm-🌟","aria-hidden":"true"},"#"),(0,a.Uk)(" JVM 🌟")],-1),s={href:"https://render.alipay.com/p/s/jvm-generate/",target:"_blank",rel:"noopener noreferrer"},u=(0,a.Uk)("工具"),c=(0,a._)("p",null,[(0,a._)("code",null,"hotspot"),(0,a.Uk)(" : "),(0,a._)("code",null,"解释器"),(0,a.Uk)("与"),(0,a._)("code",null,"jit即时编译器"),(0,a.Uk)("协同工作 "),(0,a._)("code",null,"jrocket"),(0,a.Uk)(": oracle 专注于服务端应用, 只包含即时编译器,启动慢 运行时速度快 "),(0,a._)("code",null,"j9"),(0,a.Uk)(": ibm "),(0,a._)("code",null,"harmony"),(0,a.Uk)(": apache/ibm/intel")],-1),o=(0,a._)("p",null,"等等....",-1),t=(0,a._)("h2",{id:"反编译",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#反编译","aria-hidden":"true"},"#"),(0,a.Uk)(" 反编译")],-1),_=(0,a._)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a._)("pre",{class:"language-bash"},[(0,a._)("code",null,"javap -v xxx.class\n")]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br")])],-1),d=(0,a._)("h2",{id:"指令集架构",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#指令集架构","aria-hidden":"true"},"#"),(0,a.Uk)(" 指令集架构")],-1),h=(0,a._)("blockquote",null,[(0,a._)("p",null,"jvm 基于栈的指令集架构, 指令集小 步骤多 跨平台 和 cpu 指令集耦合低")],-1),p=(0,a._)("h2",{id:"生命周期",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#生命周期","aria-hidden":"true"},"#"),(0,a.Uk)(" 生命周期")],-1),k=(0,a._)("ul",null,[(0,a._)("li",null,"启动 bootstrap class loader 创建 init class 来完成"),(0,a._)("li",null,"执行 java 程序"),(0,a._)("li",null,"退出 正常/异常退出")],-1),m=(0,a._)("h2",{id:"runtime",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#runtime","aria-hidden":"true"},"#"),(0,a.Uk)(" Runtime")],-1),b=(0,a._)("blockquote",null,[(0,a._)("p",null,[(0,a.Uk)("管理运行时数据区"),(0,a._)("code",null,"runtime data area")])],-1),g=(0,a._)("h2",{id:"架构图",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#架构图","aria-hidden":"true"},"#"),(0,a.Uk)(" 架构图")],-1),v=(0,a._)("p",null,[(0,a._)("img",{src:r,alt:""})],-1),U=(0,a._)("h2",{id:"classlocader",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#classlocader","aria-hidden":"true"},"#"),(0,a.Uk)(" classlocader")],-1),f=(0,a._)("ol",null,[(0,a._)("li",null,"加载 class 并实例化"),(0,a._)("li",null,"link prepare 阶段 类变量初始化")],-1),x=(0,a._)("h2",{id:"jvm-参数",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#jvm-参数","aria-hidden":"true"},"#"),(0,a.Uk)(" jvm 参数")],-1),j=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"Xms 堆起始内存")]),(0,a._)("li",null,[(0,a._)("p",null,"Xmx 堆最大内存")]),(0,a._)("li",null,[(0,a._)("p",null,"Xmn 新生代大小")]),(0,a._)("li",null,[(0,a._)("p",null,"XX:+PrintGCDetails")]),(0,a._)("li",null,[(0,a._)("p",null,"XX:metspaceSize")]),(0,a._)("li",null,[(0,a._)("p",null,"client/server 64 位默认 server 模式")]),(0,a._)("li",null,[(0,a._)("p",null,"XX:+HeapDumpOnOutOfMemoryError oom 生成 dump 文件"),(0,a._)("p",null,"占用大小->gc 后大小->分配的大小"),(0,a._)("p",null,[(0,a._)("code",null,"yongGC"),(0,a.Uk)(),(0,a._)("code",null,"old"),(0,a.Uk)(),(0,a._)("code",null,"GC fullGc")])])],-1),w=(0,a._)("h2",{id:"gc",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#gc","aria-hidden":"true"},"#"),(0,a.Uk)(" GC")],-1),T=(0,a._)("p",null,[(0,a._)("code",null,"G1")],-1),C=(0,a._)("ul",null,[(0,a._)("li",null,"并发/并行 标记"),(0,a._)("li",null,"分代收集"),(0,a._)("li",null,"空间整合"),(0,a._)("li",null,"可预测的停顿时间模型")],-1),y=(0,a._)("h2",{id:"oom",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#oom","aria-hidden":"true"},"#"),(0,a.Uk)(" oom")],-1),R=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"年轻代"),(0,a._)("p",null,"存活时间短 eden space 满了 gc 转入老年代")]),(0,a._)("li",null,[(0,a._)("p",null,"老年代"),(0,a._)("p",null,"存活时间长 XX:NewRatio=4 新时代 1 老年代 4")]),(0,a._)("li",null,[(0,a._)("p",null,"minor gc 新生代 gc")]),(0,a._)("li",null,[(0,a._)("p",null,"major gc 老年代 gc 用户线程暂停 尽量避免")]),(0,a._)("li",null,[(0,a._)("p",null,"full gc 用户线程暂停 system.gc() 老年代空间不足 方法区空间不足 尽量避免")]),(0,a._)("li",null,[(0,a._)("p",null,"方法区超限")])],-1),q=(0,a._)("h2",{id:"调试",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#调试","aria-hidden":"true"},"#"),(0,a.Uk)(" 调试")],-1),L=(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("p",null,"jvisualVM")]),(0,a._)("li",null,[(0,a._)("p",null,"flight recorder")]),(0,a._)("li",null,[(0,a._)("p",null,"jprofiler")]),(0,a._)("li",null,[(0,a._)("p",null,"gcviewer/gceasy")])],-1),P=(0,a._)("p",null,"内存泄露检查--\x3e堆/方法区内存参数",-1),S=(0,a._)("h1",{id:"并发编程",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#并发编程","aria-hidden":"true"},"#"),(0,a.Uk)(" 并发编程")],-1),X=(0,a._)("h2",{id:"countdownlatch",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#countdownlatch","aria-hidden":"true"},"#"),(0,a.Uk)(" CountDownLatch")],-1),B=(0,a._)("p",null,"减法 线程外等待",-1),F=(0,a._)("h2",{id:"cyclicbarrier",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#cyclicbarrier","aria-hidden":"true"},"#"),(0,a.Uk)(" CyclicBarrier")],-1),D=(0,a._)("p",null,"加法 线程内部等待",-1),G=(0,a._)("h2",{id:"semaphore",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#semaphore","aria-hidden":"true"},"#"),(0,a.Uk)(" Semaphore")],-1),z=(0,a._)("p",null,"信号量 控制线程最大并发数量 acquire()/release()",-1),J=(0,a._)("h2",{id:"reentrantlock",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#reentrantlock","aria-hidden":"true"},"#"),(0,a.Uk)(" ReentrantLock")],-1),E=(0,a._)("p",null,"lock/unLock",-1),O=(0,a._)("h2",{id:"condition",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#condition","aria-hidden":"true"},"#"),(0,a.Uk)(" Condition")],-1),W=(0,a._)("p",null,"条件队列 await/signal 一个线程阻塞等待另一个线程的信号",-1),A=(0,a._)("h2",{id:"readwritelock-reetrantreadwritelock",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#readwritelock-reetrantreadwritelock","aria-hidden":"true"},"#"),(0,a.Uk)(" ReadWriteLock/ReetrantReadWriteLock")],-1),M=(0,a._)("p",null,"读写锁 readLock/writeLock",-1),H=(0,a._)("h2",{id:"volatile",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#volatile","aria-hidden":"true"},"#"),(0,a.Uk)(" volatile")],-1),Q=(0,a._)("p",null,"共享变量（类的成员变量、类的静态成员变量）",-1),V=(0,a._)("ul",null,[(0,a._)("li",null,"保证了不同线程对这个变量进行操作时的可见性，即一个线程修改了某个变量的值，这新值对其他线程来说是立即可见的"),(0,a._)("li",null,"禁止进行指令重排序")],-1),N=(0,a._)("p",null,[(0,a.Uk)("应用场景: "),(0,a._)("code",null,"状态标志"),(0,a.Uk)(),(0,a._)("code",null,"单例模式"),(0,a.Uk)(),(0,a._)("code",null,"独立观察")],-1),Z=(0,a._)("h2",{id:"blockingqueue",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#blockingqueue","aria-hidden":"true"},"#"),(0,a.Uk)(" BlockingQueue")],-1),Y=(0,a._)("p",null,"阻塞队列 put/take",-1),I=(0,a._)("ul",null,[(0,a._)("li",null,"arrayBlockingqueue 数组结构"),(0,a._)("li",null,"linkedBlockingqueue 链表结构"),(0,a._)("li",null,"linkedBlockingdeque 双向链表阻塞队列")],-1),K=(0,a._)("p",null,[(0,a._)("code",null,"插入"),(0,a.Uk)(": add(抛异常) offer(特殊值) put(阻塞) offer(超时) "),(0,a._)("code",null,"移除"),(0,a.Uk)(": remove poll take poll(time) "),(0,a._)("code",null,"检查"),(0,a.Uk)(": element peek 无 无")],-1),$=(0,a._)("blockquote",null,[(0,a._)("p",null,"特殊值: 增删返回 true/false 检查返回元素/null")],-1),ll=(0,a._)("h2",{id:"threadpool",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#threadpool","aria-hidden":"true"},"#"),(0,a.Uk)(" ThreadPool")],-1),el=(0,a._)("p",null,[(0,a._)("code",null,"ExecutorService"),(0,a.Uk)(),(0,a._)("code",null,"Executors")],-1),nl=(0,a._)("ul",null,[(0,a._)("li",null,"newFixedThreadPool"),(0,a._)("li",null,"newCachedThreadPool"),(0,a._)("li",null,"newSingleThreadExecutor"),(0,a._)("li",null,"newScheduledThreadPool")],-1),al=(0,a._)("p",null,[(0,a._)("code",null,"ThreadPoolExecutor"),(0,a.Uk)(":")],-1),rl=(0,a._)("blockquote",null,[(0,a._)("p",null,"最大容纳数 maxpoolSize+queueSize")],-1),il=(0,a._)("ul",null,[(0,a._)("li",null,"corePoolSize"),(0,a._)("li",null,"maxPoolSize cpu 密集型:cpu 核心数 io 密集型:最大任务数-队列容量）/每个线程每秒处理能力 = 最大线程数"),(0,a._)("li",null,"keepAliveTime"),(0,a._)("li",null,"blockingQueue"),(0,a._)("li",null,"threadFactory"),(0,a._)("li",null,[(0,a.Uk)("rejectHandler "),(0,a._)("code",null,"Abort"),(0,a.Uk)("抛异常 "),(0,a._)("code",null,"CallerRuns"),(0,a.Uk)("回退给调用方线程处理 "),(0,a._)("code",null,"Discard"),(0,a.Uk)("丢弃 "),(0,a._)("code",null,"DiscardOldest")])],-1),sl=(0,a._)("h2",{id:"forkjoin",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#forkjoin","aria-hidden":"true"},"#"),(0,a.Uk)(" ForkJoin")],-1),ul=(0,a._)("p",null,[(0,a._)("code",null,"ForkJoinPool"),(0,a.Uk)(),(0,a._)("code",null,"ForkJoinTask"),(0,a.Uk)(),(0,a._)("code",null,"RecursiveTask")],-1),cl=(0,a._)("p",null,[(0,a._)("code",null,"computer"),(0,a.Uk)("方法内 fork() 递归执行 computer 方法任务, 汇总结果 result=xx.join()")],-1),ol=(0,a._)("h2",{id:"completeablefuture",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#completeablefuture","aria-hidden":"true"},"#"),(0,a.Uk)(" CompleteableFuture")],-1),tl=(0,a._)("p",null,[(0,a._)("code",null,"异步回调")],-1),_l=(0,a._)("p",null,[(0,a._)("code",null,"runAsync"),(0,a.Uk)(" : 没有返回值 "),(0,a._)("code",null,"supplyAsync"),(0,a.Uk)(" : 需要返回值")],-1),dl=(0,a._)("p",null,[(0,a._)("code",null,"whenComplete"),(0,a.Uk)(),(0,a._)("code",null,"exceptionaly"),(0,a.Uk)(),(0,a._)("code",null,"get")],-1),hl=(0,a._)("h2",{id:"函数式编程",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#函数式编程","aria-hidden":"true"},"#"),(0,a.Uk)(" 函数式编程")],-1),pl=(0,a._)("div",{class:"language-java ext-java line-numbers-mode"},[(0,a._)("pre",{class:"language-java"},[(0,a._)("code",null,[(0,a._)("span",{class:"token class-name"},"Function"),(0,a._)("span",{class:"token generics"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a._)("span",{class:"token class-name"},"T"),(0,a._)("span",{class:"token punctuation"},","),(0,a._)("span",{class:"token class-name"},"R"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"// T:输入 R:返回"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token comment"},"// R apply(T)"),(0,a.Uk)("\n"),(0,a._)("span",{class:"token class-name"},"Predicate"),(0,a._)("span",{class:"token generics"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a._)("span",{class:"token class-name"},"T"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"//   T:输入 返回:Boolean"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"//   Boolean test(T)"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token class-name"},"Consumer"),(0,a._)("span",{class:"token generics"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a._)("span",{class:"token class-name"},"T"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"//   T:输入 返回:void"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"//   void accept(T)"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token class-name"},"Supplier"),(0,a._)("span",{class:"token generics"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a._)("span",{class:"token class-name"},"T"),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"//   输入:void 返回:T"),(0,a.Uk)("\n\n"),(0,a._)("span",{class:"token comment"},"//   T get()"),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"16"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"17"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"18"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"19"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"20"),(0,a._)("br")])],-1),kl={},ml=(0,n(3744).Z)(kl,[["render",function(l,e){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[(0,a._)("a",s,[u,(0,a.Wm)(n)])]),c,o,t,_,d,h,p,k,m,b,g,v,U,f,x,j,w,T,C,y,R,q,L,P,S,X,B,F,D,G,z,J,E,O,W,A,M,H,Q,V,N,Z,Y,I,K,$,ll,el,nl,al,rl,il,sl,ul,cl,ol,tl,_l,dl,hl,pl],64)}]])},3744:(l,e)=>{e.Z=(l,e)=>{for(const[n,a]of e)l[n]=a;return l}},772:(l,e,n)=>{l.exports=n.p+"assets/img/jvm.46729437.png"}}]);