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
   <!-- home123 -->
  <Headbg></Headbg>
  <Headbar style="position:fixed;left:0;top:0;" v-show="isShow"></Headbar>
  <Container></Container>
  <Footer></Footer>
 </div>
</template>

<script>
import Headbg from '../module/Head-bg';
import Headbar from '../module/Head-bar';

import Container from '../module/Container';
import Footer from '../module/Footer';

export default {
  name: "home",
  components:{ Headbg, Container,Footer,Headbar  },
  data () {
    return {
      isShow:false,
    };
  },
  methods:{
    changeIsShow(){
      if(document.documentElement.scrollTop>=20){
        this.isShow=true;
      }else{
        this.isShow=false;
      }
    }
  },
  mounted(){
    window.addEventListener('scroll',this.changeIsShow);
  }
}
</script>
