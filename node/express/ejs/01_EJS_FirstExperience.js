const ejs=require('ejs');
const fs = require('fs');

let china='中国';
let weather='今天天气不错～'
//let str = '我爱你 <%= china %>';
//使用ejs渲染
let result = ejs.render(fs.readFileSync(__dirname+'/01_EJS_Use.html').toString(),{china,weather});
console.log(result);