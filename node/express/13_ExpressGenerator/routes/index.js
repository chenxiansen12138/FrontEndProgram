var express = require('express');
var router = express.Router();
const {formidable} = require('formidable');
const net = require("net");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/portrait', (req, res) => {
    res.render('portrait');
})

router.post('/portrait', (req, res) => {
    //创建form对象
    const form = formidable({multiple: true, uploadDir: __dirname + '/../public/images', keepExtensions: true});
    //解析请求报文
    form.parse(req, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        }
        //服务器保存该图片的访问 URL
    let url = '/images/'+files.portrait.newFilename;
        res.send(url);
    });
});
module.exports = router;
