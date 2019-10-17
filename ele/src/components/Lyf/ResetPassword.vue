
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
      <input type="text" placeholder="用户名" class="aa"><br>
      <input type="text" placeholder="旧密码" class="aa"><br>
      <input type="password" placeholder="新密码" class="aa"><br>
      <input type="password" placeholder="确认密码" class="aa"><br>
      <div id="andlr" style="font-size: 0;">
  <input type="text" placeholder="验证码" id="ina">
  <div id="imga">
    <img :src="msgs" alt="" id="img1"><br>
    <div style="float: left;width: 50%;padding: 0;font-size: 0.6rem">
      <span>看不清</span><br>
      <span style="color: blue" @click="indent">换一张</span>
    </div>
    <div style="clear: both;"></div>
  </div>
        <div style="clear: both;"></div>
    </div>
    </div>
      <button class="btn">确认修改</button>
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
#ina{
  width: 50%;
  float: left;
  padding: 0.5rem;
  border: 0;
  border-top: 1px solid rgba(0,0,0,0.05);
  font-size: 0.8rem;
}
.headers_msg {
  display:flex;
  justify-content: space-between;
  text-align: center;
}
#imga{
  width: 50%;
  float: right;
  background-color: white;
  padding-bottom: 0.5rem;
}
.header_left {
  width: 10%;
}
#andlr{
  width: 100%;
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
.aa{
  padding: 0.5rem;
  width: 100%;
  border: 0;
  border-top: 1px solid rgba(0,0,0,0.05);
  font-size: 0.8rem;
}
.btn{
  width: 92%;
  color: white;
  background-color: rgb(78,222,103);
  margin-left: 0.5rem;
  margin-top: 1rem;
  margin-right: 0.5rem;
}
.reI{
  margin-top: 0.5rem;
  position: relative;
}
#img1{
  float:left;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.6rem;
  width: 50%;
  height: 1.5rem;
}
</style>
