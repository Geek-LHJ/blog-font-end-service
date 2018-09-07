let express = require('express');
let router = express.Router();

let User = require('../models/user');
let Category = require('../models/category');
let Content = require('../models/content');
let Site = require('../models/site');

// 数据的统一返回格式
let responseData;
router.use(function (req, res, next) {
  responseData = {
    code: 0,
    message: '',
    userInfo: {}
  }
  next();
});

// // 验证是否是管理员身份（此处有问题，是由于目前没有通过验证管理员来进入管理员界面）
// router.use(function(req, res, next) {
//   if(req.userInfo == null || !req.userInfo.isAdmin) {
//     responseData.code = 1;
//     responseData.message = '无管理员权限'
//     res.json(responseData);
//     return;
//   }
//   next();
// }) 

// 后台管理系统首页欢迎页面
router.get('/', function (req, res, next) {
  // res.send('后台管理页面')
  responseData.code = 0;
  responseData.message = '管理员'
  responseData.userInfo = req.userInfo;
  res.json(responseData);
})

// 用户管理，返回数据库中的所有用户
router.get('/user', function (req, res, next) {
  /*
   * 读取数据库中所有用户数据
   * limit(Number):限制获取数据的条数
   * skip(Number): 忽略数据的条数
   * 每页显示两条
   * 1: 1-2 skip:0 (当前页-1)*limit
   * 2: 3-4 skip:2
   * */
  let page = Number(req.query.page || 1);
  let limit = 10;
  let pages = 0;

  User.count().then(function (count) {
    // console.log(count);
    let pages = Math.ceil(count / limit);
    // page取值不能超过pages
    // page = Math.min(page, pages);
    // 取值不能小于1
    // page = Math.max(page, 1);
    let skip = (page - 1) * limit;
    User.find().limit(limit).skip(skip).then(function (users) {
      // console.log(users);
      res.json({
        userInfo: req.userInfo,
        users: users,
        page: page,
        pages: pages,
        count: count,
        limit: limit,
      });
    });

  })
})

// 分类列表
router.get('/category', function (req, res, next) {
  /*
   * 读取数据库中所有分类
   * limit(Number):限制获取数据的条数
   * skip(Number): 忽略数据的条数
   * 每页显示两条
   * 1: 1-2 skip:0 (当前页-1)*limit
   * 2: 3-4 skip:2
   * */
  var page = Number(req.query.page || 1);
  var limit = 10;
  var pages = 0;

  Category.count().then(function (count) {
    // 计算总页数
    pages = Math.ceil(count / limit);
    // page取值不能超过pages
    // page = Math.min(page, pages);
    // 取值不能小于1
    // page = Math.max(page, 1);
    var skip = (page - 1) * limit;
    /*
     * sort 排序
     * -1: 降序
     * 1: 升序
     * */
    Category.find().sort({ _id: 1 }).limit(limit).skip(skip).then(function (categories) {
      // console.log(categories);
      res.json({
        userInfo: req.userInfo,
        categories: categories,
        page: page,
        pages: pages,
        count: count,
        limit: limit,
      });
    });
  })
})

// 分类新添加
router.post('/category/add', function (req, res, next) {
  // console.log(req.body);
  let name = req.body.name || '';
  // 数据库中是否已经存在同名的分类名称
  Category.findOne({
    name: name,
  }).then(function (rs) {
    // console.log(rs)
    if (rs) {
      // 如果rs存在表示数据库中已存在该分类
      responseData.message = '数据库中已存在该类别';
      responseData.code = 1;
      res.json(responseData);
      return Promise.reject();
    } else {
      // 数据库中不存在该分类, 可以保存
      return new Category({
        name: name,
      }).save();
    }
  }).then(function (newCategory) {
    responseData.code = 0;
    responseData.message = '分类添加成功';
    res.json(responseData);
  })
})

// 分类编辑修改
router.get('/category/edit', function (req, res, next) {
  // 获取要编辑分类的id
  var id = req.query.id;
  Category.findOne({
    _id: id,
  }).then(function (category) {
    responseData.code = 0;
    responseData.message = '分类信息';
    responseData.category = category;
    res.json(responseData);
  })
})

router.post('/category/edit', function (req, res, next) {
  var id = req.body.id;
  var name = req.body.name || '';
  // 获取要修改的分类的信息
  Category.findOne({
    _id: id,
  }).then(function (category) {
    if (!category) {
      responseData.code = 1;
      responseData.message = '分类信息不存在';
      res.json(responseData);
      return Promise.reject();
    } else {
      // 当用户没有做任何修改时
      if (name == category.name) {
        responseData.code = 0;
        responseData.message = '修改成功';
        res.json(responseData);
        return Promise.reject();
      } else {
        // 判断要修改的分类名是否已存在(id不一样但是名字一样)
        return Category.findOne({
          _id: { $ne: id },
          name: name,
        })
      }
    }
  }).then(function (sameCategory) {
    if (sameCategory) {
      responseData.code = 1;
      responseData.message = '该分类名称已被占用';
      res.json(responseData);
      return Promise.reject();
    } else {
      return Category.update({
        _id: id
      }, {
          name: name,
        })
    }
  }).then(function () {
    responseData.code = 0;
    responseData.message = '修改成功';
    res.json(responseData);
  })
})

