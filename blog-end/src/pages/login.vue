<template>
<div class="container">
  <div class="panel" v-show="showRegister">
    <div class="panel-body">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="密码" v-model="password">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="确认密码" v-model="repassword">
      </div>
    </div>
    <p class="rlBtn" @click="register">注册</p>
    <p>已有账号?去&nbsp;<span @click="toggleRL" class="toggle">登录</span></p>
    <p class="text-danger">{{warningInfo}}</p>
  </div>

  <div class="panel" v-show="showLogin">
    <div class="panel-body">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="用户名" v-model="username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="密码" v-model="password">
      </div>
    </div>
    <p class="rlBtn" @click="login">登录</p>
    <p>没有账号?去&nbsp;<span @click="toggleRL" class="toggle">注册</span></p>
    <p class="text-danger">{{ warningInfo }}</p>
  </div>
</div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      showRegister: false,
      showLogin: true,
      username: '',
      password: '',
      repassword:'',
      warningInfo: ''
    };
  },
  methods: {
    toggleRL() {
      this.showRegister = !this.showRegister;
      this.showLogin = !this.showLogin;
    },
    register() {
      if (this.username == "") {
        this.warningInfo = "用户名不能为空";
        return;
      }
      if (this.password == "") {
        this.warningInfo = "密码不能为空";
        return;
      }
      if (this.password != this.repassword) {
        this.warningInfo = "两次输入的密码不一致";
        return;
      }
      let data = {
        username: this.username,
        password: this.password,
        repassword:this.repassword
      };
      this.$http.post("/api/user/register", data).then(
        response => {
          // console.log(response);
          if (response.data.code != 0) {
            this.warningInfo = response.data.message;
            return;
          } else {
            this.warningInfo = response.data.message;
            this.toggleRL() ;
          }
        },
        response => {
          console.log("error:" + response);
        }
      );
    },
    login() {
      if (this.username == "") {
        this.warningInfo = "用户名不能为空";
        return;
      }
      if (this.password == "") {
        this.warningInfo = "密码不能为空";
        return;
      }
      let data = {
        username: this.username,
        password: this.password
      };
      this.$http.post("/api/user/login", data).then(
        response => {
          console.log(response);
          if (response.data.code != 0) {
            this.warningInfo = response.data.message;
            return;
          } else {
            this.warningInfo = response.data.message;
            this.isAdmin = response.data.userInfo.isAdmin;
            this.username = response.data.userInfo.username;
            this.user = response.data.userInfo;
            setTimeout(
              function() {
                this.$router.push("/admin");
              }.bind(this),
              500
            );
          }
        },
        response => {
          console.log("error:" + response);
        }
      );
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">

.container {
  width: 300px;
  font-size: 14px;
  margin: 100px auto;
  border: 1px solid #d5d5d5;
  border-bottom: none;
  border-radius: 3px;
  margin-bottom: 10px;
}

.panel-body {
  border: 1px solid #d5d5d5;
  border-bottom: none;
  border-radius: 3px;
  margin-bottom: 10px;

  .form-group {
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    border-bottom: 1px solid #d5d5d5;
    overflow: hidden;

    .form-control {
      width: 100%;
      box-sizing: border-box;
      padding: 10px;

      &:focus {
        outline: none;
      }
    }
  }
}

.rlBtn {
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #42b983;
  border-radius: 3px;
  font-size: 20px;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
}

.toggle {
  color: rgb(66, 185, 131);
  cursor: pointer;
}

.text-danger {
  color: rgb(240,173,78);
  text-align center
  font-size 16px
  font-weight bold
  margin: 15px 0 0;
}
</style>
