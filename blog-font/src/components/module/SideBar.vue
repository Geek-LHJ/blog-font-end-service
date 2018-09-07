<style scoped>
/* reset */
body,ul,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{margin:0;padding:0;}
body{font-size:12px;}
img{border:none;}
li{list-style:none;}
input,select,textarea{outline:none; border: none;}
textarea{resize:none;}
a{text-decoration:none; color: #656565;}
/*清浮动*/
.clearfix:after{content: "";display: block;clear: both;}
.clearfix{zoom:1;}
.fl{float: left;}
.fr{float: right;}

.search{display:block; width: 260px;height: 44px; border-radius: 22px;
  background-color:#eee; border: 2px solid #eee;}
.search .input-box{width: 190px;height: 30px;line-height: 30px;margin: 7px 0 7px 20px;background-color:#eee;}
.search:hover{border: 2px solid #3ac0e8;}
.search .search-image{display: block;float: right; height: 20px;width: 20px;
  background-image: url(../../imgs/icons/search-image.png);margin: 12px 20px 12px 0;}
.siderbar-block{width: 260px;margin-bottom: 30px;}
.siderbar-block a{color: #333;font-size: 14px;}
.siderbar-block a:hover{color: rgb(45,184,225);}
.siderbar-block h3{margin: 0px 0 20px 0;display: block; border-left: 4px solid rgb(45,184,225);
  text-indent: 14px;font-size: 16px;font-weight: 400;}
.author-text{height: 132px;}
.article-type ul li{text-indent: 1em; width: 244px;height: 34px;line-height: 34px;
  padding-bottom: 10px; border-bottom: 1px solid #eee;}
.article-type ul li span{color: rgb(45,184,225); font-size: 14px; }
.siderbar-tag .siderbar-tag-list {padding-left: 16px;}
.author-text p{padding-left:1em; font-size: 14px;color: #666;line-height: 23px;}
</style>

<template>
 <div>
   <!-- sidebar -->
   <div class="search siderbar-block">
     <input type="text" class="input-box" placeholder="Search...">
     <a href="#"><i class="search-image"></i></a>
   </div>
   <div class="author-text siderbar-block">
     <h3>简介</h3>
     <p>个人博客，用于分享一些在日常学习工作甚至于生活中遇到的一些比较有趣的东西。七荤八素，胡言乱语，望各位看官见谅。</p>
   </div>
   <div class="article-type siderbar-block">
     <!-- article-type -->
     <h3>文章分类</h3>
     <ul>
       <li><a href="#">读书笔记</a>&nbsp;<span>(1)</span></li>
       <li><a href="#">经验总结</a>&nbsp;<span>(4)</span></li>
       <li><a href="#">日常学习</a>&nbsp;<span>(9)</span></li>
       <li><a href="#">文章转发</a>&nbsp;<span>(1)</span></li>
     </ul>
   </div>
   <div class="article-new siderbar-block">
     <!-- article-new -->
      <h3>最新文章</h3>
      <SidebarArticleItem
        v-for="(item,index) in newArticle"
        :key=index
        :articleNew= item
      ></SidebarArticleItem>
   </div>
   <div class=" siderbar-tag siderbar-block">
    <!-- article-tag -->
    <h3>文章标签</h3>
    <div class="siderbar-tag-list">
      <SidebarTagItem
          v-for="(item,index) in allTags"
          :key=index
          :articleTag= allTags[index]
      ></SidebarTagItem>
    </div>
   </div>
 </div>
</template>

<script>
import SidebarArticleItem from './Sidebar-article-item';
import SidebarTagItem from './Sidebar-tag-item';

export default {
  name: "sidebar",
  components:{ SidebarArticleItem, SidebarTagItem},
  data () {
    return {
      newArticle:[
        {
          _id:1,
          title:"读《用户体验要素》总结",
          date:"2018年8月5日"
        },
        {
          _id:2,
          title:"关于 Vue 的路由权限管理",
          date:"2018年3月3日"
        },
        {
          _id:3,
          title:"使用 Css 获取用户密码",
          date:"2018年2月23日"
        },
        {
          _id:4,
          title:"30s代码片段翻译",
          date:"2018年1月7日"
        },
      ],
      allTags:['css','css modules','git','javascript','postcss','vue','wechat','产品','代码规范',
'学习','安全','总结','权限管理','百度ife','翻译','自动化','规范','读书','转发']
    };
  }
}
</script>
