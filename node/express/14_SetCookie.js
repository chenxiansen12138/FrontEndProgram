const express = require('express');
const app = express();
//设置cookie
app.get('/set-cookie',(req, res)=>{
    res.cookie('name','zhangsan',{maxAge: 6000});
    res.send('home');
})
//删除cookie
app.get('/delete-cookie',(req, res)=>{
    res.clearCookie('name');
})
//获取cookie
app.get('/get-cookie',(req, res)=>{
    /*
     * 需要引入cookie-parser，此处没有引入
     */
    console.log(req.cookies);
})
app.listen(3000,()=>{
    console.log("服务已经启动")
})
