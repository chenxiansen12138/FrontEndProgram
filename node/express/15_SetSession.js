const express = require('express');
const app = express();
const session = require('express-session');
const MongoStore = require('connect-mongo');

//设置session中间件
app.use(session({
    name: 'sid',              //设置cookie的name，默认值：connect.sid
    secret: 'atguigu',        //参与加密的字符串（又称签名）   加盐
    saveUninitialized: false, //是否为每次请求都设置一个cookie来保存session的id
    resave: true,             //是否在每次请求时都保存session
    store: MongoStore.create({
        mongoUrl: 'mongodb://192.168.10.46:27017/test'
    }),
    cookie: {
        httpOnly: true,    //开启后通过js无法获取cookie
        maxAge: 1000 * 60 *5 //控制sessionId过期时间
    }
}))
//首页路由
app.get('/home',(req,res)=>{
    res.send('home');
})

app.get('/login',(req, res)=>{
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        req.session.username = 'admin';
        req.session.uid = 'e2sdf244';
        res.send('登录成功@@@')
    } else {
        res.send('登录失败～～～')
    }
});
app.get('/cart',(req, res)=>{
    if (req.session.username === 'admin') {
        res.send(`购物车页面欢迎您 ${req.session.username}`);
    } else {
        res.send('您还没有登录～～～');
    }

})

app.get('/logout',(req, res)=>{
    req.session.destroy();
    res.send('您已退出账号～～～')
})
app.listen(3000);