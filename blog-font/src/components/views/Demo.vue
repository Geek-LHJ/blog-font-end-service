<style scoped>
.box{ background: linear-gradient(45deg,rgba(38,44,51,.8) 20%,rgba(0,201,255,.9) 100%);}
.containner{background-image: url(../../imgs/dogs.jpg);}
</style>

<template>
 <div class="box">
   <div class="containner">
    <Headbar></Headbar>
    <Page404></Page404>
    <!-- music -->
   </div>
 </div>
</template>

<script>
import Headbar from '../module/Head-bar';
import Page404 from '../module/Page404';

export default {
  name: "demo",
  components:{ Headbar, Page404 },
  data () {
    return {
    };
  }
}
</script>
