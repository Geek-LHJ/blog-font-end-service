
var express = require('express');
var router= express.Router();
var User= require('../models/user');

// 统一返回格式
var responseData;
router.use(function(req, res, next) {
  responseData= {
    code: 0,
    message: ''
  };
  next();
})

// 用户注册,此处为 post 请求;
// 注册逻辑：1.用户名不能为空； 2.密码不能为空； 3.两次密码输入一致；
// 用户名是否被注册，数据库查询
router.post('/user/register', function(req, res, next) {
  // console.log(req.body);
  // res.end('receive');
  var username= req.body.username;
  var password= req.body.password;
  var repassword= req.body.repassword;
  // 用户是否为空
  if( username == '') {
    responseData.code= 1;
    responseData.message= '用户名不能为空';
    res.json(responseData);
    return;
  }
  // 密码不能为空
  if( password == '') {
    responseData.code= 2;
    responseData.message= '密码不能为空';
    res.json(responseData);
    return;
  }
  // 两次密码必须输入一致
  if( password != repassword) {
    responseData.code= 3;
    responseData.message= '两次密码必须输入一致';
    res.json(responseData);
    return;
  }
  // 检测用户名是否被注册，对数据库进行查询
  User.findOne({
    username:username
  }).then(function( userInfo) {
    // console.log( userInfo);
    if(userInfo) {
      // 数据库中已经有该记录
      responseData.code= 4;
      responseData.message= '用户名已经注册过了';
      res.json(responseData);
      return;
    }
    // 保存注册的用户名信息到数据库中
    var user= new User({
      username: username,
      password: password
    });
    return user.save();    
  }).then(function(newuserInfo) {
    // console.log(newuserInfo);
    responseData.message=`注册成功,username:${username}`;
    res.json(responseData);
  });
});

// 用户登录
router.post('/user/login', function(req, res, next) {  
  var username= req.body.username;
  var password= req.body.password;
  // 用户名密码是否为空
  if( username == '' || password == '') {
    responseData.code= 1;
    responseData.message= '用户名和密码不能为空';
    res.json(responseData);
    return;
  }
  // 查询数据库中相同用户名和密码的记录是否存在，存在则登陆成功
  User.findOne({
    username: username,
    password: password
  }).then(function(userInfo) {
    if(!userInfo) {
      responseData.code= 2;
      responseData.message= '用户名或密码错误';
      res.json(responseData);
      return;
    }
    // 用户名和密码是正确时，返回状态、用户的 ID 和用户名
    responseData.message= '登陆成功';
    responseData.userInfo= {
      _id:userInfo._id,
      username:userInfo.username,
      isAdmin:userInfo.isAdmin
    }
    req.cookies.set('userInfo', JSON.stringify({
      _id:userInfo._id,
      username:userInfo.username
    }));
    res.json(responseData);
    return;
  })
});

// 用户退出
router.get('/user/logout', function(req, res) {
  responseData.message= `用户退出成功`;
  req.cookies.set('userInfo', null);
  res.json(responseData);
  return;
})

module.exports= router;