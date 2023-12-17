//导入express
const express = require('express');
//创建应用对象
const app = express();
//声明路由中间件
let checkCodeMiddleware=(req,res,next)=>{
    if (req.query.code === '521') {
        next();
    }else{
        res.send('暗号错误')
    }
}
//3.创建路由
app.get('/home', (req, res) => {
    res.send('前台首页');
})
app.get('/admin', checkCodeMiddleware,(req, res) => {
    res.send('后台首页');
})
app.get('/setting',checkCodeMiddleware,(req,res)=>{
    res.send('设置页面')
});
//4.监听端口，启动服务
app.listen(3000, () => {
    console.log("服务已经启动");
});