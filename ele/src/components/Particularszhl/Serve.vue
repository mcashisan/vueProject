<template>
  <div id="title">
    <div>
      <div id="and">
        <div id="left" @click="JumpToThePage">
          <
        </div>
        <div id="download">服务中心</div>
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
          // console.log(this.apple);
        }
      }, (err) => {
        console.log(err);
      })
    },
    methods: {
      //页面跳转。跳到Mine页面
      JumpToThePage() {
        // console.log("我要跳转");
        this.$router.push({path: "/Server"});
      }
    }
  }
</script>

<style scoped>
  #title {
    background-color: white;
    position: relative;
  }

  #lowd {
    background-color: white;
    text-align: center;
  }

  #and {
    height: 3.5rem;
    background-color: #3190e8;
    padding-left: 1rem;
    color: white;
  }

  #left {
    float: left;
    font-size: 1.7rem;
    margin-top: 0.5rem;
  }

  #download {
    float: left;
    margin-left: 30%;
    font-size: 1rem;
    margin-top: 1rem;
  }

  #imgP {
    float: left;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    border-right: 1px solid rgba(0, 0, 0, 0.06);
    font-size: 1rem;
    padding-right: 1rem;
    display: block;
    width: 50%;
  }

  #phoneP {
    float: left;
    width: 50%;
    font-size: 1rem;
    padding-bottom: 1.5rem;
    padding-top: 1.5rem;
    /*padding-left: 2rem;*/
  }
#lino{
  width: 100%;
  text-align: center;
}
  img {
    width: 3rem;
    height: 3rem;
  }

  #question {
    padding-top: 1rem;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    font-size: 0.8rem;
  }

  #hot {
    list-style: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    padding-left: 1rem;
    padding-bottom: 1rem;
  }

  li {
    padding-left: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    margin-top: 1rem;
    padding-bottom: 1rem;
    font-size: 0.8rem;
  }
</style>
