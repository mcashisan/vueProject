<template>
  <div class="res">
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="goback">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">新增地址</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <div class="input1">
      <input type="text" placeholder="请填写你的名字">
      <router-link :to="{path:'/searchAdd'}">
      <input type="text" placeholder="小区/写字楼/学校等" v-model="inputV" style="color: black"></router-link>
      <input type="text" placeholder="请填写详细的送餐地址"  v-model="qwe">
      <input type="text" placeholder="请填写能够联系到您的手机号" v-model="qwe1">
      <input type="text" placeholder="备用联系电话（选填）">

    </div>

    <button class="btn" @click="btn1">确认修改</button>

  </div>
</template>

<script>
    export default {
        name: "AddAddress",
      data(){
          return{
            inputV:"",
            qwe:"",
            qwe1:""
          }
      },
      methods:{
        goback(){
          this.$router.go(-1)
        },
btn1(){
          this.$router.push({path:'/saveAddress',query:{int1:this.qwe,int2:this.qwe1}})
}

    },
      created(){
        this.inputV=this.$route.query.akl;
        console.log(this.$route.query)
      },

    }
</script>

<style scoped>
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

  a{
    color: white;
    font-size: .6rem;
  }

  .btn{
    width: 12rem;
    color: white;
    background-color: rgb(78,222,103);
    margin-left: 1.9rem;
    margin-top: 1rem;
  }
  .input1{
    background-color: white;
    margin-top: 1rem;
    padding: 0.3rem 0.8rem;
  }

  .res{
    background-color: gainsboro;
  }
  input{
    padding: 1.2rem;
    margin: 0.2rem 0;
    width: 100%;
    height: 1.5rem;
    border-radius: 0.3rem;
    border:0.03rem solid #ddd;
background-color: #f2f2f2;
  }

</style>
