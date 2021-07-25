# Python 🐍

## 基础

### range

> 表达式 for 迭代变量 in 可迭代对象 [if 条件表达式]

### zip

使用 zip() 函数“压缩”多个序列时，它会分别取各序列中第 1 个元素、第 2 个元素、... 第 n 个元素，各自组成新的元组。需要注意的是，当多个序列中元素个数不一致时，会以最短的序列为准进行压缩

```python
my_list = [11,12,13]
my_tuple = (21,22,23)
print([x for x in zip(my_list,my_tuple)])

[(11, 21), (12, 22), (13, 23)]
```

### sorted

使用 sorted() 函数时，还可传入一个 key 参数，它可以接受一个函数，该函数的功能是指定 sorted() 函数按照什么标准进行排序

### exec 和 eval

> eval() 执行完要返回结果，而 exec() 执行完不返回结果 它们的第一个参数是字符串，而字符串的内容一定要是可执行的代码

### @property

```python
# getter
    @property
    def area(self):
        return self.__area

# setter
@方法名.setter
def 方法名(self, value):
    代码块
```

### @函数装饰器

```python
def funA(fn):
    print("111")
    fn()
    print("333")
    return "444"
@funA
def funB():
    print("2222")

    # 相当于  funA(funB)

# 如果B带参数, A定义一个和B一样的内部函数并返回这个函数
def funA(fn):
    # 定义一个嵌套函数
    def say(arc):
        print("xxx:",arc)
    return say

@funA
def funB(arc):
    print("funB():", a)

funB("fffff")
```

### 多进程

```python
from multiprocessing import Process
import os

def run_proc(name):
    print('child process %s (%s)...' % (name, os.getpid()))

if __name__=='__main__':
    print('Parent process %s.' % os.getpid())
    p = Process(target=run_proc, args=('test',))
    print('Child process will start.')
    p.start()
    p.join()
    print('Child process end.')

    ## 进程池
    p = Pool(4)
    for i in range(5):
        p.apply_async(long_time_task, args=(i,))
    print('Waiting for all subprocesses done...')
    p.close()
    p.join()
    print('All subprocesses done.')
```

> 进程间通信: <code>Queue</code> <code>Pipes</code>

### 多线程

```python
import time, threading

# 新线程执行的代码:
def loop():
    print('thread %s is running...' % threading.current_thread().name)
    n = 0
    while n < 5:
        n = n + 1
        print('thread %s >>> %s' % (threading.current_thread().name, n))
        time.sleep(1)
    print('thread %s ended.' % threading.current_thread().name)

print('thread %s is running...' % threading.current_thread().name)
t = threading.Thread(target=loop, name='LoopThread')
t.start()
t.join()
print('thread %s ended.' % threading.current_thread().name)
```
