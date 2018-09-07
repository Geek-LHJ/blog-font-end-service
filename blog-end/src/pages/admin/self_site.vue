<template>
 <div>
    <breadcrumb path="个人站点 | 友情链接"></breadcrumb>
    <!-- 个人站点部分 -->
    <h1 class="mySite">个人站点</h1>
    <!-- 标题信息内容 -->
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="5"><div class="grid-content"><span>Name</span></div></el-col>
        <el-col :span="5"><div class="grid-content"><span>Icon</span></div></el-col>
        <el-col :span="9"><div class="grid-content"><span>Url</span></div></el-col>
        <el-col :span="5"><div class="grid-content"><span>操作</span></div></el-col>
      </el-row>
    </div>
    <!-- 数据库获得的数据展示 -->
    <div class="container">
      <div class="box"
        v-bind="data"
        v-for="(item,index) in data"
        v-bind:key="index">
        <el-input
          class="content name"
          v-model=item.name
          :disabled="true"
          clearable>
        </el-input>
        <el-input
          class="content icon"
          v-model=item.icon
          :disabled="true"
          clearable>
        </el-input>
        <el-input
          class="content url"
          v-model=item.url
          :disabled="true"
          clearable>
        </el-input>
        <el-button
          class="deleteButton"
          type="danger"
          v-on:click="deleteSiteData(item._id)"
        >删 除</el-button>
      </div>
    </div>
    <!-- 添加一条新的内容 -->
    <div class="box">
      <el-input
        class="content name"
        placeholder="请输入站点Name"
        v-model="newInputName"
        clearable>
      </el-input>
      <el-input
        class="content icon"
        placeholder="请输入站点Icon"
        v-model="newInputIcon"
        clearable>
      </el-input>
      <el-input
        class="content url"
        placeholder="请输入站点URL"
        v-model="newInputUrl"
        clearable>
      </el-input>
      <el-button
        class="deleteButton"
        type="primary"
        v-on:click="addSiteData"
      >添 加</el-button>
    </div>

    <!-- 友情链接部分 -->
    <h1 class="mySite">友情链接</h1>
    <!-- 标题信息内容 -->
    <div class="box">
      <el-row :gutter="20">
        <el-col :span="5"><div class="grid-content"><span>Name</span></div></el-col>
        <el-col :span="5"><div class="grid-content"><span>Icon</span></div></el-col>
        <el-col :span="9"><div class="grid-content"><span>Url</span></div></el-col>
        <el-col :span="5"><div class="grid-content"><span>操作</span></div></el-col>
      </el-row>
    </div>
    <!-- 数据库获得的数据展示 -->
    <div class="container">
      <div class="box"
        v-bind="data"
        v-for="(item,index) in data"
        v-bind:key="index">
        <el-input
          class="content name"
          v-model=item.name
          :disabled="true"
          clearable>
        </el-input>

        <el-input
          class="content icon"
          v-model=item.icon
          :disabled="true"
          clearable>
        </el-input>
        <el-input
          class="content url"
          v-model=item.url
          :disabled="true"
          clearable>
        </el-input>
        <el-button
          class="deleteButton"
          type="danger"
          v-on:click="deleteSiteData(item._id)"
        >删 除</el-button>
      </div>
    </div>
    <!-- 添加一条新的内容 -->
    <div class="box">
      <el-input
        class="content name"
        placeholder="请输入站点Name"
        v-model="newInputName"
        clearable>
      </el-input>
      <el-input
        class="content icon"
        placeholder="请输入站点Icon"
        v-model="newInputIcon"
        clearable>
      </el-input>
      <el-input
        class="content url"
        placeholder="请输入站点URL"
        v-model="newInputUrl"
        clearable>
      </el-input>
      <el-button
        class="deleteButton"
        type="primary"
        v-on:click="addSiteData"
      >添 加</el-button>
    </div>

 </div>
</template>

<script>
import breadcrumb from "../../components/breadcrumb.vue";

export default {
  name: "self_site",
  data() {
    return {
      data: [
        {
          name: "Github",
          icon: "GithubIcon.png",
          url: "http://www.github.com"
        },
        { name: "Weibo", icon: "Weibo.png", url: "http://www.sina.com" }
      ],
      newInputName: "",
      newInputIcon: "",
      newInputUrl: ""
    };
  },
  components: { breadcrumb },
  created() {
    this.getSitesData();
  },
  methods: {
    getSitesData() {
      this.$http.get("/admin/selfsite").then(
        response => {
          console.log(response);
          this.data = response.data.sites;
        },
        err => {
          console.log("error:" + err);
        }
      );
    },
    addSiteData() {
      if (this.newInputName == "") {
        this.$message({
          message: "新加站点Name不能为空",
          type: "warning"
        });
        return;
      }
      if (this.newInputIcon == "") {
        this.$message({
          message: "新加站点Icon不能为空",
          type: "warning"
        });
        return;
      }
      if (this.newInputUrl == "") {
        this.$message({
          message: "新加站点Url不能为空",
          type: "warning"
        });
        return;
      }
      let data = {
        name: this.newInputName,
        icon: this.newInputIcon,
        url: this.newInputUrl
      };
      this.$http.post("/admin/selfsite/add", data).then(
        response => {
          if (response.data.code != 0) {
            this.$message({
              message: response.data.message,
              type: "warning"
            });
          } else {
            this.$message({
              message: response.data.message,
              type: "success"
            });
            setTimeout(
              function() {
                location.reload(); //实现页面重新加载
              }.bind(this),
              500
            );
          }
        },
        err => {
          console.log("error:" + err);
        }
      );
    },
    deleteSiteData(id) {
      // console.log(id);
      this.$http.get("/admin/selfsite/delete?id=" + id).then(response => {
        let message = "";
        this.$message({
          message: response.data.message,
          type: "success"
        });
        setTimeout(
          function() {
            location.reload(); //实现页面重新加载
          }.bind(this),
          500
        );
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.mySite {
  display: block;
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  padding: 30px 10px;
  margin-bottom: 20px;
  text-indent: 1em;
  border-bottom: 1px solid #ccc;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 30px;
  }

  span {
    font-size: 22px;
    font-weight: 500;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
  }
}

.container {
  border-bottom: 1px solid #ccc;
  margin: 0 0 20px;
}

.box {
  width: 800px;
  margin-bottom: 10px;

  .content {
    max-width: 300px;
  }

  .name, .icon {
    width: 160px;
  }

  .url {
    width: 320px;
    margin-right: 30px;
  }
}
</style>
