<template>
  <div class="user_index">
    <breadcrumb path="用户管理"></breadcrumb>
    <el-table
      :data="tableData"
      border
      style="width: 80%">
      <el-table-column
        prop="_id"
        label="ID">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
      <el-table-column
        prop="isAdmin"
        label="是否是管理员">
      </el-table-column>
    </el-table>
    <pager :url='url' @getData="gotData"></pager>

  </div>
</template>

<script type="es6">
import pager from "../../components/pager.vue";
import breadcrumb from "../../components/breadcrumb.vue";
export default {
  data() {
    return {
      tableData: [],
      url: "/admin/user?page="
    };
  },
  components: {
    pager,
    breadcrumb
  },
  mounted() {
    // this.$http.get("/admin/user").then(response => {
    //   // console.log(response);
    //   let users = response.data.users;
    //   for (let i = 0; i < users.length; i++) {
    //     users[i].isAdmin = users[i].isAdmin ? "管理员" : "用户";
    //   }
    //   this.tableData = response.data.users;
    // });
  },
  methods: {
    gotData() {
      this.$http.get("/admin/user").then(response => {
        // console.log(response);
        let users = response.data.users;
        for (let i = 0; i < users.length; i++) {
          users[i].isAdmin = users[i].isAdmin ? "管理员" : "用户";
        }
        this.tableData = response.data.users;
      });
    }
  }
};
</script>

<style lang="stylus">
.user_index {
  text-align: center;
}
</style>
