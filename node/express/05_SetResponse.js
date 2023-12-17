//1.导入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由
app.get('/response', (req, res) => {
    res.set("abc","def");
    res.status(500);
    res.send("你好  ");
    res.end("World");
});


//4.监听端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动");
});