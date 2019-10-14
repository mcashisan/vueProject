<template>
  <div id="title">
    <div id="and">
      <div id="left">
        <router-link to="{}" style="text-decoration: none;color: white;font-size: 1rem;margin-top: 0.5rem;display: inline-block">
          <
        </router-link>
      </div>
      <div id="download">我的</div>
    </div>
    <div style="position: relative;background-color: #3190e8;font-size: 0;padding-top: 1rem;height: 4rem">
      <img src="./tx.jpeg" id="img1"/>
      <div id="andArr">
        <span id="enter">登录/注册</span><br>
        <span style="font-size: 0.7rem;color: white;"><img src="../img/0.png" style="width: 1rem;height:1rem;
"/>暂无绑定手机号</span>
      </div>
      <div id="jt">></div>
  </div>
  <div id="monery">
    <p @click="mymoney">
      <span><span id="big1">0.00</span>元</span>
      <br>
      <span>我的余额</span>
    </p>
    <p style="border-left: 1px solid rgba(0,0,0,0.06); border-right: 1px solid rgba(0,0,0,0.06);" @click="Mydiscounts">
      <span><span id="big2">0</span>个</span>
      <br>
      <span>我的优惠</span>
    </p>
    <p id="p3" @click="shopIntegral">
      <span><span id="big3">0</span>分</span>
      <br>
      <span>我的积分</span>
    </p>
  </div>
    <div id="doter">
      <p @click="myindent"><img src="../img/1.png"style="width: 1rem;height:1rem;
"/>&ensp;我的订单<span>></span></p>
      <p><img src="../img/2.png" style="width: 1rem;height:1rem;
" @click="mycallshop"/>&ensp;积分商城<span>></span></p>
      <p><img src="../img/3.png"style="width: 1rem;height:1rem;
"/>&ensp;饿了么会员卡<span>></span></p>
    </div>
    <div id="saas">
      <p @click="ServiceCenter"><img src="../img/4.png" style="width: 1rem;height:1rem;
"/>&ensp;服务中心<span>></span></p>
      <p @click="readyAnd"><img src="../img/5.png" style="width: 1rem;height:1rem;
"/>&ensp;下载饿了么APP<router-link :to="{}"><span>></span></router-link> </p>
    </div>
  </div>
</template>
<script>
    export default {
        name: "Mine",
      methods:{
          //服务中心的路由
        ServiceCenter(){
          this.$router.push({path:"/ServeAdd"})
        },
        //积分商城的路由
        shopIntegral(){
          this.$router.push({path:"/integral"});
        },
        //余额
        mymoney(){
          this.$router.push({path:"/myname"})
        },
        //订单
        myindent(){
          this.$router.push({path:"/myindext"})
        },
        //下载饿了么APP
        readyAnd(){
          this.$router.push({path:'/redd'})
        },
        //我的优惠
        Mydiscounts(){
          this.$router.push({path:"/discounte"})
        },
        //积分商城
        mycallshop(){
          this.$router.push({path:"/mycallasd"})
        }
      }
    }
</script>

<style scoped>
  #title{
    background-color: rgba(0,0,0,0.3);
  }
  #lowd{
    background-color: white;
    text-align: center;
  }
  #and{
    height: 2rem;
    background-color:  #3190e8;
    padding-left: 1rem;
    color: white;
    font-size: 0;
  }
  #left{
    float: left;
    font-size: 1rem;
  }
  #download{
    float: left;
    margin-left: 36%;
    font-size:1rem;
    margin-top: 0.6rem;
  }
  #img1{
    /*width: 3rem;*/
    height: 2.5rem;
    border-radius: 50%;
    float: left;
    margin-left: 1rem;
  }
  #andArr{
    float: left;
    margin-left: 0.5rem;
    color: white;
  }
  #enter{
    font-size: 1rem;

  }
#jt{
  font-size:1rem;
  color: white;
  position: absolute;
  right: 0.5rem;
  margin: 0;
  top: 1rem;
}
#monery{
  background-color: white;
  height: 5rem;
}
 #monery p{
    float: left;
    padding: 1.1rem;
    text-align: center;
   font-size: 0.7rem;
  }
  #p3{
    border-right: 0;
  }
  #big1{
    font-size: 1.3rem;
    color: orange;
  }
  #big2{
    font-size: 1.3rem;
    color: orangered;
  }
  #big3{
    font-size:1.3rem;
    color: forestgreen;
  }
  #doter{
    background-color: white;
    margin-top: 0.5rem;
  }
  #doter p{
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0,0,0,0.03);
    padding: 0.5rem;
    position: relative;
  }
  #doter span{
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    /*top: 0.5rem;*/
  }
  #saas{
    background-color: white;
    margin-top: 0.5rem;
    /*height: 6rem;*/
  }
  #saas p{
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0,0,0,0.03);
    padding: 0.5rem;
    position: relative;
  }
  #saas span{
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    /*top: 1rem;*/
  }
</style>
