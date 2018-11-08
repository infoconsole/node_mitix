console.log(Number.isFinite(15));
console.log(Number.isFinite(0.8));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite('foo'));
console.log(Number.isFinite('15'));
console.log(Number.isFinite(true));

console.log("--------------2-------------");

console.log(Number.isNaN(15));
console.log(Number.isNaN(0.8));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(-Infinity));
console.log(Number.isNaN('foo'));
console.log(Number.isNaN('15'));
console.log(Number.isNaN(true));

console.log("---------------3------------");

console.log(Number.parseInt('12.34'));
console.log(Number.parseFloat('12.34#'));

console.log("----------------4-----------");

console.log(Number.isInteger(25));
console.log(Number.isInteger(25.0));
console.log(Number.isInteger(25.1));
console.log(Number.isInteger('15'));
console.log(Number.isInteger("15"));
console.log(Number.isInteger("true"));
console.log(Number.isInteger(true));

console.log("----------------5-----------");
//浮点运算的精度 小于这个值是可以被接受的
console.log(Number.EPSILON);

console.log("----------------6-----------");
console.log(Math.pow(2, 53));
console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53));
console.log(Number.MAX_SAFE_INTEGER === Math.pow(2, 53)-1);