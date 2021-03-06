# 一、blog-management-19904（博客后台管理页面项目）

> 利用 Vue 框架以及 ElementUI 组件开发的一个博客的后台管理页面页面项目

### （一）、后台管理页面设计需求

> 1. 后台管理系统的登录与注册

> 2. 后台管理系统对于整个网站所有的博文进行展示，并能进行预览、编辑、发布、删除；

> 3. 编辑修改博文支持Markdown语法的编写与效果预览；

> 4. 新建博文页面的实现，包括博客 Logo、首页顶部 banner、博客名称、博客心情、博客介绍、每页展现卡片的数量、最新文章展示的数量功能；

> 5. 其他站点设置的功能，能够添加或者删除个人站点以及友情链接；

### （二）、所用的知识点

> 1. 使用 Vue 框架、ElementUI组件进行整个后台管理系统布局与Vue Router 对路由的实现;

> 2. 使用CORS（跨来源资源共享），来获取或者写入博文的数据到服务端项目；

> 3. 使用vue-markdown 模块实现评论区Markdown的预览效果；


### （三）、目前项目实现的功能

> 1. 使用 Vue框架、ElementUI组件、Vue Router 搭建后台管理系统框架与路由，数据使用的是从服务端获取的 JSON 格式的数据；

> 2. CORS（跨来源资源共享）能够连接到服务端，来获取服务端的相关数据，实现博文数据的动态获取或者写入；

> 3. 用户的注册与登陆实现，登录成功后跳转到后台管理页面；*但是用户刷新界面后的登录数据会消失，这个还没有做好，可以使用token ，或者使用 cookies、session来实现登录状态保持；*

> 4. 用户管理界面，管理员身份查看当前的所有注册用户；

> 5. 文章分类界面，能够查看当前的所有文章分类，也能够添加或删除文章分类；

> 6. 博文管理界面，能够查看当前的所有博文，也能够添加或修改或者删除博文；

> 7. 其他站点设置页面，能够查看当前的所有站点，也能够添加或者删除站点；

> 8. 当前登录用户，实现退出当前用户的功能；

### （四）、还没有实现的功能

> 1. 新建博文的发布与撤回功能，博文的图片上传功能；

> 2. 博文使用Markdown编辑，同时展示 Markdown 的预览效果的功能；

# 二、blog-management-19904 下载安装

## （一）、Demo 演示地址（暂无）

## （二）、安装教程

### 注意：

> 该项目（后台管理项目）需要配合服务器端项目以及 MongoDB 数据库一起运行，才能看到相关的效果，开启顺序是：

> 1. 先打开 MongoDB 数据库，运行数据库（bin 目录下进入cmd，输入 `mongo`）；

> 2. 再运行服务端程序（进入项目，输入 `node app.js`）

> 3. 最后运行后台管理项目，运行项目（项目目录下输入`npm run dev`）

> 4.目前由于上传的项目文件没有包含数据库相关的数据，因而打开的页面没有数据，可以自行通过添加数据查看展示效果，可以测试请求数据的接口能否获取服务端项目数据，检验项目正常运行。

#### 1.下载整个项目，运行下面的指令：

```bash
git clone https://rdc.hand-china.com/gitlab/practical-training/blog-management-19904.git
```

#### 2.进入该项目，然后进行第三方依赖的安装，安装完成后运行整个项目：

```bash
cd blog-management-19904
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
```

#### 3.在浏览器里面输入 localhost:8080 ，进行项目查看：(对后台管理系统导航介绍)

```js
// 后台登录/注册页面
http://localhost:8080/#/login

// 后台首页欢迎页面
http://localhost:8080/#/admin

// 后台用户管理页面
http://localhost:8080/#/admin/user

// 后台文章分类列表页面
http://localhost:8080/#/admin/category

// 后台文章分类添加页面
http://localhost:8080/#/admin/category/add

// 后台文章列表页面
http://localhost:8080/#/admin/content

// 后台新建文章页面
http://localhost:8080/#/admin/content/add

// 其他站点设置(个人站点/友情链接)
http://localhost:8080/#/admin/selfsite
```

#### 4.项目效果截图：

**1. 后台登录页面**
![后台登录页面](./PrintScreenImage/后台登录页面.png)

**2. 后台注册页面**
![后台注册页面](./PrintScreenImage/后台注册页面.png)

**3. 后台首页欢迎页面**
![后台首页欢迎页面](./PrintScreenImage/后台首页欢迎页面.png)


**4. 后台用户管理页面**
![后台用户管理页面](./PrintScreenImage/后台用户管理页面.png)


**5. 后台文章分类列表页面**
![后台文章分类列表页面](./PrintScreenImage/后台文章分类列表页面.png)


**6. 后台文章分类添加页面**
![后台文章分类添加页面](./PrintScreenImage/后台文章分类添加页面.png)

**7. 后台文章列表页面**
![后台文章列表页面](./PrintScreenImage/后台文章列表页面.png)

**8. 后台新建文章页面**
![后台新建文章页面](./PrintScreenImage/后台新建文章页面.png)

**9. 后台其他站点设置页面**
![后台其他站点设置页面](./PrintScreenImage/后台其他站点设置页面.png)

