# Python ð

## åºç¡

### range

> è¡¨è¾¾å¼ for è¿­ä»£åé in å¯è¿­ä»£å¯¹è±¡ [if æ¡ä»¶è¡¨è¾¾å¼]

### zip

ä½¿ç¨ zip() å½æ°âåç¼©âå¤ä¸ªåºåæ¶ï¼å®ä¼åå«åååºåä¸­ç¬¬ 1 ä¸ªåç´ ãç¬¬ 2 ä¸ªåç´ ã... ç¬¬ n ä¸ªåç´ ï¼åèªç»ææ°çåç»ãéè¦æ³¨æçæ¯ï¼å½å¤ä¸ªåºåä¸­åç´ ä¸ªæ°ä¸ä¸è´æ¶ï¼ä¼ä»¥æç­çåºåä¸ºåè¿è¡åç¼©

```python
my_list = [11,12,13]
my_tuple = (21,22,23)
print([x for x in zip(my_list,my_tuple)])

[(11, 21), (12, 22), (13, 23)]
```

### sorted

ä½¿ç¨ sorted() å½æ°æ¶ï¼è¿å¯ä¼ å¥ä¸ä¸ª key åæ°ï¼å®å¯ä»¥æ¥åä¸ä¸ªå½æ°ï¼è¯¥å½æ°çåè½æ¯æå® sorted() å½æ°æç§ä»ä¹æ åè¿è¡æåº

### exec å eval

> eval() æ§è¡å®è¦è¿åç»æï¼è exec() æ§è¡å®ä¸è¿åç»æ å®ä»¬çç¬¬ä¸ä¸ªåæ°æ¯å­ç¬¦ä¸²ï¼èå­ç¬¦ä¸²çåå®¹ä¸å®è¦æ¯å¯æ§è¡çä»£ç 

### @property

```python
# getter
    @property
    def area(self):
        return self.__area

# setter
@æ¹æ³å.setter
def æ¹æ³å(self, value):
    ä»£ç å
```

### @å½æ°è£é¥°å¨

```python
def funA(fn):
    print("111")
    fn()
    print("333")
    return "444"
@funA
def funB():
    print("2222")

    # ç¸å½äº  funA(funB)

# å¦æBå¸¦åæ°, Aå®ä¹ä¸ä¸ªåBä¸æ ·çåé¨å½æ°å¹¶è¿åè¿ä¸ªå½æ°
def funA(fn):
    # å®ä¹ä¸ä¸ªåµå¥å½æ°
    def say(arc):
        print("xxx:",arc)
    return say

@funA
def funB(arc):
    print("funB():", a)

funB("fffff")
```

### å¤è¿ç¨

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

    ## è¿ç¨æ± 
    p = Pool(4)
    for i in range(5):
        p.apply_async(long_time_task, args=(i,))
    print('Waiting for all subprocesses done...')
    p.close()
    p.join()
    print('All subprocesses done.')
```

> è¿ç¨é´éä¿¡: <code>Queue</code> <code>Pipes</code>

### å¤çº¿ç¨

```python
import time, threading

# æ°çº¿ç¨æ§è¡çä»£ç :
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
