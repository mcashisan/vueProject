<template>
<<<<<<< HEAD
    <div class="PayTime">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">倒计时</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <div class="mid">
        <p>支付剩余时间</p>
      <van-count-down :time="time">
        <template v-slot="timeData">
          <span class="item">00</span>
          <span class="item">:</span>
          <span class="item">{{ timeData.minutes }}</span>
          <span class="item">:</span>
          <span class="item">{{ timeData.seconds }}</span>
        </template>
      </van-count-down>
      </div>
      <div class="choosepay">
        选择支付方式
      </div>


      <van-radio-group v-model="radio" >
        <van-cell-group>
          <van-cell  clickable @click="radio = '1'">
            <div class="icon1">
              <i class="iconfont icon-zhifubaozhifu">  </i>
               <span>支付宝</span>
            </div>
            <van-radio slot="right-icon" name="1" />
          </van-cell>
          <van-cell clickable @click="radio = '2'">
            <div class="iconb">
              <i class="iconfont icon-weixinzhifu"></i>
              <span>微信</span>
            </div>
            <van-radio slot="right-icon" name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>

      <div class="bottom" @click="show=true">确认支付</div>

      <div class="tan" v-if="show">
        <img src="../img/弹框.png" alt="">
        <p>当前环境无法支付，请打开官方APP</p>
        <van-button type="primary" size="large" @click="show=false">确定</van-button>
      </div>
      </div>
</template>

<script>
    export default {
      name: "PayTime",
      methods:{
        goback(){
          this.$router.go(-1)
        },

      },
      data() {
        return {
          time: 1 * 15 * 60 * 1000,
          radio: '1',
          show:false
        };
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
  @import "//at.alicdn.com/t/font_1454015_erlu3v0c1fu.css";
  @import "//at.alicdn.com/t/font_1454015_6xb8lgr6owj.css";
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
  .item {
    display: inline-block;
    /*width: 7rem;*/
    /*margin-right: 5px;*/
    color: black;
    font-size:2rem;
    text-align: center;
    /*background-color: #1989fa;*/

  }
  .mid{
    background-color: white;
    height: 8rem;
    text-align: center;
    line-height: 4rem;
  }
  .choosepay{
font-size: .6rem;
    line-height: 1.8rem;
    height: 1.8rem;
    padding-left: .7rem;
    color:#666;
  }
  .icon-zhifubaozhifu{
    font-size: 2rem;
    color: rgb(105,201,244);
    line-height: 3rem;
  }
  .icon-weixinzhifu{
    color: rgb(65,176,53);
    font-size: 2rem;
    line-height: 3rem;
  }
  .icon1>span{
    font-size: .7rem;
    color: #666;
    margin-left: .3rem;
   line-height: 1rem;
  }
  .iconb>span{
    font-size: .7rem;
    color: #666;
    margin-left: .3rem;
  }
  .bottom{
    width: 80%;
    margin: .6rem auto 0;
    line-height: 1.5rem;
    border-radius: 5px;
    text-align: center;
    background: rgb(76,217,100);
    font-size: .6rem;
    color: #fff;
  }
  .tan{
    text-align: center;
    background-color: white;
    border-radius: .3rem;
    padding-top: 2rem;
    position: absolute;
    top: 30%;
    left: 7%;
    width: 86%;
  }
  .tan>img{
   width: 5rem;

  }
</style>
