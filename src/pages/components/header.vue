<template>
  <div class="header">
    <div class="content clearFloat">
      <div class="logo ctCenter">有言ICON</div>
      <ul class="menu">
        <li @click="toPage(0)" :class="activeIndex==0?'active':''" class="ctCenter">首页</li>
        <li @click="toPage(1)" :class="activeIndex==1?'active':''" class="ctCenter">文章</li>
        <li @click="toPage(2)" :class="activeIndex==2?'active':''" class="ctCenter">活动</li>
        <li @click="toPage(3)" :class="activeIndex==3?'active':''" class="ctCenter">招聘</li>
        <li @click="toPage(4)" :class="activeIndex==4?'active':''" class="ctCenter">学院</li>
        <li @click="toPage(5)" :class="activeIndex==5?'active':''" class="ctCenter">导航</li>
        <div class="line" :style="{left:leftDt}"></div>
      </ul>
      <ul class="service">
        <li>
          <img src="@/assets/img/searchIcon.png" class="tIcon" />
          <span>搜索</span>
        </li>
        <li>
          <img src="@/assets/img/editIcon.png" class="tIcon" />
          <span>投稿</span>
        </li>
        <li>
          <img src="@/assets/img/scanIcon.png" class="tIcon" />
          <span>公众号</span>
        </li>
      </ul>
      <div class="btn-group ctCenter" v-if="!isLogin">
        <span @click="showRegisterBox">注册</span>
        <label>|</label>
        <span @click="showLoginBox">登陆</span>
      </div>
      <div class="btn-group login ctCenter" v-if="isLogin">
        <span class="userInfo">用户{{phone}}</span>
        <span @click="logout">退出</span>
      </div>
    </div>
    <Login ref="login" />
    <Register ref="register" />
  </div>
</template>
<script>
import Login from "./login";
import Register from "./register";

import { mapState } from "vuex";
import axios from "axios";
export default {
  name: "my-header",
  data() {
    return {
      activeIndex: 0
    };
  },
  components: { Login, Register },
  props: {
    currentPageNum: String
  },
  computed: {
    leftDt: function() {
      let tmpDt = "";
      if (this.activeIndex == 0) {
        tmpDt = "14px";
      } else if (this.activeIndex == 1) {
        tmpDt = "74px";
      } else if (this.activeIndex == 2) {
        tmpDt = "134px";
      } else if (this.activeIndex == 3) {
        tmpDt = "194px";
      } else if (this.activeIndex == 4) {
        tmpDt = "254px";
      } else if (this.activeIndex == 5) {
        tmpDt = "314px";
      } else {
        tmpDt = "1200px";
      }
      return tmpDt;
    },
    ...mapState({
      isLogin: state => state.isLogin,
      phone: state => state.user.phone
    })
  },
  watch: {
    // currentPageNum:(newVal)=>{
    //   if(newVal == 1){
    //     this.activeIndex = 1;
    //   }
    // }
  },
  created() {
    //   console.log(this.currentPageNum)
    this.toPage(this.currentPageNum);
  },
  methods: {
    toPage(index) {
      this.activeIndex = index;
      if (this.activeIndex == 0) {
        this.$router.push({
          path: "/"
        });
      } else if (this.activeIndex == 1) {
        this.$router.push({
          path: "/article"
        });
      } else if (this.activeIndex == 2) {
        this.$router.push({
          path: "/activity"
        });
      } else if (this.activeIndex == 3) {
        this.$router.push({
          path: "/recruit"
        });
      } else if (this.activeIndex == 5) {
        //  this.$message.error('手机号不能为空!');
        this.$notify.error({
          title: "错误",
          message: "这是一条错误的提示消息"
        });
      }
    },
    showLoginBox() {
      this.$refs.login.showLoginBox();
    },
    showRegisterBox() {
      this.$refs.register.showRegisterBox();
    },
    logout() {
      axios
        .post("/webApi/logout")
        .then(res => {
          console.log(res);
            this.$message({
              message: "退出登陆成功!",
              type: "success"
            });
            this.$store.commit("resetUser");
        })
        .catch(err => {
          console.log(err);
          this.$message.error("退出登陆失败!");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  height: 70px;
  background: #fff;
  .content {
    .logo {
      float: left;
      width: 82px;
      height: 70px;
      background-color: rgba(0, 0, 0, 1);
      color: #fff;
      font-weight: 600;
      margin-left: 112px;
    }
    .menu {
      float: left;
      height: 70px;
      font-size: 14px;
      font-weight: 400;
      line-height: 70px;
      margin: 0px 0 0 86px;
      padding: 0;
      position: relative;
      li {
        float: left;
        width: 60px;
        height: 100%;
        cursor: pointer;
        &.active {
          font-size: 17px;
          font-weight: 600;
        }
      }
      .line {
        width: 34px;
        height: 4px;
        background-color: #000;
        position: absolute;
        bottom: 14px;
        transition: all 0.5s;
      }
    }
    .service {
      float: left;
      height: 70px;
      font-size: 14px;
      line-height: 70px;
      margin: 0 0 0 116px;
      padding: 0;
      li {
        float: left;
        margin-right: 34px;
        cursor: pointer;
        img {
          width: 12px;
          height: 12px;
          margin-right: 4px;
        }
      }
    }
    .btn-group {
      float: left;
      width: 79px;
      height: 70px;
      font-size: 14px;
      margin-left: 48px;
      cursor: pointer;
      &.login {
        width: 163px;
        margin-left: 24px;
      }
      .userInfo {
        margin-right: 8px;
      }
      label {
        margin: 0px 3px 0px 3px;
      }
    }
  }
}
</style>