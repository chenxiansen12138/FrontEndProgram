var express = require('express');
const router = express.Router();
const MD5 = require('MD5')
const UserModel = require('../model/UserModel');
const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
    console.log(req.body);
    let {username, password} = req.body;
    UserModel.findOne({username: username, password: MD5(password)}).then((data) => {
        if (data == null) {
            return res.json({
                code: '2001',
                msg: '用户名或者密码错误～～～',
                data: null
            })
        } else {
            let {username, _id} = data;
            let token = jwt.sign({username: username, _id: _id}, 'chenxiansen', {expiresIn: 60 * 60});
            res.json({
                code: '0000',
                msg: '获取成功',
                data: token
            })
        }
    }).catch(err => {
        res.json({
            code: '2002',
            msg: '获取失败～～～',
            data: null
        })
    })
})
module.exports = router;
