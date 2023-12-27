const jwt = require('jsonwebtoken');
const {data} = require("express-session/session/cookie");
module.exports = (req,res,next)=>{
    let token = req.header('token');
    if (!token) {
        res.json({
            code: '2004',
            msg: 'token缺失',
            data: null
        })
    }
    jwt.verify(token,'chenxiansen',(err,data)=>{
        if (err) {
            res.json({
                code: '2003',
                msg: '获取失败',
                data: null
            })
            return;
        }
        req.user = data;
        next();
    })


}