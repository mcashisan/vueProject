<template>
  <div class="ChangeUsername">
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="goback">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">修改用户名</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <input type="text" placeholder="输入用户名" v-model="newUserName" style="border:0.01rem solid #e4e4e4;margin-top:0.5rem;">
    <p>用户名只能修改一次（5-24字符之间）</p>
    <van-button type="info" size="large" @click="xiuName">确认修改</van-button>
  </div>
</template>

<script>
  export default {
    name: "ChangeUsername",
    data() {
      return {
        newUserName: ""
      }
    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      xiuName() {
        localStorage.setItem("name", this.newUserName);
        this.$router.push({path:"/account"});
      }
    },
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";

  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }

  .headers_msg {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }

  .header_left {
    width: 10%;
  }

  .header_con {
    width: 60%;
    font-size: 1rem;
    font-weight: bold;
  }

  input {
    background-color: rgb(242, 242, 242);
    border: none;
    width: 90%;
    padding: 0.3rem;
    margin-left: 0.74rem;
  }

  p {
    margin-left: 0.74rem;
    font-size: 0.4rem;
    margin-top: 0.3rem;
    color: #666;
  }

  button {
    width: 90%;
    margin-left: 5%;
    height: 1.5rem;
    font-size: 0.7rem;
    text-align: center;
    line-height: 1.5;
  }

</style>
