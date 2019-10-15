<template>
    <div id="title">
      <!--导航条-->
      <div>
        <nav id="headers">
          <div class="headers_msg">
            <div class="header_left">
              <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="tiao"><</i>
            </div>
            <div class="header_con">推荐有奖</div>
            <div class="header_left"></div>
          </div>
        </nav>
      </div>
      <div>
        <!--图片-->
      <div id="imgdiv">
        <img src="../../img/tjyj.png" id="img1"/></div>
        <!--邀请列表-->
      <ul>
        <li>
          <img src="../../img/wechart.png"/><br>
          <span>邀请微信好友</span>
        </li>
        <li>
          <img src="../../img/QQ.png"/><br>
          <span>邀请QQ好友</span>
        </li>
        <li>
  <img src="../../img/toface.png" /><br>
          <span>面对面邀请</span>
        </li>
        <div style="clear: both;"></div>
      </ul>
        <!--邀请的人数及收获-->
      <div style="width: 100%;text-align: center;margin-top: 0.6rem">
        <div id="harvest">
          <p style="margin: 0">累计收获</p>
          <p><span id="bag">0</span>元</p>
        </div>
        <div id="invite">
          <p style="margin: 0">成功邀请</p>
          <p><span id="big">0</span>人</p>
          </div>
      </div>
      <!--明细-->
        <div style="width: 100%; text-align: center">
      <div id="detail">-收益明细-</div>
      <img src="../../img/qianbao.png" id="deimg"/>
      <div>还不赶紧去邀请好友</div></div>
      </div>
      <div id="tk">
        <img src="../../img/弹框.png" style="width: 2rem;margin-top:0.5rem;margin-bottom: 0.8rem"/>
        <p style="font-size: 0.66rem">请在饿了么APP打开</p>
        <p id="sure">确认</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Recommendcourteous",
      methods:{
        tiao(){
          this.$router.push({path:"/pagered"})
        }
      },
    }
</script>

<style scoped>
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
  #img1{
    width: 100%;
  }
  ul{
    width: 100%;
    background-color: white;
  }
  ul>li{
    width: 20%;
    float: left;
    margin:1rem;
    text-align: center;
font-size: 0.5rem;
    color: black;

  }
  li>img{
    width: 2rem;
    margin-bottom: 0.3rem;
  }
  #harvest{
    width: 50%;
    float: left;
    border-right: 1px solid rgba(0,0,0,0.07);
  }
  #bag{
    font-size:1rem;
  }
  #invite{
    width: 50%;
    float: left;
  }
  #big{
    font-size: 1rem;
  }
  #deimg{
    width: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }
  #title{
    position: relative;
  }
  #tk{
    width: 74%;
    background-color: white;
    position: absolute;
    top: 30%;
    left: 12%;
    margin: 0;
    text-align: center;
  }
  #sure{
    width: 100%;
    background-color: #4cd964;
    font-size: 1rem;
    color: white;
    padding-top:0.3rem ;
    padding-bottom:0.3rem ;
  }
</style>
