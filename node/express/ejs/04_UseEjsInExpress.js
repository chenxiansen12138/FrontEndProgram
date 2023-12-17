const express = require('express');

const path = require('path');
const app = express();
//设置模版引擎
app.set('view engine','ejs');
//设置模版文件的存放位置 模板文件：具有模版语法内容的文件
app.set('views',path.resolve(__dirname,'./views'));

app.get(('/home'),(req,res)=>{
    //render响应
    // res.send('home');
    let title='I am your father!';
    res.render('home',{title});
})
app.listen(3000,()=>{
    console.log("服务已经启动。。。")
})