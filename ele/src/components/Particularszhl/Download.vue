<template>
    <div id="title" style="background-color: white;position: relative">
        <!--导航条-->
      <div id="left">
        <!--导航条-->
        <nav id="headers">
          <div class="headers_msg">
            <div class="header_left">
              <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="JumpToThePage"></i>
            </div>
            <div class="header_con">订单列表</div>
            <div class="header_left"></div>
          </div>
        </nav>
    </div>
      <div id="lowd">
        <img src="./down.png"/>
        <p id="p1">下载饿了么APP</p>
        <div  id="btn" @click="downloadd"  class="btn btn-success">下载</div>
      </div>
      <transition name="bounce">
        <div id="popover" v-if="ShowArr">
          <div id="pop" style="text-align: center">
            <img src="../img/tan.png"style="width: 3rem;height: 3rem;margin-bottom: 0.5rem"/>
            <!--<span id="garden">!</span>-->
            <p>IOS用户请前往AppStore下载</p>
            <div id="btnDiv" @click="sureblack">确认</div>
          </div>
        </div>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "Download",
      data(){
          return{
        ShowArr:false,
          }
      },
      methods:{
        JumpToThePage(){
          this.$router.push({path:"/footmine"});
        },
        //点击弹框
        downloadd(){
this.ShowArr=!this.ShowArr;
        },
        //点击消失
        sureblack(){
          this.ShowArr=!this.ShowArr;
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

#lowd{
  text-align: center;
}
  #p1{
    font-size: 0.75rem;
    margin-top: 0.5rem;
  }
#btn{
  /*background-color: springgreen;*/
  font-size: 1rem;
  width: 95%;
  text-align: center;
  display: inline-block;
  border-radius: 0.3rem;
}
#popover{
  background-color: white;
  width: 80%;
  position: absolute;
  left: 9%;
  top: 64%;
  text-align: center;

}
img{
  width: 7.5rem;
  height: 7.5rem;
  margin-top: 1rem;
}
#garden{
  width: 2.5rem;
  height: 2.5rem;
  border: 0.3rem solid orangered;
  border-radius: 50%;
  display: inline-block;
  font-size: 1.79rem;
  text-align: center;
  color: orangered;
}
  #btnDiv{
    background-color:#4cd964;
    font-size: 1rem;
    color: white;
    width: 100%;
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
