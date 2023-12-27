const express = require('express');
const router = express.Router();
const AccountModel = require('../model/AccountModel');
const  token_check = require('../middleware/TokenCheckMiddleWare');


//记账本的列表
    router.get('/account', token_check,function (req, res, next) {

        AccountModel.find().then((data)=>{
            res.json({
                code: '0000',
                msg: '获取成功',
                data: data
            })
        }).catch((err)=>{
            res.json({
                code: '1001',
                msg: '获取失败',
                data: null
            })
        })
    });

    router.post('/account', (req, res, next) => {
        //写入
        AccountModel.create({
            ...req.body
        }).then((data)=>{
            res.json({
                code: '0000',
                msg: '插入成功',
                data: data
            })
        }).catch((err)=>{
            res.json({
                code: '1002',
                msg: '插入失败',
                data: null
            })
        })

    });
//删除账单
    router.get('/delete/:id',(req,res)=>{
        //获取参数
        let id = req.params.id;
        //删除
        AccountModel.deleteOne({_id: id}).then((data)=>{console.log(data)});
        AccountModel.find().then((data)=>{
            res.json({
                code: '0000',
                msg: '删除成功',
                data: data
            })
        })
    });


module.exports = router;
