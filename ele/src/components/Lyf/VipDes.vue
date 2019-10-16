<template>
    <div class="vipdes">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">我的优惠</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <div class="mid1">
        <p> {{qqq.memberTimesContent}}</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "VipDes",
      data(){
         return{
           qqq:""
         }
      },
      methods:{
        goback(){
          this.$router.go(-1)
        },
        ask(){
          this.myHttp.get("/v3/profile/explain",(res)=>{
             this.qqq=res.data
            console.log(res);
          })
        }
        },
      created(){
          this.ask()
      }
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
  .mid1{
    background-color: white;
  }
  .mid1>p{
    font-size: 1rem;
  }
</style>
