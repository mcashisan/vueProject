<template>
  <div id="title">
    <div id="and">
      <div id="left" @click="JumpToThePage">
        <
      </div>
      <div id="download">我的余额</div>
    </div>
    <div id="andframe">
      <div id="frame">
        <div>
          <div id="leftasd">
            <p>当前余额</p>
            <p><span>0.00</span>元</p>
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
      methods:{
        //页面跳转。跳到Mine页面
        JumpToThePage(){
          this.$router.push({path:"/Jumpto"});
        }
      }
    }
</script>

<style scoped>
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
    padding: 1rem;
  }
  #frame{
    border-radius: 5%;
    background-color: white;
    font-size: 0.8rem;
    padding: 1rem;
  }
  #leftasd{
    float: left;
  }
  #ingegral{
    float: right;
    text-decoration: none;
    color: blue;
  }
  p span{
    font-size: 1.5rem;
    padding-right: 0.5rem;
  }
  #expain{
    width: 100%;
    font-size: 1rem;
    color: white;
    background-color: #999;
    padding: 0.5rem 0;
    border: 0;
    border-radius: 0.3rem;
  }
  #fons{
    margin: 1rem;
    font-size: 0.8rem;
  }
  #bigp{
    font-size: 1rem;
    padding-top: 0.2rem;
  }
  p{
    padding-bottom: 1rem ;
  }
  #sp1{
    background-color: deepskyblue;
    border-radius: 50%;
    color: white;
    padding: 0 0.2rem;
    margin-right: 0.15rem;
  }
</style>
