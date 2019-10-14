<template>
  <div id="login">
    <!--导航条-->
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="fanHui">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">密码登录</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <!---->
    <div style="background: #fff;margin-top: 0.5rem;">
      <!--账号-->
      <div class="login_header">
        <div>
          <input type="text" placeholder="账号" v-model="username">
        </div>
      </div>
      <!--密码输入框-->
      <div class="login_center">
        <div class="login_center_input">
          <input :type="typePrice" placeholder="密码" v-model="password">
        </div>
        <div class="login_center_bot" @click="onOff">
          <!--不显示-->
          <i v-if="kai" class="iconfont icon-kaiguanclose"></i>
          <!--显示字-->
          <i v-else-if="guan" class="iconfont icon-kaiguanguan" style="color: #4cd964;"></i>
        </div>
      </div>
      <!--验证码-->
      <div class="login_bottom">
        <div class="login_bottom_code">
          <input type="text" placeholder="验证码" v-model="userCode">
        </div>
        <div class="code_message">
          <img :src="imageMessage" alt="">
          <div style="padding-top: 0.5rem;">
            <p>看不清</p>
            <p style="color: blue;" @click="upData">换一张</p>
          </div>
        </div>
      </div>
    </div>
    <div class="hint">
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <div>
        <!--register:登录-->
        <button @click="register">登录</button>
      </div>
      <router-link :to="{}" class="reset" @click="resetPass">重置密码?</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        imageMessage: "",
        // 用户信息
        username: "",
        password: "",
        userCode: "",
        typePrice: 'password', //type值
        kai: true,
        guan: false,
        accountMsg: []
      }
    },
    methods: {
      // 返回上一级
      fanHui() {
        return this.$router.go(-1);
      },
      // 验证码请求
      upData() {
        this.myHttp.post("/v1/captchas", {}, (res) => {
          // console.log(res);
          this.imageMessage = res.data.code;
        }, (err) => {
          console.log(err);
        });
      },
      // 登录请求
      register() {
        if (this.username == "") {
          alert("请输入手机号/邮箱/用户名");
        }else if (this.password == "") {
          alert("请输入密码");
        }else if (this.userCode == "") {
          alert("请输入验证码");
        }else if (this.username != "" && this.password != "" && this.userCode != "") {
          this.myHttp.post("/v2/login", {username:this.username, password:this.password, captcha_code:this.userCode}, (res) => {
            if (res.message == "验证码不正确") {
              alert("验证码不正确");
            }else {
              // 存储用户账号信息
              if (!localStorage.getItem("placeHistory")) {
                this.accountMsg.push({"username": this.username, "password": this.password});
              } else {
                this.accountMsg = JSON.parse(localStorage.getItem("placeHistory"));
                this.accountMsg.push({"username": this.username, "password": this.password});
              }
              // 获取用户信息
              // localStorage.getItem("placeHistory")
              let userDateList = JSON.parse(localStorage.getItem("placeHistory"));
              let _this = this;
              userDateList.forEach(function (v, i) {
                if (_this.username == v.username && _this.password == v.password) {
                  // 匹配上登录成功
                  alert("登录成功!");
                  // 跳转页面
                  _this.$router.push({path:"/home"});
                  breack;
                }else if (_this.username != v.username || _this.password != v.password) {
                  // 存用户信息
                  localStorage.setItem("placeHistory", JSON.stringify(this.accountMsg));
                  breack;
                } else {
                  alert("登录失败!");
                  breack;
                }
                console.log(v);
              });
              // localStorage.setItem("placeHistory", JSON.stringify(this.accountMsg));

            }
            console.log(res);
          }, (err) => {
            console.log(err);
          });
        }
      },
      // 重置密码
      resetPass() {
        // 跳转到重置密码页面
      },
      // 开关点击事件
      onOff() {
        if (this.kai) {
          this.typePrice = 'text';
          this.kai = false;
          this.guan = true;
        } else {
          this.typePrice = 'password';
          this.kai = true;
          this.guan = false;
        }
      }
    },
    created() {
      this.upData();
      // let userDateList = JSON.parse(localStorage.getItem("placeHistory"));
      // userDateList.forEach(function (v, i) {
      //   console.log(v);
      //   if (this.username == v.username && this.password == v.password) {
      //     localStorage.setItem("placeHistory", JSON.stringify(this.accountMsg));
      //     alert("登录成功!");
      //   } else {
      //     alert("登录失败!");
      //   }
      // });
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
  /*导航条*/
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }

  .headers_msg {
    display:flex;
    justify-content: space-between;
    text-align: center;
  }

  .header_left {
    width: 20%;
    text-align: left;
  }

  .header_con {
    width: 60%;
    font-size: 1rem;
    font-weight: bold;
  }

  .login_header, .login_bottom {
    padding: 0.5rem;
  }

  .login_header > div {
    width: 55%;
  }

  .login_header > div > input {
    width: 100%;
    font-size: 0.75rem;
    border: none;
    outline: none;
  }

  /*按钮*/
  .login_center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 0.01rem solid #e4e4e4;
    border-left: 0;
    border-right: 0;
    padding: 0 0.5rem;
  }

  .login_center_input {
    width: 55%;
  }

  .login_center_input input {
    width: 100%;
    font-size: 0.75rem;
    border: none;
    outline: none;
  }

  /*开关按钮*/
  .login_center_bot > i {
    font-size: 1.5rem;
  }

  .login_bottom {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .login_bottom_code {
    width: 50%;
  }

  .login_bottom_code input {
    width: 100%;
    font-size: 0.75rem;
    border: none;
    outline: none;
  }

  .code_message {
    width: 40%;
    height: 1.8rem;
    margin-left: 0.6rem;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .code_message > img {
    width: 60%;
    height: 100%;
    margin-right: 0.3rem;
  }

  .hint {
    padding: 0.3rem 0.5rem 0.5rem;
    line-height: 1rem;
    color: red;
  }

  .hint > div {
    margin-top: 0.4rem;
    width: 100%;
    height: 2rem;
    border: 0.01rem solid #4cd964;
    border-radius: 0.2rem;
    overflow: hidden;
  }

  .hint > div > button {
    width: 100%;
    height: 100%;
    font-size: 0.8rem;
    color: #fff;
    border: none;
    outline: none;
    background: #4cd964;
  }

  .reset {
    width: 100%;
    display: inline-block;
    text-align: right;
    margin-top: 0.6rem;
    color: #3b95e9;
  }
</style>
