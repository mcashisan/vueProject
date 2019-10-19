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
      <input type="text" placeholder="请填写你的名字" v-model="name1">
      <router-link :to="{path:'/searchAdd'}">
        <input type="text" placeholder="小区/写字楼/学校等" v-model="inputV" style="color: black"></router-link>
      <input type="text" placeholder="请填写详细的送餐地址"  v-model="qwe" @keyup="address">
      <div v-show="show1" class="yangshi">请输入详细的地址</div>
      <input type="text" placeholder="请填写能够联系到您的手机号" v-model="qwe1" @keyup="hjk">
      <div v-show="show" class="yangshi">手机号输入有误</div>
      <!--<van-cell-group>-->
      <!--<van-field-->
      <!--v-model="phone"-->
      <!--label="手机号"-->
      <!--placeholder="请输入手机号"-->
      <!--type="number"-->

      <!--/>-->
      <!--</van-cell-group>-->
      <input type="text" placeholder="备用联系电话（选填）" id="ti">
    </div>
    <button class="btn" @click="btn1">新增地址</button>
  </div>
</template>

<script>
  export default {
    name: "AddAddress",
    data(){
      return{
        inputV:"",
        qwe:"",
        qwe1:"",
        //用户名
        user:"",
        usera:"",
        show:false,
        show1:false,
        name1:""
        //  f
      }
    },
    methods:{
      goback(){
        this.$router.go(-1)
      },
      btn1(){
        this.$router.push({path:'/saveAddress',query:{int1:this.qwe,int2:this.qwe1}});
        let ti=document.getElementById("ti").value;
        if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(ti))){
          alert("错了");
          console.log(ti);
        }else {
          this.usera=as;
          console.log(this.usera);
        }
        // localStorage.setItem("phone",)
      },
      hjk(){
        let phone = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/
        console.log(this.qwe1)
        if (phone.test(this.qwe1)){
          console.log("输入正确")
          this.show=false
        }
        else{
          console.log("输入错误")
          // alert("错误")
          this.show=true
        }
      },
      address(){
        let address1 = /[\u4e00-\u9fa5]{2,6}/;
        if (address1.test(this.qwe)) {
          console.log("成功了")
          this.show1=false
        }
        else {
          console.log("失败了")
          this.show1=true
        }
      }

    },
    created(){
      console.log(this.$route.query.akl);
      this.inputV = localStorage.getItem("mingzi" );
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
    width: 100%;
    color: white;
    background-color: rgb(78,222,103);
  }
  .input1{
    background-color: white;
    /*padding-top: 1rem;*/
    /*padding: 0.3rem 0.4rem;*/
    padding: 0.6rem 0.4rem 0.4rem 0.4rem ;
  }

  .res{
    background-color: gainsboro;
  }
  input{
    padding: 0.35rem;
    margin: 0.2rem 0;
    width: 100%;
    height: 1.5rem;
    border-radius: 0.15rem;
    border:0.03rem solid #ddd;
    background-color: #f2f2f2;
  }
  .yangshi{
    font-size: 0.3rem;
    color: red;
  }
</style>
