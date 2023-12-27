//导入jwt模块
const jwt = require('jsonwebtoken');
//创建token

const token = jwt.sign(
    //用户数据
    {username: 'admin'},
    //加密字符串
    'chenxiansen',
    //配置对象
    {
        //过期时间，单位：秒
        expiresIn: 60
    }
)

console.log(token);

jwt.verify(token,'chenxiansen',(err,data)=>{
    if (err) {
        console.log("校验失败！！！");
    }else {
        console.log(data);
    }
})