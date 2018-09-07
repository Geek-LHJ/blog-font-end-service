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

.tag-box{display: inline-block; height: 30px;border-radius: 15px;border: 2px solid #d8e5f3;
  padding: 0 10px; margin:0 8px 8px 0;}
.tag-box:hover{border: 2px solid rgb(25,171,214)}
.tag-box a{display: inline-block; height: 30px; line-height: 30px;font-size: 12px;}
.tag-box a:hover{color: rgb(45,184,225);}
</style>

<template>
  <div class="tag-box">
    <a href="#">{{articleTag}}</a>
  </div>
</template>

<script>
export default {
  name: "sidebar-tag-item",
  props:['articleTag'],
  data() {
    return {};
  }
};
</script>
