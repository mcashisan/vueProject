<template>
  <div id="title">
    <!--导航条-->
    <div>
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="JumpToThePage"></i>
          </div>
          <div class="header_con">我的余额</div>
          <div class="header_left"></div>
        </div>
      </nav>
    </div>
    <div id="andframe">
      <div id="frame">
        <div>
          <div id="leftasd">
            <p style="margin: 0;">当前余额</p>
            <p><span>{{money}}</span>元</p>
          </div>
          <router-link id="ingegral" :to="{path:'/zhlmoney'}"><span id="sp1">?</span>余额说明</router-link>
        </div>
        <div style="clear: both;"></div>
        <button id="expain">提现</button>
      </div>
    </div>
    <div id="fons">交易明细</div>
    <div style="width: 100%; text-align: center;margin-top: 0.9rem">
      <div id="dayf">
        <img src="./day.png"/></div>
      <p id="bigp">暂无明细记录</p>
    </div></div>
</template>

<script>
    export default {
        name: "Myyuan",
      data(){
          return {
            money:0.00
          }
      },
      methods:{
        //页面跳转。跳到Mine页面
        JumpToThePage(){
          this.$router.push({path:"/footmine"});
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
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
  #title{
    position: relative;
  }
  html,body{
    background-color: rgba(0,0,0,0.04);
  }
  #and{
    height: 2.5rem;
    background-color:  #3190e8;
    padding-left: 1rem;
    color: white;
  }
  #left{
    float: left;
    font-size: 1.5rem;
    margin-top: 0.6rem;
  }
  #download{
    float: left;
    margin-left: 36%;
    font-size:1rem;
    margin-top: 1rem;
  }
  #andframe{
    background-color:#3190e8;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom:0.5rem;
    padding-top: 0.2rem;
  }
  #frame{
    border-radius: 0.3rem;
    background-color: white;
    padding: 0.5rem;
  }
  #leftasd{
    float: left;
  }
  #ingegral{
    float: right;
    text-decoration: none;
    color: blue;
  }
  p>span{
    font-size: 1.67rem;
    padding-right: 0.5rem;
  }
  #expain{
    width: 100%;
    font-size: 0.68rem;
    color: white;
    background-color: rgba(0,0,0,0.2);
    padding: 0.3rem 0;
    border: 0;
    border-radius: 0.1rem;
  }
  #fons{
    margin: 0.5rem;
    font-size: 0.6rem;
    color: rgba(0,0,0,0.5);
  }
  #bigp{
    font-size: 0.7rem;
    padding-top: 0.2rem;
  }
  #sp1{
    background-color: deepskyblue;
    border-radius: 50%;
    color: white;
    padding: 0 0.2rem;
    margin-right: 0.15rem;
  }
</style>
