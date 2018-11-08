let {toString: s} = 123;
s === Number.prototype.toString(); //true

let {toString: s} = true;
s === Boolean.prototype.toString(); //true
