/**
 * Created by awei on 2016/9/3.
 */
export default function () {
  var lastPromise
  this.do = function (promise) {
    lastPromise = lastPromise ? lastPromise.then(() => {
      return promise()
    }).catch(() => {
      return promise()
    }) : promise()
    return lastPromise
  }
}