// 分类编辑删除
router.get('/category/delete', function (req, res, next) {
  // 获取要删除分类的id
  let id = req.query.id;
  Category.remove({
    _id: id,
  }).then(function () {
    responseData.code = 0;
    responseData.message = '分类删除成功';
    res.json(responseData);
  })
})

// 文章列表展示
router.get('/content', function (req, res, next) {
  var page = Number(req.query.page || 1);
  var limit = 10;
  var pages = 0;
  Content.count().then(function (count) {
      // 计算总页数
      pages = Math.ceil(count / limit);
      var skip = (page - 1) * limit;
      Content.find().sort({_id: -1}).limit(limit).skip(skip).populate(['category']).then(function (contents) {
          // console.log(contents);
          res.json({
              userInfo: req.userInfo,
              contents: contents,
              page: page,
              pages: pages,
              count: count,
              limit: limit,
          });
      });
  })
})

// 文章新增，先获取页面的 Category 分类列表数据，再对文章进行保存
router.get('/content/add', function (req, res, next) {
  Category.find().sort({_id:-1}).then(function(categories) {
    res.json({
      userInfo:req.userInfo,
      categories:categories
    })
  })
})

router.post('/content/add', function (req, res, next) {
  // console.log(req.body);
  new Content({
    category: req.body.category,
    title: req.body.title,
    description: req.body.description,  
    content: req.body.content,
    user: req.body.username,
  }).save().then(function(rs) {
    // console.log(rs);
    responseData.code= 0;
    responseData.message= '文章保存成功';
    res.json(responseData);
  })
})

// 文章修改，包括获取文章当前的内容部分与再次提交到数据库中的内容部分
router.get('/content/edit', function (req, res, next) {
  // 获取要修改的文章的信息 并且用表单的形式展现出来
  var id = req.query.id || '';
  // 获取要修改的分类的信息
  Content.findOne({
      _id: id,
  }).then(function (content) {
      if (!content) {
          responseData.code = 1;
          responseData.message = '文章不存在';
          res.json(responseData);
          return Promise.reject();
      } else {
          // console.log(content);
          Category.find().sort({_id: -1}).then(function (categories) {
              res.json({ // 这里要保存原本的信息 尤其是分类 不可以默认顺序排列
                  // userInfo: req.userInfo,
                  categories: categories,
                  content: content,
              })
          })
      }
  })
})

router.post('/content/edit', function (req, res, next) {
  var id = req.body.id;
  // 更新文章
  Content.update({
      _id: id,
  }, {
      category: req.body.category,
      title: req.body.title,
      description: req.body.description,
      content: req.body.content,
      user: req.body.username,
  }, function () {
      responseData.code = 0;
      responseData.message = '文章修改成功';
      res.json(responseData);
  })
})

// 文章的删除
router.get('/content/delete', function (req, res, next) {
  // 获取要删除分类的id
  var id = req.query.id;
  Content.remove({
      _id: id,
  }).then(function () {
      responseData.code = 0;
      responseData.message = '文章删除成功';
      res.json(responseData);
  })
})

// 个人站点的数据获取
router.get('/selfsite', function (req, res, next) {
  Site.find().sort({ _id: 1 }).then(function (sites) {
    // console.log(sites);
    res.json({
      userInfo: req.userInfo,
      sites: sites,
    });
  });
})

// 个人站点的数据添加
router.post('/selfsite/add', function (req, res, next) {
  // console.log(req.body);
  let name= req.body.name;
  let icon= req.body.icon;
  let url= req.body.url;
  Site.findOne({
    name: name,
    icon: icon,
    url: url,
  }).then(function(rs) {
    if (rs) {
      // 如果rs存在表示数据库中已存在该分类
      responseData.message = '数据库中已存在该站点';
      responseData.code = 1;
      res.json(responseData);
      return Promise.reject();
    } else {
      // 数据库中不存在该分类, 可以保存
      return new Site({
        name: name,
        icon: icon,
        url: url,  
      }).save();
    }
  }).then(function(rs) {
    // console.log(rs);
    responseData.code= 0;
    responseData.message= '新站点添加成功';
    res.json(responseData);
  })
})

// 个人站点的数据删除
router.get('/selfsite/delete', function (req, res, next) {
  // 获取要删除分类的id
  let id = req.query.id;
  Site.remove({
    _id: id,
  }).then(function () {
    responseData.code = 0;
    responseData.message = '站点数据删除成功';
    res.json(responseData);
  })
})

module.exports = router;