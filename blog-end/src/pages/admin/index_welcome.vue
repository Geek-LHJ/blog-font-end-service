<template>
	<div>
	  <h1>你好，{{username}}{{message}}</h1>
    <hr>
	  <h2>欢迎进入博客后台管理系统</h2>
	</div>
</template>
<script>
export default {
  data() {
      return {
        message: '',
        username: '',
      }
    },
    mounted() {
        this.$http.get('/admin').then((response)=> {
          // console.log(response);
          let message = response.data.message;
          let user= response.data.userInfo;
          this.message= message;
          this.username= user.username;
        })
    },
}
</script>


<style lang="stylus">
h1
  font-size: 34px;
h2
  font-size: 24px;
</style>

