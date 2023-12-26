const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const session = require("express-session");
const MongoStore = require("connect-mongo");
const {DBHOST, DBPORT} = require("./data/config/DBConfig");

const app = express();
app.use(session({
  name: 'sid',              //设置cookie的name，默认值：connect.sid
  secret: 'atguigu',        //参与加密的字符串（又称签名）   加盐
  saveUninitialized: false, //是否为每次请求都设置一个cookie来保存session的id
  resave: true,             //是否在每次请求时都保存session
  store: MongoStore.create({
    mongoUrl: `mongodb://${DBHOST}:${DBPORT}`
  }),
  cookie: {
    httpOnly: true,    //开启后通过js无法获取cookie
    maxAge: 1000 * 60 * 60  //控制sessionId过期时间
  }
}))
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/BookKeeping', indexRouter);
app.use('/BookKeeping',usersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
