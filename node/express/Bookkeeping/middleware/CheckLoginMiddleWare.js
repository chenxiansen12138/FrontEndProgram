//声明中间件检测是否登录
module.exports = (req,res,next)=>{
    if (!req.session.username) {
        res.redirect('/BookKeeping/login');
        return;
    }
    next();
}