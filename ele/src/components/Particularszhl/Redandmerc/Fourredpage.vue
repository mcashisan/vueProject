<template>
  <div id="title">
    <!--导航条-->
    <div>
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="tiao"></i>
        </div>
        <div class="header_con">兑换红包</div>
        <div class="header_left"></div>
      </div>
    </nav>
  </div>
    <div style="margin: 0.7rem;">
    <input type="text" id="in1"  placeholder="请输入兑换码">
    <div id="inputandy">
    <input type="text" id="in2" placeholder="验证码">
      <div id="yzm">
        <p id="ps1"> <img :src="as" alt=""style="height: 1.5rem;"></p>
      <p id="ps2" @click="asdba">
        <span>看不清</span><br>
        <span style=color:dodgerblue>换一张</span>
      </p></div>
      <div class="enpty" style="clear: both;">
      </div>
    </div>
      <div id="btndh">兑换</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Fourredpage",
      data(){
        return{
          aq:1,
          //接受数据
          as:[],
          bb:true,
          cc:false
        }
      },
      methods:{
        tiao(){
          this.$router.push({path:"/pagered"})
        },
        asdba(){
          this.myHttp.post("/v1/captchas",{},(response)=>{
            this.as=response.data.code;
          })
        }
      },
    }
</script>

<style scoped>
  /*导航条*/
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
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
#in1{
  width: 100%;
  padding-left: 0.4rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  border: 0;
}
  #inputandy{
margin-top: 0.5rem;
    background-color: white;
  }
  #in2{
    width: 53%;
    padding-left: 0.4rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border: 0;
    float: left;
  }
  #yzm{
    width: 45%;
    float: right;
    background-color: white;
    padding-top: 0.2rem;
    font-size: 0;
  }
#ps1{
  float: left;
  font-size: 1rem;
  text-align: center;
}
  #ps2{
    float: right;
    margin-right: 0.1rem;
    font-size: 0.4rem;
    margin-top: 0.2rem;
    padding-left: 0.2rem;
  }
  #btndh{
    width: 100%;
    font-size: 0.67rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    margin-top: 1rem;
    color: white;
    background-color: rgba(0,0,0,0.2);
    text-align: center;
  }
</style>
