var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressJWT = require('express-jwt');


//引入一级路由
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');   
var shopRouter = require('./routes/shop');


var app = express();

//引入mongoose
require("./dao/database")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//记录http请求日志
var fs = require('fs');
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/log/request.log'), { flags: 'a', encoding: 'utf8' }); 
app.use(logger('combined', { stream: accessLogStream }));

// 设置允许跨域访问该服务！

var mimeType = {
  'js': 'text/javascript',
  'html': 'text/html',
  'css': 'text/css'
}
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Content-Type', 'video/mp4');
  res.header('Content-Type', 'audio/mp3');
  if (mimeType[req.url.split('.').pop()]) {
    res.header('Content-Type', mimeType[req.url.split('.').pop()] + ';charset:UTF-8');
  }
 
  next();
});

app.post('*', bodyParser.urlencoded({ extended: true }),
  function (req, res, next) {
    next();
  });
  





app.use(express.static(path.join(__dirname, 'public')));

//引入session服务端本地存储功能
const session = require('express-session')

//调用引入的服务端本地存储功能
app.use(session({
  secret: 'acv',
  resave: true,
  saveUninitialized: true
}))


const CONSTANT = {
  SECRET_KEY: 'screttKey'
};




// token 设置
app.use(expressJWT({
  secret: CONSTANT.SECRET_KEY
}).unless({
  // 除了这个地址，其他的URL都需要验证
  path: [
    '/users/login'
    // /^\/users\/.*/
  ]
}));


//一级路由跳转标签
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shop', shopRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const {interface} = require('./untils/common')
// error handler
app.use(function(err, req, res, next) {
 
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // 
 // 校验 token 失败时的处理
 if (err.name === 'UnauthorizedError') {
  res.status(403).send(interface({errorMessage:'无效token',success:false}));
  
}else{
  //render the error page
  res.status(err.status || 500);
  res.render('error');

}


// res.setHeader('Content-Type', 'text/html');
// res.render(path.join(__dirname, 'public/index.html'));

});

module.exports = app;
