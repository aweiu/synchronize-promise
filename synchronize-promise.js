"use strict";

/**
 * Created by awei on 2016/9/3.
 */
function SyncPromise() {}
SyncPromise.prototype.do = function (promiseFun) {
  this._lastPromise = this._lastPromise ? this._lastPromise.then(() => promiseFun()).catch(() => promiseFun()) : promiseFun();
  return this._lastPromise;
};
module.exports = SyncPromise;