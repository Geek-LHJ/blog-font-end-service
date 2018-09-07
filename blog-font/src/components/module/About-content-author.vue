<style scoped>
/* reset */
*,body,ul,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{margin:0;padding:0;}
body{font-size:12px;}
img{border:none;}
li{list-style:none;}
input,select,textarea{outline:none; border: none;}
textarea{resize:none;}
a{text-decoration:none; color: rgb(27,172,215);}
/*清浮动*/
.clearfix:after{content: "";display: block;clear: both;}
.clearfix{zoom:1;}
.fl{float: left;}
.fr{float: right;}

.box{width: 1220px; padding: 80px 15px;margin: 0 auto; }
@media(max-width: 1249px){
  .box{width: 950px;}
}
.box .container h3{ color: #242f35;font-weight: 400;font-size: 24px;}
.box .container blockquote{margin: 20px 0; height: 65px;line-height: 65px;
  border-left: 6px solid #ddd; text-indent: 20px; font-size: 14px; color: #666;}
.box .container p{line-height: 23px; margin-bottom: 20px; font-size: 14px; color: #666;}
.box .container ol{margin-bottom: 35px;}
.box .container li{list-style-type: disc; margin-left:20px;line-height: 23px; font-size: 15px; color: #666;}
.box .container table {border-collapse:collapse; width: 1220px;}
@media(max-width: 1280px){
  .box .container table{width: 950px;}
}
.box .container table th, .box .container table td {padding: 10px;height: 18px;
  border: 1px solid #ccc; line-height: 18px;text-align: left; min-width: 80px;
  font-size: 14px; color: #666;}
</style>

<template>
<div class="box">
  <!-- about-content -->
  <div class="container">
    <h3>关于我</h3>
    <blockquote>一个有着百度情结的小菜鸟，在前端路上不停爬行。<a href="#">在线简历 Online CV</a></blockquote>
    <p>
      偏爱前端开发，固执己见，正在尝试进入后端领域。<br>
      热爱美好事物，热爱独立音乐，热爱国学，崇尚自由，是个十足的愤青伪文艺，如臭味相投，欢迎交流。
    </p>
    <p>以下是我的联系方式</p>
    <ol>
      <li>邮件:<a href="#">chenxiaowu1994@outlook.com</a></li>
      <li>github:<a href="#">https://github.com/Mrminfive</a></li>
      <li>其它方式:<a href="#">知乎</a>、<a href="">微博</a></li>
    </ol>
  </div>
  <div class="container">
    <h3>建站初衷</h3>
    <blockquote>记录成长路上的风景</blockquote>
    <table>
      <tr>
        <th>时间</th>
        <th>事件</th>
      </tr>
      <tr>
        <td>2017-09-12</td>
        <td>从头搭建个人 hexo-theme-skapp 主题，并正式开源，地址 <a href="#">hexo-theme-skapp</a></td>
      </tr>
      <tr>
        <td>2017-08-01</td>
        <td>模仿 <a href="#">凹凸实验室</a> 从头写了一个自己的主题，主题名叫 mb 。</td>
      </tr>
      <tr>
        <td>2016-03-09</td>
        <td>初步使用 hexo next 主题搭建好静态博客。然后界面很无耻的使用默认的样式，还没有修改。</td>
      </tr>
      <tr>
        <td>2015-12-20</td>
        <td>学习 git 的时候接触到 GitHub 从而了解到 GitHub Pages 于是想着自己用 hexo 搭了一个博客，再然后也不了了之了</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>

export default {
  name: "about-content-author",
  components: {  },
  data () {
    return {
    };
  }
}
</script>
