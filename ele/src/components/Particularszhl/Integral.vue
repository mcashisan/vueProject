<template>
  <div id="title">
    <div>
    <div id="and">
      <div id="left" @click="JumpToThePage">
        <
      </div>
      <div id="download">我的积分</div>
    </div>
    <div id="andframe">
    <div id="frame">
      <div>
        <div id="leftasd">
          <p>当前积分</p>
          <p><span>{{money}}</span>分</p>
        </div>
        <router-link id="ingegral" :to="{path:'/linkpath',query:{}}"><span id="sp1">?</span>积分说明</router-link>
      </div>
      <div style="clear: both;"></div>
      <button id="expain" v-show="!zj">积分兑换</button>
    </div>
  </div>
  <div id="fons">最近30天积分记录</div>
    <div style="width: 100%; text-align: center;margin-top: 2rem">
    <div id="dayf">
      <img src="./day.png"/></div>
    <p id="bigp">最近30天无积分记录</p>
      <p style="padding-bottom: 1rem">快去下单赚取大量积分吧</p>
  </div>
  </div>

    <div id="dianji">
      <p id="p1">!</p>
      <p id="p2">快去下单赚取大量积分吧</p>
      <p id="p3" v-show="zj">确认</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Integral",
      data(){
        return {
          money:0,
          zj:false,
          jf:[]
        }
      },
      methods:{
        //页面跳转。跳到Mine页面
        JumpToThePage(){
          this.$router.push({path:"/Jumpto"});
        },

      }
    }
</script>

<style scoped>
  html,body{
    background-color: rgba(0,0,0,0.04);
  }
  #title{
    position: relative;
  }
  #and{
    height: 2rem;
    background-color:  #3190e8;
    padding-left: 1rem;
    color: white;
  }
  #left{
    float: left;
    font-size: 1.5rem;
    margin-top: 0.3rem;
  }
  #download{
    float: left;
    margin-left: 28%;
    font-size:1rem;
    margin-top:0.5rem;
  }
  #andframe{
    background-color:#3190e8;
    padding: 1rem;
  }
#frame{
  border-radius: 5%;
  background-color: white;
  font-size: 0.7rem;
  /*padding: 1rem;*/
  /*padding: 0.5rem 1rem 0.5rem 1rem;*/
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
}
  #leftasd{
    float: left;
  }
  #ingegral{
    float: right;
    text-decoration: none;
    color: deepskyblue;
  }
  p span{
    font-size: 1rem;
    padding-right: 0.5rem;
  }
  #expain{
    width: 100%;
    font-size: 1rem;
    color: white;
    background-color: orangered;
    padding: 0.5rem 0;
    border: 0;
    border-radius: 0.3rem;
    /*margin-top: 1rem;*/
  }
  #fons{
    margin: 0.7rem;
    font-size: 0.5rem;
  }
  #bigp{
    font-size: 1rem;
    padding: 0.5rem 0;
  }
  p{
    padding-bottom: 0.5rem ;
  }
  #dianji{
    width: 86%;
    background-color: white;
    position: absolute;
    top: 43%;
    margin-left:1rem;
    text-align: center;
    border-radius: 0.5rem;
    display: none;
  }
  #p1{
    border: 1px solid orangered;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-size: 1rem;
    margin-top: 0.5rem ;
    margin-bottom: 0.5rem;
    margin-left: 45%;
    color: orangered;
  }
  #p2{
    font-size: 0.68rem;
  }
  #p3{
    font-size: 1rem;
    background-color: lightgreen;
    border-radius: 0 0 0.5rem 0.5rem;
  }
 #sp1{
     background-color: deepskyblue;
     border-radius: 50%;
   color: white;
   padding: 0 0.2rem;
   margin-right: 0.15rem;
   }
</style>
