<template>
  <div id="title">
    <!--导航条-->
    <div>
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="JumpToThePage"></i>
          </div>
          <div class="header_con">我的积分</div>
          <div class="header_left"></div>
        </div>
      </nav>
    </div>
    <div>
    <div id="andframe">
    <div id="frame">
      <div>
        <div id="leftasd">
          <p>当前积分</p>
          <p><span>{{money}}</span>分</p>
        </div>
        <router-link id="ingegral" :to="{path:'/linkpath',query:{}}"><span id="sp1">?</span>积分说明</router-link>
        <div style="clear: both;"></div>
      </div>

      <button id="expain" @click="jumpopenup">积分兑换</button>
    </div>
  </div>
  <div id="fons">最近30天积分记录</div>
    <div style="width: 100%; text-align: center;margin-top: 2rem">
    <div id="dayf">
      <img src="./day.png"/></div>
    <p id="bigp">最近30天无积分记录</p>
      <p style="padding-bottom: 1rem;color: rgba(0,0,0,0.65);">快去下单赚取大量积分吧</p>
  </div>
  </div>
<transition name="slide">
  <div  v-if="ShowOne">
    <div id="dianji">
      <p id="p1">!</p>
      <p id="p2">快去下单赚取大量积分吧</p>
      <p id="p3" @click="jumpdown">确认</p>
    </div></div>
</transition>
  </div>
</template>

<script>
    export default {
        name: "Integral",
      data(){
        return {
          money:0,
          zj:false,
          jf:[],
          ShowOne:false,
          downup:false
        }
      },
      methods:{
        //页面跳转。跳到Mine页面
        JumpToThePage(){
          this.$router.push({path:"/footmine"});
        },
        jumpopenup(){
          this.ShowOne=!this.ShowOne;
        },
        jumpdown(){
          this.ShowOne=!this.ShowOne;
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
    background-color: white;
    position: relative;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  html,body{
    background-color: rgba(0,0,0,0.04);
  }
  #title{
    position: relative;
  }
  #and{
    height: 2rem;
    background-color:  #3190e8;
    padding-left: 0.5rem;
    color: white;
  }
  #left{
    float: left;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  #download{
    float: left;
    margin-left: 28%;
    font-size:0.9rem;
    margin-top:0.5rem;
  }
  #andframe{
    background-color:#3190e8;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom:0.5rem;
    padding-top: 0.2rem;
  }
#frame{
  border-radius: 0.2rem;
  background-color: white;
  padding-top: 0.4rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
  #leftasd{
    float: left;
  }
  #ingegral{
    float: right;
    text-decoration: none;
    color: deepskyblue;
  }
  p>span{
    font-size: 1.5rem;
    padding-right: 0.5rem;
  }
  #expain{
    width: 100%;
    font-size: 0.76rem;
    color: white;
    background-color: orangered;
    padding: 0.45rem 0;
    border: 0;
    border-radius: 0.3rem;
    margin-bottom: 0.45rem;
  }
  #fons{
    margin: 0.7rem;
    font-size: 0.58rem;
    color: rgba(0,0,0,0.65);
  }
  #bigp{
    font-size: 0.79rem;
    padding: 0.25rem 0;
  }
  #dianji{
    width: 77%;
    background-color: white;
    position: absolute;
    top: 38%;
    left: 12%;
    text-align: center;
    border-radius: 0.5rem;
    /*display: none;*/
    font-size: 0;
  }
  #p1{
    border: 0.12rem solid orangered;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    font-size: 2rem;
    margin-top: 1rem ;
    margin-bottom: 1rem;
    margin-left: 45%;
    color: orange;
  }
  #p2{
    font-size: 0.76rem;
  }
  #p3{
    font-size: 1rem;
    background-color: lightgreen;
    border-radius: 0 0 0.5rem 0.5rem;
    color: white;
    /*padding: 0.3rem 0;*/
    padding-top: 0.3rem;
    margin-bottom:0;
  }
 #sp1{
     background-color: deepskyblue;
     border-radius: 50%;
   color: white;
   padding: 0 0.2rem;
   margin-right: 0.15rem;
   }
</style>
