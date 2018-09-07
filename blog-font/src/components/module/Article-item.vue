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

.article-item{width: 290px;height: 350px;margin: 0 30px 30px 0; background-color: #fff;}
.article-item a:hover{color: #19abd6;}
.article-image img{width: 290px;height: 160px;}
.artile-info{width: 260px;height: 160px; padding: 15px;}
.artile-info a{font-size: 16px;font-weight: 400;color: #000;}
.artile-info span,.artile-info span a{font-size: 14px;font-weight: 400;
  color: #19abd6;height: 22px; line-height: 22px; float: right;}
.artile-info p{width: 100%;display: inline-block; margin: 10px 5px;color: #666;
  height: 52px;line-height: 26px;overflow: hidden;font-size: 14px}
.artile-info div .tag{display: block;float: left; height: 30px;width: 20px;margin-right: 5px;
  background-image: url(../../imgs/icons/tag.png);}
.artile-info div a{display: block;float: left; font-size: 14px;color: #666;height: 30px;line-height: 30px;}
</style>

<template>
<div class="article-item">
  <!-- Article-item -->
  <div class="article-image">
    <!--  :src=url  src="../../imgs/bar-1.jpg"-->
    <img :src= url alt='img'>
  </div>
  <div class="artile-info">
    <h3><a href="#">{{article.title}}</a></h3>
    <span>by<a href="#">{{article.author}}</a></span>
    <p>{{article.article_desc}}</p>
    <div>
      <i class="tag"></i>
      <a href="#">{{article.article_tag[0]}}</a><a>&nbsp;,&nbsp;</a><a href="#">{{article.article_tag[1]}}</a>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "article-item",
  props:['article'],
  data () {
    return {
      // url:"../../imgs/bar-"+this.article._id+".jpg"
      url:"/static/imgs/bar-"+this.article._id+".jpg"
    };
  }
}
</script>
