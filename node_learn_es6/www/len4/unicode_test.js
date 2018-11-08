console.log("\u0061");
console.log("\uD842\uDFB7");
console.log("\u20bb7");
console.log("\u{20BB7}");
console.log("\u{41}\u{42}\u{43}");
let hello = 123;
console.log("hell\u{6F}");
console.log("\u{1F680}" === "\uD83D\uDE80");

//字符表示方法
console.log("\z");
console.log("\172");
console.log("\x7A");
console.log("\u007A");
console.log("\u{7A}");


//codePointAt
let s = "𠮷a";
console.log(s.length);
console.log(s.charAt(0));
console.log(s.charAt(1));
console.log(s.charCodeAt(0));
console.log(s.charCodeAt(1));


console.log("----------------------------");
let ss = "𠮷a";
console.log(ss.codePointAt(0));
console.log(ss.codePointAt(1));
console.log(ss.charCodeAt(2));
console.log(ss.codePointAt(0).toString(16));

//测试字符由2个字节还是4个字节组成
function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}

console.log(is32Bit("𠮷"));
console.log(is32Bit("a"));


//log
console.log(String.fromCodePoint(0x20BB7));


for(let codePoint of 'fpppp'){
    console.log(codePoint);
}

