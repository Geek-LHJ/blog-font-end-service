<style scoped>
/* 此处没有完成 */
.nav{width: 200px;height: 200px;background-color: #fff;}
</style>

<template>
 <div>
  <Headbar style="position:fixed;left:0;top:0;"></Headbar>
  <div class="nav">
    nav__item
  </div>
  <Container></Container>
  <Footer></Footer>

 </div>
</template>

<script>
import Headbar from '../module/Head-bar';

import Container from '../module/Container';
import Footer from '../module/Footer';
export default {
  name: "archives",
  components:{ Container, Footer, Headbar  },
  data () {
    return {
      isShow:false,
    };
  }
}
</script>
