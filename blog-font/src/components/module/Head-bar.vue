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

.box{width: 100%; height: 60px; background-color: #19abd6;}
.bar{width: 1250px;margin: 0 auto; height: 60px;}
@media(max-width: 1280px){
  .bar{width: 950px;}
}
@media(max-width: 945px){
  .bar{width: 740px;}
}
.bar-head a{display: block;width: 180px;height: 60px;
  line-height: 60px; font-size: 36px; color: #fff; }
.nav-bar li{float: left;height: 60px;line-height: 60px;
  margin: 0 15px; font-size: 14px;}
.nav-bar li a:hover{color: #666;}
.box-bar .box-nav-bar li a:hover{color: #19abd6;}
</style>

<template>
<div class="box">
  <div class="bar">
   <!-- head-bar  -->
    <div class="bar-head fl">
      <router-link :to="{name:'home'}">MINFIVE</router-link>
    </div>
    <ul class="nav-bar fr">
      <li title="首页"><router-link :to="{name:'home'}">首页</router-link></li>
      <li title="归档"><router-link :to="{name:'archives'}">归档</router-link></li>
      <li title="作品"><router-link :to="{name:'demo'}">作品</router-link></li>
      <li title="音乐"><router-link :to="{name:'music'}">音乐</router-link></li>
      <li title="关于"><router-link :to="{name:'about'}">关于</router-link></li>
    </ul>
  </div>
</div>
</template>

<script>

export default {
  name: "head-bar",
  data () {
    return {
    };
  }
}
</script>
