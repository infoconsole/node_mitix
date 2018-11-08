//对象的解构赋值   不受顺序影响
var {foo, bar} = {foo: "aaa", bar: "bbb"};

//对象解构不是赋值
var {brz} = {foo: "aaa", bar: "bbb"}; //undefined

var {foo: baz} = {foo:"aaa", baz: "bbb"};
//baz aaa
//foo error:foo is not defined  foo是模式 不是变量

//可以内嵌对象
var obj = {
    p: ["Hello", {y: "World"}]
};
var {p: [x, {y}]} = obj;
//x hello
//y World
//p是模式


