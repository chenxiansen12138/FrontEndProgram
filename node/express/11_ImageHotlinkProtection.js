//导入express
const express = require('express');

//创建应用对象
const app = express();

//声明中间件函数
function recordMiddleware(req, res, next) {
//检测请求头中的referer是否为127.0.0.1
    //获取referer
    let referer = req.get('referer');
    console.log(referer);
    if (referer) {
        let url = new URL(referer);
        let hostname = url.hostname;
        console.log(hostname);
        if (hostname !== '127.0.0.1') {
            console.log("我走进来了");
            res.status(404).send('无法访问');
            return;
        }
    }

    next();
}

//使用中间件函数
app.use(recordMiddleware);
//静态资源中间件
app.use(express.static(__dirname + '/public'));
//3.创建路由
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/11_Image.html');
})


//4.监听端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动");
});