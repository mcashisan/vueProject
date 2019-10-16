<template>
    <div class="vipcon">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">兑换会员</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <div class="head">
        <p>成功兑换后将关联到当前账号：{{}}</p>
      </div>
      <div class="mid1">
        <van-cell-group>
          <van-field v-model="value" placeholder="请输入10位卡号" />
          <van-field v-model="valuea" placeholder="请输入6位卡密" />
        </van-cell-group>
    </div>
      <div class="btn">
      <!--<van-button disabled  size="large" type="primary">禁用状态</van-button>-->
        <van-button  :disabled="disable"  type="primary" size="large" @click="zhangfan">确定</van-button>
      </div>
      <div class="tan" v-if="show">
        <img src="../img/tan.png" alt="">
        <p>无效的卡号</p>
        <van-button type="primary" size="large" @click="show=false">确定</van-button>
      </div>
      <div>{{watch}}</div>
    </div>
</template>

<script>
    export default {

      name: "VipCon",
      data(){
        return{
          value:"",
          valuea:"",
          disable:true,
          show: false

        }
      },
      methods: {
        goback() {
          this.$router.go(-1)
        },
        zhangfan(){
          this.show=true
        }

      },
      // created(){
      //   this.watch()
      // },
      computed:{
        watch(){
          //判断文字长度
          if (this.value.length ==10 &&this.valuea.length==6) {
            this.disable=false
            console.log(1);
          }

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
  .head{
    height: 1.4rem;
    padding-left: 0.5rem;
  }
.head>p{
  line-height: 1.4rem;
  font-size: 0.6rem;
}
  .btn{
    margin-top: .4rem;
  }
  .btn>button{
    width: 14.8rem;
  }
  .tan{
    width: 20rem;
    text-align: center;
    background-color: white;
    border-radius: .3rem;
    padding-top: 2rem;
    position: absolute;
    top: 30%;
    left: 7%;
    width: 86%;
  }
  .tan>img{
    width: 5rem;

  }

</style>
