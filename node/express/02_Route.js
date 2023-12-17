//1.导入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由
app.get('/home',(req,res) => {
   res.end('hello express');
});

app.get('/',(req,res) => {
    res.end('home');
});

app.post('/post',(req,res)=>{
   res.end("this is a post");
});

app.all('/all', (req,res)=>{
    res.end('all all');
})
//4.监听端口，启动服务
app.listen(3000,()=>{
    console.log("服务已经启动");
});