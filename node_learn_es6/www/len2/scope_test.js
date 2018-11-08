var func = new Array();
func.push(function () {
    console.log("------------内层变量覆盖外层----------")
    var tmp = new Date();

    function f() {
        console.log(tmp);
        if (false) {
            var tmp = "hello world";
        }
    }

    f();
});


//es6的块级作用域
func.push(function () {
    console.log("---------es6的块级作用域-----------");
    let n = 5;
    if (true) {
        let n = 10;
    }
    console.log(n);
})

func.push(function () {
    console.log("---------es6的块级作用域2-----------");
    {
        {
            {
                let insname = "Hello world";

            }
            console.log(insname);
        }
    }
})


func.push(function () {
    console.log("---------es6函数块级作用域-----------");

    function f() {
        console.log("I am outSide");
    }

    (function () {
        if (false) {
            //重复什么函数
            function f() {
                console.log("I am  inSide");
            }
        }
        f();
    }());
});

for (let x = 0; x < func.length; x++) {
    try {
        func[x]();
    } catch (e) {
        console.log(e);
    }

}