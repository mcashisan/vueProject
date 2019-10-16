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
        <van-cell title="请添加一个收货地址"  size="large"  is-link icon="location-o" class="head1"
        @click="add1"/>
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
      <van-cell title="支付方式"  is-link value="在线支付"  @click="app1"/>
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
      <van-cell title="红包"   value="暂时只在饿了么中支持"  class="kkk"/>
      <!--订单中的店铺以及需要点的东西-->
      <div class="mid2">

      </div>
      <!--订单备注以及发票-->
      <div class="bottom1">
        <van-cell title="订单备注" value="口味偏好等" is-link to="ordernote" />
        <van-cell title="发票抬头" value="不需要开发票" is-link to="index" />
      </div>
      <div class="bottom2">
        <div class="bottom2_left">
          待支付{{}}
        </div>
        <div class="bottom2_right">
          确认下单
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "OrderCon",
      data(){
          return{
            show:false,
            checked:false,
            checked1:true
          }

      },
      methods:{
        goback() {
          this.$router.go(-1)
        },
app1(){
          this.show=true
},
        add1(){
          this.$router.push({path:'/saveorder'})
        },
    }}
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
  @import "//at.alicdn.com/t/font_1454015_aup6wytlw8l.css";
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
.head1{
  padding: 0.7rem;
}
  .head1>icon{
    size: 2rem;

  }
  .van-cell__title{
    font-size: .8rem;
  }
  .van-icon-location-o{
    font-size: .9rem;
  }
  .mid1{
    height:4rem ;
    background-color: white;
    border-left:.2rem  solid #3190e8;
    margin-top: .4rem;
    overflow: hidden;
    margin-bottom: .4rem;
  }
  .mid_left{
    float: left;
   padding: 0.4rem;
    font-size: 1rem;
    font-weight: bold;
    color: black;
    line-height:3rem ;
    margin-left: .4rem;
  }
  .mid_right{
    float: right;
    padding-top: 1rem;
  }
  .mid_right>p:nth-child(1){
    color:#3190e8 ;
    font-size: .7rem;
    letter-spacing:.09rem;
    margin-right: 1rem;
  }
  .mid_right>p:nth-child(2){

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
  .van-action-sheet{
    height: 33%;
  }
  .nochange{
    font-size: .7rem;
    margin-top: .7rem;
    margin-bottom: .7rem;
    padding-left: .7rem;
  }
  .nochange>.van-switch{
   margin-left: 1rem;
  }
  .canchange{
    font-size: .7rem;
    padding-left: .7rem;
  }
  .canchange>.van-switch{
    margin-left: 8.8rem;
  }
  .van-action-sheet__header{
    font-size: 1rem;
    font-weight: bold;
  }
  .kkk>.van-cell__title{
    font-size: .6rem;
    color: #969799;
  }
  .bottom1{
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .bottom2{
    position: fixed;
    bottom: 0;
    height: 2rem;
  }
  .bottom2_left{
    width: 11.5rem;
    background-color:rgb(60,60,60);
    color: white;
    line-height: 2rem;
    padding-left: 1rem;
    font-size: .7rem;
    float: left;
    /*padding: 1rem;*/
  }
  .bottom2_right{
    width: 4.5rem;
    background-color: rgb(86,209,118);
    line-height: 2rem;
    font-size: .7rem;
    color: white;
    /*margin-left: 13.5rem;*/
    float: right;
    text-align: center;
  }
</style>
