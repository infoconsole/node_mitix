var func = new Array();

func.push(function () {
    console.log("---------------------------");
    for (let a = 1; a < 3; a++) {
        console.log(a);
    }
    //ReferenceError: a is not defined
    console.log("a is " + a);
});

func.push(function () {
    console.log("---------------------------");
    //'var' used instead of 'let' or 'const'
    for (var b = 1; b < 3; b++) {
        console.log(b);
    }
    //This a is 10
    console.log("a is " + b);
});

func.push(function () {
    console.log("-----------变量全局范围有效----------------");
    var c = [];
    for (var i = 0; i < 10; i++) {
        c[i] = function () {
            console.log(i)
        }
    }
    //10
    c[6]();
});


//上面代码中，变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量
func.push(function () {
    console.log("--------------所以每一次循环的i其实都是一个新的变量-------------");
    var d = [];
    for (let i = 0; i < 10; i++) {
        d[i] = function () {
            console.log(i)
        }
    }
    //6
    d[6]();
});


//不存在变量提升
func.push(function () {
    console.log("-------------不存在变量提升--------------");
    console.log(foo);
    let foo;
});

//typeof 不再是安全的操作
func.push(function () {
    console.log("--------------typeof 不再是安全的操作-------------");
    console.log(typeof x);
    let x;
});

//暂时性死区的本质就是，只要一进入当前作用域，所要使用的变量就已经存在了，
//但是不可获取，只有 等到声明变量的那一行代码出现，才可以获取和使用该变量
func.push(function () {
    console.log("------------暂时性死区---------------");
    var tmp = 123;
    if (true) {
        tmp = "abc";
        console.log(tmp); //ReferenceError:

        let tmp;
        console.log(tmp);//undefined

        tmp = 12;
        console.log(tmp); //12
    }
});

//不允许同时声明
func.push(function () {
    //let a = 10;
    //var a = 10;
});

func.push(function (args) {
    //let args; //不允许声明
});

for (let x = 0; x < func.length; x++) {
    try {
        func[x]();
    } catch (e) {
        console.log(e);
    }

}
