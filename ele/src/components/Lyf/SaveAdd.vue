<template>
  <div id="app">
    <!--头-->
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="goback"></i>
        </div>
        <div class="header_con">搜索</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <div class="row">
      <span>联系人</span>
      <input type="text" placeholder="你的名字" v-model="name">
    </div>
    <div class="row">
      <van-radio-group v-model="radio">
        <van-radio name="1" checked-color="#07c160" @click="sexS(sexM[0])">{{sexM[0]}}</van-radio>
        <van-radio name="2" checked-color="#07c160" @click="sexS(sexM[1])">{{sexM[1]}}</van-radio>
      </van-radio-group>
    </div>
    <div class="row">
      <span>联系电话</span>
      <input type="text" placeholder="你的手机号" v-model="phone">
    </div>
    <div class="row">
      <span>送餐地址</span>
      <router-link :to="{path:'/searchAdd'}">
      <input type="text" placeholder="小区/写字楼/学校等" v-model="local">
      </router-link>
    </div>
    <div class="row">
      <input type="text" placeholder="详细地址(如门牌号等)" v-model="localS">
    </div>
    <div class="row">
      <span>标签</span>
      <input type="text" placeholder="无/家/学校/公司" v-model="local">
    </div>
    <van-button type="primary" class="login2" @click="yes1">确认</van-button>
  </div>
</template>

<script>
  export default {
    name: "dz",
    data(){
      return{
        radio: '1',
        name:'',
        sexM:['先生','女士'],
        sex:'先生',
        phone:'',
        local:'',
        localS:'',
      }
    },
    methods:{
      toF() {
        this.$router.push({path: '/xjdz'});
      },
      sexS(i){
        this.sex = i;
        console.log(this.sex);
      },
      yes1(){
        localStorage.setItem("shoujihao",this.phone)
        localStorage.setItem("name",this.name)
        localStorage.setItem("xingbie",this.sex)
        this.$router.go(-1)
      },
      goback(){
        this.$router.go(-1)
      }
    },
    created(){
      this.local=localStorage.getItem("dizhi")
    },

  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
  .row{
    height: 2.5rem;
    background: white;
    padding: 0.7rem;
    position: relative;
  }
  .row span{
    font-size: 0.8rem;
    color: #666;
    padding-left: .5rem;
   margin-top: .5rem;
  }
  .row input{
    position: absolute;
    top: 0.7rem;
    right: 2rem;
    font-size: 0.8rem;
    border: none;
    color: #999;

  }
  >>>.van-radio-group{
    position: absolute;
    top: 0.5rem;
    right: 3rem;
  }
  >>>.van-radio{
    display: inline-block;
    width: 4rem;
  }
  >>>.van-radio__icon{
    display: inline-block;
  }
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
  #app{
    overflow: hidden
  }
  .login2 {
    width: 14rem;
    border-radius: .5rem;
    font-size: .9rem;
    font-weight: bold;
    background-color:#4CD964  ;
    margin-top: 1rem;
    margin-left: 1rem;
  }
</style>
