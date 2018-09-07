<style scoped>

</style>

<template>
 <div>
  <Headbg></Headbg>
  <Headbar style="position:fixed;left:0;top:0;" v-show="isShow"></Headbar>
  <Aboutcontent/>

  <!-- about -->
  <Footer></Footer>

 </div>
</template>

<script>

import Headbg from '../module/Head-bg';
import Headbar from '../module/Head-bar';


import Aboutcontent from '../module/About-content';
import Footer from '../module/Footer';


export default {
  name: "about",
  components:{ Headbg, Headbar, Footer, Aboutcontent},
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
