var func = new Array();

func.push(function () {
    const PI = 3.1415;
    //PI = 3; //TypeError: Assignment to constant variable
});

//变量不提升
func.push(function () {
    if (true) {
        console.log(MAX);
        const MAX = 5; //ReferenceError: MAX is not defined

    }
});

func.push(function () {
    //对象冻结
    const foo = Object.freeze({});
    foo.prop = 13;

});

for (let x = 0; x < func.length; x++) {
    try {
        func[x]();
    } catch (e) {
        console.log(e);
    }

}