<style scoped>
/* reset */
body,ul,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{margin:0;padding:0;}
body{font-size:12px;}
img{border:none;}
li{list-style:none;}
input,select,textarea{outline:none; border: none;background: none;}
textarea{resize:none;}
a{text-decoration:none; color: #656565;}
/*清浮动*/
.clearfix:after{content: "";display: block;clear: both;}
.clearfix{zoom:1;}
.fl{float: left;}
.fr{float: right;}

.content{width: 100%;}
.box{display: flex; margin: 80px auto;width: 1250px;}/* 此处设置最大、小宽有问题 */

.article-list{flex-grow: 1; background-color: #fff;
display: flex;  flex-wrap: wrap;}/* 此处有问题 */
.page-change{clear: both; width: 100%; height: 50px; background-color: #fff;}
.sidebar{flex-basis: 260px;background-color: #fff;}
@media (max-width: 1279px) {
  .box {
    width: 920px;
  }
}
</style>

<template>
  <div class="content">
    <!-- container -->
    <div class="box">
      <div class="article-list fl">
        <Articleitem
          v-for="(item,index) in data"
          :key=index
          :article= item
        >
        </Articleitem>
        <div class="page-change clearfix">
          分页
        </div>
      </div>
      <div class="sidebar fr">
        <!-- about-author -->
        <SideBar/>
      </div>
    </div>
  </div>

</template>

<script>
import Articleitem from './Article-item';
import SideBar from './SideBar';

export default {
  name: "container",
  components:{Articleitem, SideBar},
  data () {
    return {
      data:[
        {
          _id:1,
          title:"读《用户体验要素》总结",
          author:"MINFIVE",
          article_desc:"《用户体验要素》这本书其实更适合叫《产品设计要素》，书中作者梳理了产品设计中的一些概念及方法，涵盖产品的整个生命周期，对于提高产品意识有极大的帮助。",
          article_tag:['产品','读书']
        },
        {
          _id:2,
          title:"关于 Vue 的路由权限管理",
          author:"MINFIVE",
          article_desc:"曾经在工作上对 vue 路由权限管理这方面有过研究，这几天又看到了几篇相关的文章，再加上昨天电面中又再一次提及到，就索性整理了一下自己的一些看法，希望对大家有帮助。",
          article_tag:['javascript','vue']
        },
        {
          _id:3,
          title:"关于 Vue 使用 Css 获取用户密码",
          author:"MINFIVE",
          article_desc:"使用 css 去捕获用户密码，最容易忽视的往往是最容易出现问题的，安全问题不容小觑。",
          article_tag:['css','安全']
        },
        {
          _id:4,
          title:"30s代码片段翻译",
          author:"MINFIVE",
          article_desc:"这是对 github 上《30-seconds-of-code》的翻译整理，整理了放到博客上供大家学习参考，后续会持续跟进翻译。",
          article_tag:['javascript','vue']
        },
        {
          _id:5,
          title:"关于 Vue 的路由权限管理",
          author:"MINFIVE",
          article_desc:"曾经在工作上对 vue 路由权限管理这方面有过研究，这几天又看到了几篇相关的文章，再加上昨天电面中又再一次提及到，就索性整理了一下自己的一些看法，希望对大家有帮助。",
          article_tag:['javascript','vue']
        },
        {
          _id:6,
          title:"2017年个人总结",
          author:"MINFIVE",
          article_desc:"吭哧吭哧的打代码，迷迷糊糊的就是一年，因为懒癌而迟到的年度总结也总算交卷，虽然今天已经是2018年的第三天，但也算是正式为自己的2017年的工作、学习以及生活划上句点。",
          article_tag:['总结',' ']
        },
        {
          _id:7,
          title:"微信视频 H5 开发小结",
          author:"MINFIVE",
          article_desc:"近日，由于工作原因，需要开发一款视频类 h5。玩法很简单，用户滚页面至底部，切换全屏视频播放。",
          article_tag:['wechat',' ']
        },
        {
          _id:8,
          title:"使用 Git Rebase 美化 Git Commit 流程",
          author:"MINFIVE",
          article_desc:"上篇文章讲到 commit message 规范，git 版本控制在日常团队协作中有着极其重要的作用，除了对 git 的 commit 信息进行规范化管理之外，还可以对 git 的 commit 做一些补丁修饰，即 git rebase。",
          article_tag:['git',' ']
        },
        {
          _id:9,
          title:"Css Modules 小试",
          author:"MINFIVE",
          article_desc:"css modules 顾名思义，即 CSS 的模块化。使得 CSS 也能适用软件工程方法。",
          article_tag:['css','css modules ']
        },
        {
          _id:10,
          title:"Postcss 小试",
          author:"MINFIVE",
          article_desc:" css 后处理器的小小尝试 ",
          article_tag:['postcss',' ']
        },
        {
          _id:11,
          title:"Commit Message 规范 及自动化 Changelog",
          author:"MINFIVE",
          article_desc:"使用过 git 来做版本控制的同学应该都知道每次提交修改 `git commit` 时，git 总会强制要求填写提交说明，否则不允许提交。填写的格式不限，内容也不限，当然为了提高项目的可维护性，commit message 做适当的格式要求是必要的，不说 review 起来方便，就冲看起来格式规整这一点，看起来都舒服得多了",
          article_tag:['git','学习 ']
        },
        {
          _id:12,
          title:"客户端存储indexedDB探究",
          author:"MINFIVE",
          article_desc:"Indexed Database API,是在浏览器中保存结构化数据的一种数据库。",
          article_tag:['javascript','学习 ']
        },
      ]
    };
  }
}
</script>
