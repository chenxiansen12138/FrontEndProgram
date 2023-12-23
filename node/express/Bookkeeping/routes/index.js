var express = require('express');
var router = express.Router();
//导入lowdb
// const adapter = new FileSync(__dirname + '/../data/db.json');
const AccountModel = require('../model/AccountModel');

//获取db对象
// const db = lowdb(adapter);
//记账本的列表
    router.get('/account', function (req, res, next) {
        AccountModel.find().then((data)=>{
            res.render("list", {accounts: data});
        })
    });

    router.get('/create', function (req, res, next) {
        res.render("create");
    });
    router.post('/account', (req, res, next) => {
        //写入
        AccountModel.create({
            ...req.body
        }).then((data)=>{
            console.log(data);
        }).catch((err)=>{
            res.status(500).send('插入失败！！！');
            return;
        })
        //db.get('accounts').unshift({id: id, ...req.body}).write();
        res.render("success", {msg: '添加成功啦～～～', url: '/BookKeeping/account'});
    });
//删除账单
    router.get('/delete/:id',(req,res)=>{
        //获取参数
        let id = req.params.id;
        //删除
        AccountModel.deleteOne({_id: id}).then((data)=>{console.log(data)});
        AccountModel.find().then((data)=>{
            res.render("list", {accounts: data});
        })
    });


module.exports = router;
