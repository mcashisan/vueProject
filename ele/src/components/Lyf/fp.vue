<template>
    <div id="title">
      <!--导航条-->
      <div id="left">
        <nav id="headers">
          <div class="headers_msg">
            <div class="header_left">
              <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="JumpToThePage"></i>
            </div>
            <div class="header_con">选择发票抬头</div>
            <div class="header_left"></div>
          </div>
        </nav>
      </div>
      <div id="notnot" @click="nonononon">
        <p style="float:left;">不需要开发票</p>
        <p style="float:right; margin-right: 0.5rem">
          <i class="iconfont icon-duihao1-copy" v-if="ShuwTwo"></i>
          <i class="iconfont icon-duihao1" style="color: limegreen" v-if="!ShuwTwo"></i>
        </p>
        <div style="clear: both;"></div>
      </div>
      <div @click="sureandqueding" id="aaa">确定</div>
    </div>
</template>

<script>
    export default {
        name: "fp",
      data(){
          return{
            ShuwTwo:false,
            chine:"不需要发票"
          }
      },
      methods:{
        JumpToThePage(){
          this.$router.go(-1);
        },
        nonononon(){
         if (this.ShuwTwo){
           this.chine="需要发票"
           this.ShuwTwo=false;
         } else {
           this.chine="不需要发票"
           this.ShuwTwo=true;
         }
        },
        sureandqueding(){
          this.$router.push({
            name:"ordercon",
            params:{
              cda:this.chine
            }
          })
        }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_ck8cx7fx0wk.css";
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
  #notnot{
    width: 100%;
    background-color: white;
    padding: 0.5rem;
    margin-top: 0.5rem;
  }
  p{
    float: left;
    padding-top: 0.2rem;
  }
  img{
    width: 1rem;
    float: right;
  }
  #aaa{
    width: 95%;
    margin: 0.5rem;
    text-align: center;
    background-color: lightgreen;
    padding: 0.3rem 0;
    color: white;
    border-radius: 0.3rem;
  }
</style>
