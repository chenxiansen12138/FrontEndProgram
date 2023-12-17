//1.导入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由
app.get('/home', (req, res) => {
    res.end('hello express');
    //原生操作
    // console.log(req.url);
    // console.log(req.httpVersion);
    // console.log(req.headers);
    // console.log(req.method);
    // // express操作
    // console.log(req.path);
    console.log(req.query);
    // 获取ip
    console.log(req.ip);
    //获取请求头
    console.log(req.get('host'));
});

//4.监听端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动");
});