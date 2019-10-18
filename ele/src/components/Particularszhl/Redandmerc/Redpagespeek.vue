<template>
  <div id="title" style="background-color: white">
    <!--导航条-->
    <div>
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="redpagestab"></i>
          </div>
          <div class="header_con">商家代金券说明</div>
          <div class="header_left"></div>
        </div>
      </nav>
    </div>
    <p v-for="(v,ina) in c" :key="ina">
      {{v}}
    </p>
  </div>
</template>

<script>
    export default {
        name: "Redpagespeek",
      data(){
          return{
            //接收数据
            a:"",
            //一次切割
            b:"",
            //二次切割
            c:[],
            d:[],
            obj:{name:""}
          }
      },
      methods:{
        redpagestab(){
          this.$router.push({path:"/discounte"})
        }
      },
      created(){
          this.myHttp.get("/v3/profile/explain",(res)=>{
            this.a=res.data.couponContent;
            this.b=this.a.split("###");
            for (let i=0;i<this.b.length;i++){
              console.log(this.b[i]);
              this.d = this.b[i].split("*");
              for (let j = 0; j < this.d.length; j++) {
                this.c.push(this.d[j]);
              }
              // let q=this.b[1].split("?");
              // let w=this
            }
          })
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
  p{
    margin-top: 0.5rem;
    margin-left: 0.6rem;
  }
</style>
