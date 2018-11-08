//数组的结构赋值
//以前的代码风格
var a = 1;
var b = 2;
var c = 3;

//es6
var [a, b, c] = [1, 2, 3];

//数组的解构赋值，如果解构不成功，变量的值就等于undefined
let [foo, [[bar], [brz]]] = [1, [[2], [3]]];


//解构不成功,foo=undefined
var [foo] = []; //foo=undefined
var [bar, foo] = [1]; //foo=undefined

//不完全解构，赋值成功
let [x, y] = [1, 2, 3]; //x=1 y=2
let [a, [b, c]] = [1, [2, 3], 4];  //a=1 b=2 c=3

//报错
let [foo] = 1;
let [foo] = false;
let [foo] = NaN;
let [foo] = undefined;
let [foo] = null;
let [foo] = {};


//解构不仅适应var  也适应let const


//set解构也可以进行数组解构
let [x, y, x] = new Set(["1", "2", "3"]);

//原生具有Iterator接口，进行解构
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
var [first, second, trird, fourth, fifth, sixth] = fibs();