<template>
  <div id="title">
    <div>
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="JumpToThePage"><</i>
          </div>
          <div class="header_con">服务中心</div>
          <div class="header_left"></div>
        </div>
      </nav>
    </div>
      <div id="andlino">
        <div id="lino">
          <div id="imgP">
            <img src="http://img2.imgtn.bdimg.com/it/u=2703324896,679171440&fm=26&gp=0.jpg" alt="">
            <p>在线客服</p>
          </div>
          <div id="phoneP">
            <img src="http://img3.imgtn.bdimg.com/it/u=1766836225,1705170590&fm=26&gp=0.jpg" alt="">
            <p>在线客服</p>
          </div>
          <div id="enpty" style="clear: both"></div>
        </div>
      </div>
      <div id="question">
        <div id="hot">热门问题</div>
        <ul>
          <li v-for="(v,index) in bananer" :key="index"><span>{{v}}</span>
            <router-link :to="{path:'/ServeChild',query:{name:v,zhi:apple}}"style="float: right;margin-right: 1rem;text-decoration: none">{{head}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>

</template>

<script>
  export default {
    name: "Serve",
    data() {
      return {
        computer: [],
        apple: [],
        bananer: [],
        orange: [],
        head: ">"
      }
    },
    created() {
      // 发起网络请求
      this.myHttp.get("/v3/profile/explain", (res) => {
        this.computer = res.data;
        //空数组接收data的key
        let nameA = Object.keys(this.computer);
        //去除index
        nameA.splice(nameA.indexOf("index"), 1);
        for (let i = 0; i < nameA.length; i += 2) {
          this.bananer.push(this.computer[nameA[i + 1]]);
          this.apple = this.computer[nameA[i]];
          console.log(this.apple);
        }
      }, (err) => {
        console.log(err);
      })
    },
    methods: {
      //页面跳转。跳到Mine页面
      JumpToThePage() {
        // console.log("我要跳转");
        this.$router.push({path: "/footmine"});
      }
    }
  }
</script>

<style scoped>
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
  #title {
    background-color: white;
    position: relative;
  }

  #imgP {
    float: left;
    padding-bottom: 0.3rem;
    padding-top: 0.3rem;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    display: block;
    width: 50%;
  }

  #phoneP {
    float: left;
    width: 50%;
    padding-bottom: 0.3rem;
    padding-top: 0.3rem;
  }
#lino{
  width: 100%;
  text-align: center;
}
  img {
    width: 1.5rem;
    height: 1.5rem;
  }

  #question {
    padding-top: 0.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    font-size: 0.8rem;
  }

  #hot {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    padding-left: 1rem;
    padding-bottom: 0.5rem;
  }

  li {
    padding-left: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    margin-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.6rem;
  }
</style>
