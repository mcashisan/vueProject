<template>
  <div id="title" style="background-color: white">
    <!--导航条-->
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"@click="JumpToThePage"></i>
        </div>
        <div class="header_con">余额问题</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <div style="font-size: 0.76rem" >
      <p v-for="(i,index) in appl" :key="index">
      {{i}}
    </p>
  </div>
  </div>
</template>

<script>
    export default {
        name: "Moneyzhl",
      data(){
        return {
          jf:[],
          oranges:[],
          or:{},
          as:[],
          appl:[]
        }
      },
      created(){
        //发起网络请求
        this.myHttp.get("/v3/profile/explain",((res)=>{
          this.jf=res.data.balanceContent;
          this.oranges=this.jf.split("###");
          for(let v=1;v<this.oranges.length;v++){
          this.as+=this.oranges[v]
           this.appl=this.as.split("？");
          }
        }))
      },
      methods:{
        JumpToThePage(){
          this.$router.push({path:"/myname"});
        },
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
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
