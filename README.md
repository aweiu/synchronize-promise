# promise-sync
用于同步执行promise方法

## 安装
```
npm install promise-sync
```
## 使用示例
```
import PromiseSync from 'promise-sync'
var nPromiseSync = new PromiseSync()
function test(){
    return nPromiseSync.do(() => {
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