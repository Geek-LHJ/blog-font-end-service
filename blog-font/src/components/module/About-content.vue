<style scoped>
/* reset */
*,body,ul,li,p,h1,h2,h3,h4,h5,h6,form,fieldset,table,td,img,div,dl,dt,dd,input{margin:0;padding:0;}
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

</style>

<template>
<div>
  <!-- about-content -->
  <AboutContentAuthor></AboutContentAuthor>
</div>
</template>

<script>
import AboutContentAuthor from '../module/About-content-author';

export default {
  name: "about-content",
  components:{AboutContentAuthor},
  data () {
    return {
    };
  }
}
</script>
