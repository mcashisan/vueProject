<template>
    <div id="login">
      <div style="background: #fff;margin-top: 0.5rem;">
        <!--账号-->
        <div class="login_header">
          <div>
            <input type="text" placeholder="账号">
          </div>
        </div>
        <!--密码输入框-->
        <div class="login_center">
          <div class="login_center_input">
            <input type="password" placeholder="密码">
          </div>
          <div class="login_center_bot">显示按钮</div>
        </div>
        <!--验证码-->
        <div class="login_bottom">
          <div class="login_bottom_code">
            <input type="text" placeholder="验证码">
          </div>
          <div class="code_message">
            <img :src="imageMessage" alt="">
            <div>
              <p>看不清</p>
              <p style="color: blue;" @click="upData">换一张</p>
            </div>
          </div>
        </div>
      </div>
      <div class="">

      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data() {
          return {
            imageMessage: ""
          }
        },
        methods: {
          upData() {
            this.myHttp.post("/v1/captchas", {}, (res) => {
              console.log(res);
              this.imageMessage = res.data.code;
            }, (err) => {
              console.log(err);
            });
          }
        },
      created() {
          this.upData();
      }
    }
</script>

<style scoped>
  .login_header, .login_center, .login_bottom {
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

</style>
