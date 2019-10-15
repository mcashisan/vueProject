<template>
    <div id="title" style="background-color: white">
        <!--导航条-->
      <div id="left">
        <!--导航条-->
        <nav id="headers">
          <div class="headers_msg">
            <div class="header_left">
              <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="JumpToThePage"><</i>
            </div>
            <div class="header_con">订单列表</div>
            <div class="header_left"></div>
          </div>
        </nav>
    </div>
      <div id="lowd">
        <img src="down.png"/>
        <p id="p1">下载饿了么APP</p>
        <div  id="btn" @click="downloadd"  class="btn btn-success">下载</div>
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
        JumpToThePage(){
          this.$router.push({path:"/Jumpto"});
        },
        downloadd(){

        }
      }
    }
</script>

<style scoped>
#lowd{
  text-align: center;
}
  #p1{
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
#btn{
  /*background-color: springgreen;*/
  font-size: 1.5rem;
  width: 95%;
  text-align: center;
  display: inline-block;
  border-radius: 0.3rem;
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
  width: 7.5rem;
  height: 7.5rem;
  margin-top: 1rem;
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

</style>
