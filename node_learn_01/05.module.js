/*
    证明x是局部变量不是全局变量
 */


var x = 10;

/*
    1.NodeJs的全局对象就是global

    2.全局变量是全局对象的属性

    3.在全局对象上的函数就是全局函数

    4.Node自动对代码添加函数如下
        function (exports, require, module, __filename, __dirname) {
            //自定义代码
        }
 */

//全局对象
//console.log(global);

//证明运行的代码是在函数里面不是在全局对象里
//console.log(arguments);

//arguments.callee保存的是当前执行的函数对象
console.log(arguments.callee.toString());