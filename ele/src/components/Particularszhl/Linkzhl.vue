<template>
    <div id="title">
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"@click="JumpToThePage"></i>
          </div>
          <div class="header_con">兑换说明</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <p style="font-size: 0.76rem" v-for="(a,ind) in xing" :key="ind">{{a}}</p>
    </div>
</template>

<script>
    export default {
        name: "Linkzhl",
      data(){
        return {
          //接收红包说明的值
          dack:[],
          //以###截取
          daak:[],
          //循环遍历
          dbbk:[],
          //以*截取
          xing:{}
        }
      },
      created(){
        this.myHttp.get("/v3/profile/explain",((res)=>{
          this.dack=res.data.pointtextContent;
          this.daak=this.dack.split("###");
          for (let i=0;i<this.daak.length;i++){
            this.dbbk+=this.daak[i];
            this.xing=this.dbbk.split("*");
          }
        }))
      },
      methods:{
        JumpToThePage(){
          this.$router.push({path:"/integral"});
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
