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
        <router-link id="ingegral" :to="{path:'/linkpath' }">积分说明</router-link>
      </div>
      <div style="clear: both;"></div>
      <button id="expain" @click="expaining">积分兑换</button>
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
      <p id="p3">确认</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Integral",
      data(){
        return {
          money:0
        }
      },
      methods:{
        //页面跳转。跳到Mine页面
        JumpToThePage(){
          this.$router.push({path:"/Server"});
        },
        // expaining(){
        //   if (this.money<1){
        //     console.log("错错错是它的错");
        //
        //   }
        // }
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
    height: 3.5rem;
    background-color:  #3190e8;
    padding-left: 1rem;
    color: white;
  }
  #left{
    float: left;
    font-size: 3rem;
  }
  #download{
    float: left;
    margin-left: 36%;
    font-size:1.5rem;
    margin-top: 1rem;
  }
  #andframe{
    background-color:#3190e8;
    padding: 1rem;
  }
#frame{
  border-radius: 5%;
  background-color: white;
  font-size: 1rem;
  padding: 1rem;
}
  #leftasd{
    float: left;
  }
  #ingegral{
    float: right;
    text-decoration: none;
  }
  p span{
    font-size: 2rem;
    padding-right: 0.5rem;
  }
  #expain{
    width: 100%;
    font-size: 1.5rem;
    color: white;
    background-color: orangered;
    padding: 0.5rem 0;
    border: 0;
    border-radius: 0.3rem;
    margin-top: 1rem;
  }
  #fons{
    margin: 1rem;
    font-size: 1rem;
  }
  #bigp{
    font-size: 1.5rem;
    padding: 1rem 0;
  }
  p{
    padding-bottom: 1rem ;
  }
  #dianji{
    width: 70%;
    background-color: white;
    position: absolute;
    top: 43%;
    margin-left:3rem;
    text-align: center;
    border-radius: 0.5rem;
  }
  #p1{
    border: 1px solid orangered;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    padding: 0;
    font-size: 2rem;
    margin: 1rem  0 1rem 7rem;
    color: orangered;
  }
  #p2{
    font-size: 1.3rem;
  }
  #p3{
    font-size: 2rem;
    background-color: lightgreen;
    border-radius: 0 0 0.5rem 0.5rem;
  }
</style>
