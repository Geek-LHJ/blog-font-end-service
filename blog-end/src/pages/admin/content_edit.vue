<template>
  <div class="category_edit">
    <breadcrumb path="编辑文章"></breadcrumb>
    <el-form :model="form" :rules="rules" style="width:80%;">
      <el-form-item label="文章作者" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="文章类别" prop="category">
        <el-select v-model="form.selected" placeholder="选择文章类别">
          <el-option
            v-for="category in form.categories"
            :key="category._id"
            :label="category.name"
            :value="category._id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="简介">
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 20}"
          placeholder="请输入文章简介"
          v-model="form.desc">
        </el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input
          type="textarea"
          :autosize="{ minRows: 10}"
          placeholder="请输入内容"
          v-model="form.content">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即发表</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script type="es6">
  import breadcrumb from '../../components/breadcrumb.vue'
  export default {
    data() {
      return {
        form: {
          user:'',
          title: '',
          selected: '',
          categories: [],
          desc: '',
          content: '',
        },
        rules: {
          user: [
            {required: true, message: '请输入文章作者', trigger: 'blur'},
          ],
          title: [
            {required: true, message: '请输入文章标题', trigger: 'blur'},
          ],
          category: [
            {required: true, message: '请选择文章分类', trigger: 'blur'}
          ],
        }
      }
    },
    created() {
      this.$http.get('admin/content/edit?id=' + this.$route.query['id']).then(response => {
        // console.log(response.data.content)
        this.form.user = response.data.content.user;
        this.form.title = response.data.content.title;
        this.form.desc = response.data.content.description;
        this.form.content = response.data.content.content;
        this.form.categories = response.data.categories;
        this.form.selected = response.data.content.category;
      }, response => {
        console.log('error:' + response);
      })
    },
    methods: {
      onSubmit() {
        if (this.form.selected == '' || this.form.title == '') {
          this.$message({
            message: '类别或标题不能为空',
            type: 'warning'
          });
          return;
        }
        this.$http.post('/admin/content/edit', {
          id: this.$route.query['id'],
          username: this.form.user,
          category: this.form.selected,
          title: this.form.title,
          description: this.form.desc,
          content: this.form.content,
        }).then(response => {
          if (response.data.code == 0) {
            this.$message({
              message: '文章修改成功,2秒后为您跳转至文章管理首页',
              type: 'success',
            });
            var that = this;
            setTimeout(function () {
              that.$router.push({path: '/admin/content'})
            }, 2000);
          } else {
            this.$message({
              message: '服务器发生未知错误',
              type: 'error'
            });
          }
        }, response => {
          console.log('error:' + response);
        })
      },
    },
    components: {
      breadcrumb,
    }
  }

</script>

<style lang="stylus">
</style>
