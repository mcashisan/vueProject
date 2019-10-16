<template>
    <div class="divcad">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">会员中心</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <div class="head">
        <span>为账户xxxx购买会员</span>
      </div>
      <div class="mid1">
        <van-cell title="会员特权" is-link to="vipdes"  value="会员说明"/>
        <div class="akl1">
        <div class="img1">
        <img src="../img/emoji_1.png" alt="mmp">
        </div>
          <div class="imgp1" >
          <p>减免配送费</p>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
          </div>
        </div>
        <div class="akl2">
        <div class="img2">
        <img src="../img/emoji_2.png" alt="mmp">
        </div>
        <div class="imgp2">
          <p>减免配送费</p>
          <p>每月减免30单，每日可减免3单，每单最高减4元</p>
          <p>蜂鸟专送专享</p>
        </div>
        </div>
        <div class="bottom1">
       <div class="open">
         <p>开通会员</p>
       </div>
          <div class="onemonth">
            <span>1个月</span>
            <span> ￥20</span>
            <router-link :to="{path:'/paytime'}">
              <span>购买</span>
              </router-link>
          </div>
        </div>
        <div class="duihuan">
        <van-cell title="兑换会员" is-link to="vipcon"  value="使用卡号卡密"/>
        </div>
        <van-cell title="购买记录" is-link to="vipinv"  value="开具发票"/>
      </div>

    </div>
</template>

<script>
    export default {
        name: "VipCard",
      methods:{
          goback(){
          this.$router.go(-1)
        }}
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
  .head{
    height: 2rem;
  }
  .head>span{
    line-height: 2rem;
    font-size: 0.5rem;
    color: #666;
    padding: 0.5rem;
  }
  .mid1{
height: 11.5rem;
    background-color: white;
    /*overflow: hidden;*/
  }
  .iconfont icon-sheng2{
font-size: 5rem;
  }
  .img1,img2{
    /*padding-left: 0.5rem;*/
    float: left;
    overflow: hidden;
  }
  .img1>img{
    width: 2rem;
    height: 2rem;
    float: left;
    margin-left: 0.8em;
  }
  .imgp1>p{
    float: left;
    padding-left: 0.8rem;
    color: rgb(153,153,153);
    margin: 0;
  }
  .imgp1>p:nth-child(1){
    font-size: 1rem;
    font-weight: bold;
  }
  .imgp1>p:nth-child(2){
    font-size: 0.1rem;
  }
  .imgp1>p:nth-child(3){
    margin-left: 4.85em;
    font-size: 0.1rem;
  }
  .imgp2>p{
    float: left;
    padding-left: 0.8rem;
    color: rgb(153,153,153);
    margin: 0;
  }
  .img2>img{
    width: 2rem;
    height: 2rem;
    float: left;
    margin-left: 0.8em;
  }
  .akl1{
    overflow: hidden;
    margin-top: 1rem;
    /*margin-bottom: 1rem;*/
    padding-bottom: 1rem;
    /*margin-left: 0.5rem;*/
    border-bottom: 1px solid #f5f5f5;
  }
  .akl2{
    overflow: hidden;
    margin-top: 1rem;
    /*margin-bottom: 1rem;*/
    /*margin-left: 0.5rem;*/
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 1rem;
  }
  .imgp2>p:nth-child(1){
    font-size: 1rem;
    font-weight: bold;
  }
  .imgp2>p:nth-child(2){
    font-size: 0.1rem;
  }
  .imgp2>p:nth-child(3){
    margin-left: 4.25em;
    font-size: 0.1rem;
    margin-left: 4.85em;
  }
  .bottom1{
    /*margin-top: 1rem;*/
    background-color: white;
    /*margin-bottom: 0.7rem;*/
    margin-top: 0.5rem;
  }
  .open{
    padding-left: .7rem;
    border-bottom: 1px solid #f5f5f5;
    height: 2rem;
  }
  .open>p{
    font-size: 14px;
    /*padding-left: 0.5rem;*/

line-height: 2rem;
  }
  .onemonth{
    height: 2.5rem;
    padding-left: 0.7rem;
  }
  .onemonth>span{
    line-height: 2.5rem;
    font-size: .6rem;
  }
  .onemonth>span:nth-child(2){
color: rgb(255,102,0);
    padding: 0;
  }
  .onemonth>a>span{
    color: rgb(255,102,0);
    border: .025rem solid #f60;
    text-align: center;
    border-radius: .2rem;
    font-size: .6rem;
    padding: .3rem .5rem;
    text-decoration: none;
    margin-left: 9rem;
  }
  .duihuan{
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
</style>
