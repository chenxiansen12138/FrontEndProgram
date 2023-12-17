//西游记
const xiyou =['唐僧','孙悟空','猪八戒','沙僧'];
const ejs=require('ejs');
const fs = require('fs');
let listRender = fs.readFileSync('./02_ListRendering.html').toString();
//EJS实现
let  result=ejs.render(listRender,{xiyou:xiyou});
console.log(result);