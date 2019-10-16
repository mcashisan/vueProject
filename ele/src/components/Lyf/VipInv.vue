<template>
    <div class="ViPInv">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">购买记录</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <div class="pic">
        <img src="../img/no-log.png" alt="">
        <p>没有购买记录</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "VipInv",
      methods:{
          goback() {
          this.$router.go(-1)
           }
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
  .pic{
    /*width: 100%;*/
    /*height: 100%;*/
    /*background-color: white;*/
    margin-top: 30%;
    /*margin-left: 50%;*/
    margin-left: 2rem;
  }
  .pic>p{
    text-align: center;
    font-size: .6rem;
    color: #999;
    margin-top: .8rem;
    margin-right: 1rem;
  }

</style>
