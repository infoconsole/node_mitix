/*
    Buffer  缓冲区
        -   Buffer结构和数组很像，操作的方法也和数组类似ls

        -   数组是不能存储二进制数据的   buffer是存储二进制数据的

        -   使用buffer 不需要引入

        -   详细信息可以在Node上查询
 */

var str = 'hello oldflame-Jm';

var buf = Buffer.from(str);

console.log(buf);
