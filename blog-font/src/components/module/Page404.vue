<style scoped>
*{margin: 0;padding: 0;text-align: center;}
.box{width: 100%;min-height: 623px;}
.container{width: 100%;padding: 75px 0 135px;}
.box h1{height: 216px;line-height: 216px;font-size: 180px; color: rgb(10,43,52);}
.box h2{height: 40px;line-height: 40px;font-size: 34px; color: white;}
@media(max-width: 740px){
  .container{padding-top:135px;}
  .box h1{height: 120px;line-height: 120px;font-size: 80px;}
  .box h2{height: 28px;line-height: 28px;font-size: 20px;}
}
.box p{height: 20px;line-height: 20px;margin: 10px 0 20px 0; color: #fff;}
.box ul {width: 160px;height: 34px;margin: 0 auto;}
.box ul li{float: left; list-style: none; width: 30px;margin-right:10px;background-color: #fff; }
</style>

<template>
<div class="box">
  <div class="container">
    <h1>404</h1>
    <h2>OOPS! THIS PAGE CANNOT BE FOUND!</h2>
    <p>But we have lots of other pages for you to see.</p>
    <ul>
      <li><a href="#">1</a></li>
      <li><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">4</a></li>
    </ul>
  </div>
</div>
</template>

<script>

export default {
  name: "Page404",
  data () {
    return {
    };
  }
}
</script>
