<template>
    <div class="saveorder">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">选择地址</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <div class="mid1" @click="dianji">
        <span>{{name}}</span>
        <span>{{sex}}</span>
        <span>{{phone}}</span>
        <p>{{address}}</p>
      </div>
      <div class="bottom">
        <i class="iconfont icon-icon02"></i>
        <router-link :to="{path:'/saveadd'}">
       <span>点击添加新地址</span>
        </router-link>
      </div>
    </div>
</template>

<script>
    export default {
        name: "SaveOrder",
      data(){
          return{
            name:"",
            sex:"",
            address:"",
            phone:""
          }
      },
      methods:{
          goback(){
          this.$router.go(-1)
        },
      dianji(){
            this.$router.push("/ordercon")
      }
      },
      created(){
         this.address= localStorage.getItem("dizhi")
        this.name=localStorage.getItem("name")
        this.sex=localStorage.getItem("xingbie")
        this.phone =localStorage.getItem("shoujihao")
      },
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1454015_tyi4k5a502d.css";
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
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
  .bottom{
    position: fixed;
    bottom: 0;
    color: #3190e8;
    font-size: 0.8rem;
    text-align: center;
    padding-left: 35%;
  }
  .mid1{
    margin-top: 1rem;
    margin-left: 1rem;
    font-size: .7rem;
  }
  .mid1>span:nth-child(1){
    font-size: 1rem;
    font-weight: bold;
  }
</style>
