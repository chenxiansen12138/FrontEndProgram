var express = require('express');
const router = express.Router();
const MD5 = require('MD5')
const UserModel = require('../model/UserModel');



/* GET users listing. */
router.get('/reg', function (req, res, next) {
    res.render("reg");
});
router.post('/reg', (req, res) => {
    UserModel.create({...req.body, password: MD5(req.body.password)}).then((data) => {
        console.log("注册成功～～～");
        res.render("success", {msg: '注册成功', url: '/BookKeeping/login'})
    }).catch(err => {
        console.log("注册失败！！！");
        res.render("fail", {msg: '注册失败', url: '/BookKeeping/reg'})
    })
})
router.get('/login', (req, res) => {
    res.render("login")
})
router.post('/loginCheck', (req, res) => {
    console.log(req.body);
    let {username, password} = req.body;
    UserModel.findOne({username: username, password: MD5(password)}).then((data) => {
        if (data === null) {
            res.render("fail", {msg: '登录失败', url: '/BookKeeping/login'})
        } else {
            console.log(data);
            let {username} = data;
            req.session.username = username;
            req.session._id = data._id;
            res.render("success", {msg: '登录成功', url: '/BookKeeping/account'})
        }
    })
})
module.exports = router;
