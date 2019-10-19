<template>
  <div class="ordercon">
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="goback">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">确认订单</div>
        <div class="header_right">
          <i class="iconfont icon-ren" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
      </div>
    </nav>
    <div class="head">
 <div class="add12">
   <div class="left1" @click="add1">
   <van-icon name="location-o" />
   <span>请添加地址</span>
     <van-icon name="arrow" class="right2" />
   </div>
 </div>
      <div class="van-hairline--bottom"></div>
    </div>
    <div class="mid1">
      <div class="mid_left">
        <p>送达时间</p>
      </div>
      <div class="mid_right">
        <p>尽快送达|预计03:57</p>
        <p>蜂鸟专送</p>
      </div>
    </div>
    <van-cell title="支付方式" is-link value="在线支付" @click="app1"/>
    <van-action-sheet v-model="show" title="支付方式" :round="false">
      <div class="nochange">
        <span>货到付款（商家不支持货到付款）</span>
        <van-switch
          v-model="checked"
          disabled
        />

      </div>
      <div class="canchange">
        <span>在线支付</span>
        <van-switch
          v-model="checked1"
          disabled
        />
      </div>
    </van-action-sheet>
    <van-cell title="红包" value="暂时只在饿了么中支持" class="kkk"/>
    <!--订单中的店铺以及需要点的东西-->
    <div class="mid2">
      <div class="title_message">
        <img :src="'//elm.cangdu.org/img/'+headerImg" alt=""style="width:1.5rem;">
        <span>{{headerTitle}}</span>
      </div>
      <ul class="mag1">
        <li v-for="(v, index) in allD" :key="index">
          <div class="flexAll">
            <div>{{v.name}}</div>
            <div style="width: 3rem;" class="flexAll">
              <span style="color:orange;">x{{v.num}}</span>
              <span v-for="(v1, n) in v.specfoods" :key="index">￥{{v1.price}}</span>
            </div>
          </div>
        </li>
      </ul>
      <div class="flexAll flexMy">
        <p>餐盒</p>
        <p>￥998</p>
      </div>
      <div class="flexAll flexMy">
        <p>配送费</p>
        <p>￥{{num_price}}</p>
      </div>
      <div style="padding: 0.3rem 0.5rem;display:flex;justify-content:space-between;">
        <p>
          <span>订单￥{{all_price + 998}}</span>
        </p>
        <div style="color:orange;">
          <p>待支付</p>
          <p>￥{{all_price + 998}}</p>
        </div>
      </div>
    </div>
    <!--订单备注以及发票-->
    <ul class="remark_arr_list_ul">
      <li v-for="(v,i) in list" :key="i">
        <span  class="first last" v-for="(v1, i1) in v" :key="i1" :class="choose[i][0] === i1 ? {haha:true} : {haha:false}" @click="chooseT(i,i1)" >{{v1}}</span>
      </li>
    </ul>
      <ul style="margin-top: 0.3rem;width: 100%;background-color: white">
        <li style="border-bottom:1px solid rgba(0,0,0,0.06); width: 100%;" @click="dingdanbiezhu">
          <span style="float:left;">订单备注</span>
          <span style="float:right;margin-right: 0.6rem">
            <span>{{nammasd}}></span>
          </span>
          <div style="clear: both;"></div>
        </li>
        <li style="width: 100%;" @click="fapiaotaitou">
          <span style="float:left;">发票抬头</span>
          <span style="float:right;margin-right: 0.6rem">{{ad}}></span>
          <div style="clear: both;"></div>
        </li>
      </ul>
    <div class="bottom2">
      <div class="bottom2_left">
        待支付{{all_price + 998}}
      </div>
      <div class="bottom2_right" @click="xiadan">
        确认下单
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "OrderCon",
    data() {
      return {
        show: false,
        checked: false,
        checked1: true,
        headerImg: "",
        headerTitle: "",
        allD: [],
        num_price: "",
        all_price: 0,
        address:"",
        name:"",
        sex:"",
        phone:"",
        // title:"343"
        all:3,
        nammasd:"",
        ad:""
      }

    },
    methods: {
      goback() {
        this.$router.go(-1)
      },
      app1() {
        this.show = true
      },
      add1() {
        this.$router.push({path: '/saveorder'})
      },
      xiadan(){
        this.$router.push({path:"/paytime"})
      }
      // 获取订单信息
    },
    created() {
      // this.headerImg = this.$route.query.imgUrl;
      // this.headerTitle = this.$route.query.name;
      // this.allD = this.$route.query.dudu;
      // // console.log(this.allD);
      // let _this = this;
      // let num222 = 0;
      // this.allD.forEach(function (v, i) {
      //   console.log(v);
      //   num222 = v.num;
      //   v.specfoods.forEach(function (v1, n1) {
      //     _this.num_price = v1.packing_fee;
      //     console.log(v1.price);
      //     _this.all_price += v1.price*num222;
      //   })
      // });
      // this.Mynameiszhaohailing();

      if (this.$route.params.cas!=null){
        console.log(this.$route.params);
        this.nammasd=JSON.parse(this.$route.params.cas)+this.$route.params.cans;
        console.log(this.nammasd);
      }else {
        this.nammasd="口味偏重"
      }
      if (this.$route.params.cda!=null){
        this.ad=this.$route.params.cda;
        console.log(this.ad);
      } else {
        this.ad="不需要发票";
      }
    }
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
    display: flex;
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

  .head1 {
    padding: 0.7rem;
  }

  .head1 > icon {
    size: 2rem;

  }

  .van-cell__title {
    font-size: .8rem;
  }

  .van-icon-location-o {
    font-size: .9rem;
  }

  .mid1 {
    height: 4rem;
    background-color: white;
    border-left: .2rem solid #3190e8;
    margin-top: .4rem;
    overflow: hidden;
    margin-bottom: .4rem;
  }

  .mid_left {
    float: left;
    padding: 0.4rem;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    line-height: 3rem;
    margin-left: .4rem;
  }

  .mid_right {
    float: right;
    padding-top: 1rem;
  }

  .mid_right > p:nth-child(1) {
    color: #3190e8;
    font-size: .7rem;
    letter-spacing: .09rem;
    margin-right: 1rem;
  }

  .mid_right > p:nth-child(2) {

    font-size: .5rem;
    color: #fff;
    background-color: #3190e8;
    width: 2.4rem;
    margin-top: .5rem;
    text-align: center;
    border-radius: .12rem;
    padding: .1rem;
    margin-left: 4.7rem;
  }

  .van-action-sheet {
    height: 33%;
  }

  .nochange {
    font-size: .7rem;
    margin-top: .7rem;
    margin-bottom: .7rem;
    padding-left: .7rem;
  }

  .nochange > .van-switch {
    margin-left: 1rem;
  }

  .canchange {
    font-size: .7rem;
    padding-left: .7rem;
  }

  .canchange > .van-switch {
    margin-left: 8.8rem;
  }

  .van-action-sheet__header {
    font-size: 1rem;
    font-weight: bold;
  }

  .kkk > .van-cell__title {
    font-size: .6rem;
    color: #969799;
  }

  /*订单信息*/
  .mid2 {
    background: #fff;
  }

  .title_message {
    padding: 0.5rem;
    border-bottom: 0.01rem solid #e4e4e4;
  }

  .mag1 {
    padding: 0.3rem;
  }

  .flexAll {
    padding-top: 0.3rem;
    display:flex;
    justify-content:space-between;
  }

  .flexMy {
    padding: 0 0.3rem;
  }

  .bottom1 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .bottom2 {
    position: fixed;
    bottom: 0;
    height: 2rem;
  }

  .bottom2_left {
    width: 11.5rem;
    background-color: rgb(60, 60, 60);
    color: white;
    line-height: 2rem;
    padding-left: 1rem;
    font-size: .7rem;
    float: left;
    /*padding: 1rem;*/
  }

  .bottom2_right {
    width: 4.5rem;
    background-color: rgb(86, 209, 118);
    line-height: 2rem;
    font-size: .7rem;
    color: white;
    /*margin-left: 13.5rem;*/
    float: right;
    text-align: center;
  }
  .add12{
    height: 3rem;
    background: white;
    padding: 1rem;
    font-size: .8rem;
  }
  .right2{
    float: right;
    /*position: absolute;*/
    /*bottom: .6rem;*/
    /*margin-left: 1rem;*/
    margin-bottom: 1rem;

  }
  li{
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    padding-bottom: 0.5rem;
  }
</style>
