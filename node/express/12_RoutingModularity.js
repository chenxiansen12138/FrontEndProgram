const express = require('express');
const Router = require('./routes/Home.js')
const Router0 = require('./routes/Admin.js')
const app = express();
app.use(Router);
app.use(Router0);
app.listen(3000,()=>{
    console.log("服务已经启动");
})