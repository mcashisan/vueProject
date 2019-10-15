
<template>
  <div class="reF">
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="goback">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">重置密码</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <div class="reI">
      <input type="text" placeholder="用户名"><br>
      <input type="text" placeholder="旧密码"><br>
      <input type="password" placeholder="新密码" ><br>
      <input type="password" placeholder="确认密码"><br>

      <input type="text" placeholder="验证码">
      <div class="img">
        <img :src="msgs" alt=""><br>
      </div>
      <div>
        <span>看不清</span>
        <span style="color: blue" @click="indent">换一张</span>
      </div>

      <button class="btn">确认修改</button>
    </div>
  </div>
</template>

<script>
  import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
    export default {
        name: "ResetPassword",
      data(){
          return{
            msgs:"",
          }
      },
      methods:{

        indent(){
          this.myHttp.post("/v1/captchas", {}, (res) => {
            console.log(res);
            this.msgs=res.data.code
          });
        },
        goback(){
          this.$router.go(-1)
        }
      },
      created(){
          this.indent()
      }
    }
</script>

<style scoped>

.reF{
  height: 100%;
  background-color: rgb(245,245,245);
}
@import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
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
  width: 10%;
}

.header_con {
  width: 60%;
  font-size: 1rem;
  font-weight: bold;
}
p{
  line-height: 2.3rem;
  font-size: 1rem;
  color: white;
}
a{
  text-decoration: none;
  position: absolute;
  left: 1rem;
  top: 2.2rem;
  color: white;
  font-size: 1rem;
}
input{
  padding: 1.2rem;
  margin: 0.1rem 0;
  width: 100%;
  height: 2rem;
}
.btn{
  width: 12rem;
  color: white;
  background-color: rgb(78,222,103);
  margin-left: 1.9rem;
  margin-top: 1rem;
}
.reI{
  position: relative;
}
.img{
  position: absolute;
  top:12rem;
  right: 5rem;
}
</style>
