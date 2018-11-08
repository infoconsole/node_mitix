/*
    模块的引入

    1.模块的引入
    通过require()引入
    可以传递文件的路径进行引入外部模块
    相对路径必须以.或者..开头


    2.我们使用require引入模块以后，该函数会返回一个变量

    3.引入外部模块时，使用模块标识（路径就是模块表示）
        3.1 核心模块
            Node核心引擎提供的模块，使用模块名字
        3.2 文件模块
            使用文件模块的路径进行引用 .  ..
 */
var mod = require('./02.module');
console.log(mod);


var math = require('./04.math');
console.log(math.add(2, 3));


const fs = require('fs');
console.log(fs);