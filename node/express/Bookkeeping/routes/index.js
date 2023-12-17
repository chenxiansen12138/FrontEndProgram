var express = require('express');
var router = express.Router();

//记账本的列表
router.get('/account', function(req, res, next) {
  res.send("账本列表");
});
router.get('/create', function(req, res, next) {
  res.send("创建");
});
module.exports = router;
