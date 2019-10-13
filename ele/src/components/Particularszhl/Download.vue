<template>
    <div id="title">
      <div id="and">
      <div id="left">
        <router-link to="Download" style="color: white;display: inline-block;text-decoration: none">
          <
        </router-link>
      </div>
      <div id="download">下载</div>
    </div>
      <div id="lowd">
        <div>
        <img src="./down.png"/>
        <p id="p1">下载饿了么APP</p>
        </div>
        <div  id="btn" @click="downloadd">下载</div>
      </div>
    <div id="popover" v-show="ShowArr">
      <div id="pop">
        <span id="garden">!</span>
        <p>IOS用户请前往AppStore下载</p>
        <div id="btnDiv">确认</div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Download",
      data(){
          return{
        ShowArr:true
          }
      },
      methods:{
        downloadd(){
          return this.ShowArr;
        },
      }
    }
</script>

<style scoped>
#title{
  background-color: white;
  position: relative;
}
  #lowd{
    background-color: white;
    text-align: center;
  }{
  width: 100%;
  height: 100%;
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
  #p1{
    font-size: 2.5rem;
    margin-top: 0.5rem;
  }
#btn{
  background-color: springgreen;
  font-size: 3rem;
  margin-top: 2rem;
  width: 95%;
  text-align: center;
  display: inline-block;
  border-radius: 5%;
}
#popover{
  background-color: white;
  width: 15rem;
  height: 14rem;
  position: absolute;
  left: 20%;
  top: 70%;
  text-align: center;
  display: none;
}
img{
  width: 10rem;
  height: 10rem;
  margin-top: 3rem;
  margin-right: 6rem;
}
#garden{
  width: 4rem;
  height: 4rem;
  border: 0.3rem solid red;
  border-radius: 50%;
  display: inline-block;
  font-size: 3rem;
  text-align: center;
}
  #btnDiv{
    background-color: springgreen;
    font-size: 3rem;
    width: 75%;
    text-align: center;
    display: inline-block;
    border-radius: 5%;
  }
</style>
