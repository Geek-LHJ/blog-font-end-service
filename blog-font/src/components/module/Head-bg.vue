<style scoped>
body,ul,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{margin:0;padding:0;}
body{font-size:12px;}
img{border:none;}
li{list-style:none;}
input,select,textarea{outline:none; border: none;background: none;}
textarea{resize:none;}
a{text-decoration:none; color: #ffffff;}
/*清浮动*/
.clearfix:after{content: "";display: block;clear: both;}
.clearfix{zoom:1;}
.fl{float: left;}
.fr{float: right;}

.box{ width: 100%; height: 350px; background-image:url(../../imgs/bg3.png);
  background-color: rgba(64,84,90,0.6);background-size: 100% 100%;
  opacity: 0.8;
 }
 /* .box::before{background-color: rgba(64,84,90,.6);} */
.box-bar,.box-bar-head,.box-nav-bar{ height: 90px; }
.box-bar{ margin: 0 auto; width: 1250px;}
@media(max-width: 1280px){
  .box-bar{width: 950px;}
}
.box-bar .box-bar-head a{display: block;width: 180px;height: 60px;
  line-height: 60px; font-size: 36px; color: #fff; margin-top:15px; }
.box-bar .box-nav-bar{margin-top:15px; }
.box-bar .box-nav-bar li{float: left;height: 60px;line-height: 60px;
  margin: 0 15px; font-size: 14px;}
.box-bar .box-nav-bar li a:hover{color: #19abd6;}
.box-content{width: 100%; height: 112px; margin-top:75px;text-align: center; }
.box-content span{font-size: 30px; font-weight: 700; color: #fff;}
.box-content hr{width: 160px;margin: 20px auto; border: 1px solid #19abd6;}
.box-content p{color: #fff; font-size: 14px;}
</style>

<template>
 <div class="box">
  <!-- head-bg -->
  <div class="box-bar">
    <div class="box-bar-head fl">
      <router-link :to="{name:'home'}">MINFIVE</router-link>
    </div>
    <ul class="box-nav-bar fr">
      <li title="首页"><router-link :to="{name:'home'}">首页</router-link></li>
      <li title="归档"><router-link :to="{name:'archives'}">归档</router-link></li>
      <li title="作品"><router-link :to="{name:'demo'}">作品</router-link></li>
      <li title="音乐"><router-link :to="{name:'music'}">音乐</router-link></li>
      <li title="关于"><router-link :to="{name:'about'}">关于</router-link></li>
    </ul>
  </div>
  <div class="box-content">
    <span>MINFIVE BLOG</span>
    <hr>
    <p>日常学习与兴趣交流</p>
  </div>

 </div>
</template>

<script>

export default {
  name: "head-bg",
  data () {
    return {
    };
  }
}
</script>
