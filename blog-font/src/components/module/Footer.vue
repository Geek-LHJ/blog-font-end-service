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

.footer{clear: both;}
.box{width: 1250px;margin: 0 auto;}
@media(max-width: 1280px){
  .box{width: 950px;}
}
.footer-top{height: 370px;padding: 25px auto; background-color: #242f35;border-bottom: 1px solid #666;}
.footer-top .container{width: 1250px;padding: 0 15px;margin: 0 auto;}
@media(max-width: 1280px){
  .footer-top .container{width: 950px;}
}
.footer-top .container .footer-top-item h3{margin-top: 30px; height: 90px;line-height: 90px;color: #a4b1bf;}
.footer-top .container .about{width: 470px;}
@media(max-width: 1280px){
  .footer-top .container .about{width: 320px;}
}
.footer-top .container .about p{line-height: 20px;text-align: left;color: #fff;
  font-size: 14px;margin-bottom: 15px;}
.footer-top .container .about ul{height: 66px;}
.footer-top .container .about ul li{display: inline-block; height: 30px;line-height: 30px;}
.footer-top .container .about ul i{display: inline-block; height: 30px;width: 30px;}
.footer-top .container .about ul .pos{background-image: url(../../imgs/icons/pos.png);}
.footer-top .container .about ul .xin{background-image: url(../../imgs/icons/xin.png);}
.footer-top .container .about ul span{display: inline-block; text-indent: 10px;  color: #69747a;font-size: 12px;}
.footer-top .container .image{width: 160px;padding: 0 30px;}
.footer-top .container .image img{margin-top:95px;  width: 160px;height: 160px;}

@media(max-width: 1280px){
  .footer-top .container .image{padding: 0 15px;}
}
.footer-top .container .link{width: 250px; padding-left: 15px;}
@media(max-width: 1280px){
  .footer-top .container .link{width: 160px; padding-left: 15px;}
}
.footer-top .container .link ul li{height: 23px;line-height: 23px;margin-bottom: 10px; }
.footer-top .container .link ul li a{font-size: 14px; color: #fff;}
.footer-top .container .tools{width: 250px; padding-left: 15px; }
@media(max-width: 1280px){
  .footer-top .container .tools{width: 160px;}
}
.footer-top .container .tools ul li{height: 23px;line-height: 23px;margin-bottom: 10px; }
.footer-top .container .tools ul li a{font-size: 14px; color: #fff;}
.footer-top .container .footer-top-item a:hover{color:#19abd6; }
.footer-bottom{height: 50px;background-color: #2d383e;}
.footer-bottom .footer-bottom-content{width: 1250px; height: 50px;margin: 0px auto;}
@media(max-width: 1280px){
  .footer-bottom .footer-bottom-content{width: 950px;}
}
.footer-bottom .footer-bottom-content span{display: inline-block;color: #fff;
  font-size: 12px;height: 50px; line-height: 50px;}
.footer-bottom .footer-bottom-content ul{float: right;margin-top: 13px;}
.footer-bottom .footer-bottom-content ul li{float: left;width: 25px; height: 25px;margin-right: 20px;}
.footer-bottom .footer-bottom-content ul a{display: inline-block; height: 25px;width: 25px; }
.footer-bottom .footer-bottom-content ul .github{background-image: url(../../imgs/icons/github.png);}
.footer-bottom .footer-bottom-content ul .zhihu{background-image: url(../../imgs/icons/zhihu.png);}
.footer-bottom .footer-bottom-content ul .weibo{background-image: url(../../imgs/icons/weibo.png);}
.footer-bottom .footer-bottom-content ul .email{background-image: url(../../imgs/icons/email.png);}
.footer-bottom .footer-bottom-content ul .rss{background-image: url(../../imgs/icons/rss.png);}
</style>

<template>
<div class="footer">

    <div class="footer-top">
      <div class="box">
        <div class="container">
          <div class="footer-top-item about fl">
            <h3>关于</h3>
            <p>本站是基于 Hexo 搭建的静态资源博客，主要用于分享日常学习、生活及工作的一些心得总结，欢迎点击右下角订阅 rss。</p>
            <ul>
              <li><i class="pos"></i><span>Guangzhou, Guangdong Province, China</span></li>
              <li><i class="xin"></i><span>chenxiaowu1994@outlook.com</span></li>
            </ul>
          </div>
          <div class="footer-top-item image fl">
            <img src="../../imgs/MINFIVE.png" alt="MINFIVE二维码">
          </div>
          <div class="footer-top-item link fl">
            <h3>友情链接</h3>
            <ul>
              <li><a href="#">formattedzz</a></li>
              <li><a href="#">JDC京东设计中心</a></li>
              <li><a href="#">凹凸实验室</a></li>
              <li><a href="#">百度FEX</a></li>
              <li><a href="#">淘宝FED</a></li>
              <li><a href="#">TGIdeas</a></li>
              <li><a href="#">ISUX</a></li>
            </ul>
          </div>
          <div class="footer-top-item tools fl">
            <h3>构建工具</h3>
            <ul>
              <li><a href="#">Hexo</a></li>
              <li><a href="#">Sass</a></li>
              <li><a href="#">Swig</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="box">
        <div class="footer-bottom-content">
          <span class="fl">
            © Skapp 2017 powered by Hexo, made by minfive.
          </span>
          <ul>
            <li><a href="#" class="github" title="github"></a></li>
            <li><a href="#" class="zhihu" title="zhihu"></a></li>
            <li><a href="#" class="weibo" title="weibo"></a></li>
            <li><a href="#" class="email" title="email"></a></li>
            <li><a href="#" class="rss" title="rss  "></a></li>
          </ul>

        </div>
      </div>
    </div>

</div>
</template>

<script>

export default {
  name: "footer",
  data () {
    return {
    };
  }
}
</script>
