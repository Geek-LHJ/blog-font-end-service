/**
 * CreatBy LHJ on 18/8/29
 * 程序的入口文件
 */ 

// 加载 express 模块
var express= require('express');
// 加载模板
var swig= require('swig');
// 加载数据库
var mongoose= require('mongoose');
// 加载 body-parser 模块，处理用户 post 请求提交的数据
var bodyParser= require('body-parser');
// 加载 cookies 模块
var Cookies= require('cookies');

// 创建app应用 => NodeJS Http.createServer();
var app= express();

// 设置跨域接受到的所有请求头的类型
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  res.header("Cache-Control","no-store");
  next();
});

// 引入数据库模型 user
var User= require('./models/user');

// 设置静态文件托管,例如用户访问的 url 以 /public 开始
app.use('/public', express.static(__dirname+ '/public') );

// 配置应用模板，定义当前使用的模板引擎
// 第一个参数指的是模板引擎名称及其文件的后缀，第二参数表示用于解析处理模板内容的方法；
app.engine('html',swig.renderFile);
// 设置模板文件存放的目录，第一参数必须是views，第二个参数是路径；
app.set('views','./views');
// 注册所使用的模板引擎，第一参数必须是 view engine，第二参数和之前 app.engine 中定义的模板引擎名称一致；
app.set('view engine', 'html');
// 开发过程中需要取消模板缓存
swig.setDefaults({cache: false});

// bodyparser 设置
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 设置cookies
app.use(function(req, res, next) {
  req.cookies= new Cookies(req, res);
  // 测试 cookies 发送成功
  // console.log(req.cookies.get('userInfo'));
  // 解析登录用户的 cookie 信息
  req.userInfo= {};
  if(req.cookies.get('userInfo')) {
    try {
      req.userInfo= JSON.parse(req.cookies.get('userInfo'));

      // 获取当前用户的类型是否是管理员(在上面必须引入数据库模型 user )
      User.findById(req.userInfo._id).then(function(userInfo) {
        req.userInfo.isAdmin= Boolean(userInfo.isAdmin);
        // 测试用户是否是管理员
        // console.log(req.userInfo.isAdmin);
        next();
      });
    } catch (e) {
        next();
      }
  } else{
      next();
  }
});

// // 首页路由
// app.get('/', function(req, res, next) {
//   // res.send('<h1>欢迎来到我的博客！</h1>')

//   // 读取 views 目录下的指定文件，解析并返回给客户端
//   // 第一参数表示模板文件，为 ./views 目录下的文件；第二参数表示传递给模板使用的数据
//   res.render('index');

// })

// 根据不同的功能划分模块

app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'))

// 监听 http 请求
mongoose.connect('mongodb://localhost:27017/blog', function(err) {
  if(err) {
    console.log('数据库连接失败！')
  } else {
    console.log('数据库连接成功！')    
    app.listen(8000);
    console.log('监听的端口号为 localhost:8000 ')  
  }
});



/**
 * 用户发送 http 请求 -> url -> 解析路由 -> 找到匹配规则 -> 执行指定的绑定函数，返回内容到客户端；
 *  /public ->静态文件 -> 直接读取指定目录下的文件，返回给客户端
 * -> 动态文件 -> 处理业务逻辑， 加载模板，解析模板 -> 返回数据
 */ 