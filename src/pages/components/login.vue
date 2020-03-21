<template>
  <div class="login-md" v-if="loginVisible">
    <div class="blank" @click="hideLoginBox"></div>
    <div class="login-box">
      <div class="welcome">登陆</div>
      <div class="tag">有言 | 通行证</div>
      <div class="team-slogan">链接知识 释放设计力</div>
      <div class="input-box">
        <div class="phone">
          <input placeholder="请输入手机号" v-model="phone" />
        </div>
        <div class="password">
          <input placeholder="请输入密码" v-model="password" />
        </div>
      </div>
      <div class="login-btn" @click="login">登陆</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      loginVisible: false,
      phone: "",
      password: ""
    };
  },
  props: {},
  computed: {},
  watch: {},
  created() {},
  methods: {
    showLoginBox() {
      this.loginVisible = true;
    },
    hideLoginBox() {
      this.loginVisible = false;
    },
    resetLoginBox() {
      this.phone = "";
      this.password = "";
    },
    login() {
      if (!this.phone) {
        this.$message.error("手机号不能为空!");
        return;
      }
      if (!this.password) {
        this.$message.error("密码不能为空!");
        return;
      }
      if (this.phone.length !== 11) {
        this.$message.error("手机号格式不正确!");
        return;
      }
      axios
        .post("/webApi/login", {
          phone: this.phone,
          password: this.password
        })
        .then(res => {
          console.log(res);
          if (res.data.err_code == 0) {
            this.$message({
              message: "登陆成功!",
              type: "success"
            });
           this.$store.commit('setUser',res.data.user)
            this.hideLoginBox();
            this.resetLoginBox();
          } else {
            this.$message.error("手机号或密码错误!");
          }
        })
        .catch(err => {
          console.log(err);
          this.$message.error("注册失败!");
        });
    }
  }
};
</script>
<style lang="less" scoped>
.login-md {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.54);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  .blank {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .login-box {
    width: 420px;
    height: 500px;
    background: rgba(255, 255, 255, 1);
    border-radius: 12px;
    box-sizing: border-box;
    padding: 30px 40px 105px 40px;
    position: absolute;
    .welcome {
      font-size: 30px;
      font-weight: 600;
      color: rgba(51, 51, 51, 1);
      text-align: center;
    }
    .tag {
      font-size: 14px;
      font-weight: 400;
      color: rgba(153, 153, 153, 1);
      text-align: center;
      margin-top: 5px;
    }
    .team-slogan {
      font-size: 20px;
      font-weight: 400;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      margin-top: 18px;
    }
    .input-box {
      margin-top: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .phone {
        border-bottom: 1px solid #f5f5f5;
        width: 340px;
        height: 50px;
        input {
          outline: none;
          border: none;
          width: 100%;
          height: 90%;
          font-size: 14px;
          color: #333;
        }
      }
      .password {
        border-bottom: 1px solid #f5f5f5;
        width: 340px;
        height: 50px;
        input {
          outline: none;
          border: none;
          width: 100%;
          height: 90%;
          font-size: 14px;
          color: #333;
        }
      }
    }
    .login-btn {
      width: 340px;
      height: 40px;
      background: rgba(0, 0, 0, 1);
      border-radius: 20px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 40px;
      text-align: center;
      margin-top: 41px;
      cursor: pointer;
    }
  }
}
</style>