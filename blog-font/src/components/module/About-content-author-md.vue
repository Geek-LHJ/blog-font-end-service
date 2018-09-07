<style scoped>
.box{width: 1250px; margin: 80px auto;}

</style>

<template>
<div class="box">
  <!-- about-content -->
  <vue-markdown>### 关于我</vue-markdown>

  <vue-markdown>
``` markdown

一个有着百度情结的小菜鸟，在前端路上不停爬行。

```
  </vue-markdown>

  <vue-markdown>
```
偏爱前端开发，固执己见，正在尝试进入后端领域。
热爱美好事物，热爱独立音乐，热爱国学，崇尚自由，是个十足的愤青伪文艺，如臭味相投，欢迎交流。

```
  </vue-markdown>
  <vue-markdown>
以下是我的联系方式
* 邮件: chenxiaowu1994@outlook.com
* github: https://github.com/Mrminfive
* 其它方式: 知乎、微博
  </vue-markdown>

  <vue-markdown>### 建站初衷</vue-markdown>

  <vue-markdown></vue-markdown>



</div>
</template>

<script>
import VueMarkdown from 'vue-markdown' // production

export default {
  name: "about-content-author",
  components: {
    VueMarkdown
  },
  data () {
    return {
    };
  }
}
</script>
