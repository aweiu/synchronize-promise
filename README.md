# synchronize-promise
用于同步执行promise方法

## 安装
```
npm install synchronize-promise
```
## 使用示例
```
import SyncPromise from 'synchronize-promise'
var nSyncPromise = new SyncPromise()
function test(){
    return nSyncPromise.do(() => {
        return new Promise(resolve => {
            setTimeout(resolve => {
                resolve('test')
            }, 3000)
        })
    })
}
// 可以看到每次test都会3s后返回结果 一共6s。它们之间时串行的，独立的
test().then(rs => console.log(rs))
test().then(rs => console.log(rs))
```