/**
 * 通过isLogin决定最终的输出内容
 * true 输出【<span>欢迎回来</span>】
 * false 输出【<button登陆</button><button>注册</button>】
 */

//变量
let isLogin=true;
// if (isLogin){
//     console.log("<span>欢迎回来</span>");
// }else{
//     console.log("<button登陆</button> <button>注册</button>");
// }
const ejs = require('ejs');
const fs = require('fs');
//EJS 实现
let result=ejs.render(fs.readFileSync('./03_ConditionalRendering.html').toString(),{isLogin});
console.log(result);