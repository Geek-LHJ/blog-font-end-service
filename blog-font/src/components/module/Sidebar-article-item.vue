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

.box{width: 260px;height: 60px; margin-bottom: 10px;}
.box .boxImg{display: block;float: left; width: 80px;height: 60px; margin: 0 20px;}
.box .boxImg img{width: 100%;height: 100%;}
.box .text{display: block;float: left;width: 140px;height: 54px; margin-top: 10px;}
.box .text a{display: block; font-size: 14px;width: 144px; height: 20px;line-height: 20px;overflow: hidden;}
.box .text span{color: #666;font-size: 12px;}
</style>

<template>
 <div class="box">
    <a href="#">
      <div class="boxImg">
        <img :src= url alt="image" >
      </div>
      <div class="text">
        <a href="#">{{articleNew.title}}</a>
        <span>{{articleNew.date}}</span>
      </div>
    </a>

 </div>
</template>

<script>
export default {
  name: "sidebar-article-item",
  props:['articleNew'],
  data() {
    return {
      url:"/static/imgs/bar-"+this.articleNew._id+".jpg"

    };
  }
};
</script>
