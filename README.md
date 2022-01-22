## synchronizePromise

A ts-type friendly promise Library —— Synchronize your promise!

### Install

```
npm install synchronize-promise
```

### Demo

```javascript
import synchronizePromise from "synchronize-promise";

function test() {
  return new Promise((resolve) =>
    setTimeout(() => resolve("ConcurrentPromise"), 3000)
  );
}

const sTest = synchronizePromise(test);

// you will see the 「ConcurrentPromise」 every three seconds
sTest().then((ret) => console.log(ret));
sTest().then((ret) => console.log(ret));
sTest().then((ret) => console.log(ret));
```

### Related

[A ts-type friendly promise Library —— Concurrent your promise!](https://github.com/aweiu/concurrent-promise)
