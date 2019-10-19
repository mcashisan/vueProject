<template>
  <div id="title">
    <div>
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goT">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">我的</div>
          <div class="header_left"></div>
        </div>
      </nav>
    </div>
    <div
      style="position: relative;background-color: #3190e8;font-size: 0;height: 3.5rem;padding-top: 0.5rem;padding-bottom: 0.5rem">
      <img src="./tx.jpeg" id="img1"/>
      <div id="andArr">
        <span class="enter" @click="quit_login">{{userName}}</span><br>
        <span style="font-size: 0.7rem;color: white;"><img src="../img/0.png" style="width: 1rem;height:1rem;
"/>暂无绑定手机号</span>
      </div>
      <div id="jt" @click="quit_login">
        <i class="iconfont icon-jiantou-copy" style="font-size: 1rem;font-weight: bold;"></i>
      </div>
    </div>
    <div id="monery">
      <p @click="mymoney">
        <span><span id="big1">{{myuan}}</span>元</span>
        <br>
        <span>我的余额</span>
      </p>
      <p style="border-left: 1px solid rgba(0,0,0,0.06); border-right: 1px solid rgba(0,0,0,0.06);"
         @click="Mydiscounts">
        <span><span id="big2">{{youhui}}</span>个</span>
        <br>
        <span>我的优惠</span>
      </p>
      <p id="p3" @click="shopIntegral">
        <span><span id="big3">{{myjf}}</span>分</span>
        <br>
        <span>我的积分</span>
      </p>
    </div>
    <div id="doter">
      <p @click="myindent">
        <img src="../img/1.png" style="width: 1rem;height:1rem;"/>
        &ensp;我的订单
        <span>
        <i class="iconfont icon-jiantou-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </span>
      </p>
      <p @click="mycallshop">
        <img src="../img/2.png" style="width: 1rem;height:1rem;" @click="shopIntegral"/>
        &ensp;积分商城
        <span>
          <i class="iconfont icon-jiantou-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </span>
      </p>
      <p>
        <img src="../img/3.png" style="width: 1rem;height:1rem;"/>
        &ensp;饿了么会员卡
        <span @click="dianji">
          <i class="iconfont icon-jiantou-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </span>
      </p>
    </div>
    <div id="saas">
      <p @click="ServiceCenter"><img src="../img/4.png" style="width: 1rem;height:1rem;
"/>&ensp;服务中心<span><i class="iconfont icon-jiantou-copy" style="font-size: 1rem;font-weight: bold;"></i></span></p>
      <p @click="readyAnd"><img src="../img/5.png" style="width: 1rem;height:1rem;
"/>&ensp;下载饿了么APP
        <router-link :to="{}"><span><i class="iconfont icon-jiantou-copy"
                                       style="font-size: 1rem;font-weight: bold;"></i></span></router-link>
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from "../../components/Footer"

  export default {
    name: "Mine",
    data() {
      return {
        userName: "注册/登录",
        newName: "",
        myjf:0,
        myuan:0.00,
        youhui:0,
        ShowNat:true,
        ShowDown:false
      }
    },
    components: {
      Footer
    },
    methods: {
      //返回上一级
      goT() {
        this.$router.push({path:"/msite"});
      },
      //服务中心的路由
      ServiceCenter() {
        this.$router.push({path: "/ServeAdd"});
      },
      //积分商城的路由
      shopIntegral() {
        this.$router.push({path: "/integral"});
      },
      //余额
      mymoney() {
        this.$router.push({path: "/myname"});
      },
      //订单
      myindent() {
        this.$router.push({path: "/order"});
      },
      //下载饿了么APP
      readyAnd() {
        this.$router.push({path: '/redd'});
      },
      //我的优惠
      Mydiscounts() {
        this.$router.push({
          name:"discounte",
          params:{
            asdb:this.youhui
          }
        }
        );
      },
      // 获取账户信息
      getMessage() {
        this.myHttp.get("/v1/user", (res) => {
          console.log(res);
          if (res.data.username) {
            this.userName = res.data.username;
            this.newName = res.data.username;
            localStorage.setItem("name", res.data.username);
            this.youhui=3;
          } else {
            this.userName = "登录/注册";
            this.youhui=0;
          }
        }, (err) => {
          console.log(err);
        });
      },
      // 从个人信息点击跳转处理account
      quit_login() {
        if (this.userName == this.newName) {
          this.$router.push({path: "/account"});
        } else {
          this.$router.push({path: "/login"});
        }
      },
      //积分商城
      mycallshop() {
        this.$router.push({path: "/mycalls"});
      },
      //  会员中心
      dianji() {
        this.$router.push({path: "/vipcard"})
      },
    },
    created() {
      this.getMessage();

    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_f3awotv784h.css";
  /*导航条*/
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }

  .headers_msg {
    display: flex;
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
  #img1 {
    /*width: 3rem;*/
    height: 2.5rem;
    border-radius: 50%;
    float: left;
    margin-left: 1rem;
  }

  #andArr {
    float: left;
    margin-left: 0.5rem;
    color: white;
  }

  .enter {
    font-size: 0.8rem;
  }

  #jt {
    font-size: 1rem;
    color: white;
    position: absolute;
    right: 0.5rem;
    margin: 0;
    top: 0.5rem;
  }

  #monery {
    background-color: white;
    height: 3.6rem;
  }

  #monery p {
    float: left;
    width: 33%;
    padding: 0.3rem;
    text-align: center;
    font-size: 0.7rem;
  }

  #p3 {
    border-right: 0;
  }

  #big1 {
    font-size: 1.3rem;
    color: orange;
  }

  #big2 {
    font-size: 1.3rem;
    color: orangered;
  }

  #big3 {
    font-size: 1.3rem;
    color: forestgreen;
  }

  #doter {
    background-color: white;
    margin-top: 0.5rem;
  }

  #doter p {
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    padding: 0.5rem;
    position: relative;
  }

  #doter span {
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    /*top: 0.5rem;*/
  }

  #saas {
    background-color: white;
    margin-top: 0.5rem;
    /*height: 6rem;*/
  }

  #saas p {
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.03);
    padding: 0.5rem;
    position: relative;
  }

  #saas span {
    position: absolute;
    right: 0;
    margin-right: 0.5rem;
    /*top: 1rem;*/
  }

</style>
