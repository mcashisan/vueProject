<template>
    <div class="AccInfo">
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goback">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">用户信息</div>
          <div class="header_left"></div>
        </div>
      </nav>
<div class="head1">
      <van-cell title="用户名照片"   is-link to="index" />
</div>
      <van-cell title="用户名"   value="1221312"  is-link to="changeusername" />
      <van-cell title="收货地址" size="large" is-link to="/saveAddress" />
      <div class="mid1">
        账号绑定
      </div>

      <van-cell title="手机" size="large" icon="phone-o" @click="show=true ">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->

      </van-cell>
      <div class="mid1">
        安全问题
      </div>
      <van-cell title="登录密码"   value="修改" is-link to="/reset" />
<div class="bottom">
        <!--<button type="button" class="btn btn-danger btn-lg">退出登录</button>-->

  <div class="bottom">退出登录</div>

</div>

      <div class="tan" v-if="show">
      <img src="./img/弹框.png"/>
        <p>请在手机APP中设置</p>
        <van-button type="primary" size="large" @click="show=false">确定</van-button>
      </div>
  </div>
</template>

<script>
    export default {
        name: "AccountInfoLyf",
      data(){
          return{
                show: false
      }
      },
      methods:{
        goback(){
          this.$router.go(-1)
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

  .mid1{
    font-size: .2rem;
    /*padding: 4rem;*/
    color: black;
    padding: 0.3rem;
    margin-left: 0.4rem;
  }
.bottom{
  width: 96%;
  margin: 1.3rem auto 0;
  line-height: 1.5rem;
  border-radius: 5px;
  text-align: center;
  background: #d8584a;
  font-size: .6rem;
  color: #fff;
}
  button{
    padding: 0.3rem 5rem;
  }

  .one>span:nth-child(1){
    margin-left: 1rem;
    font-size: 0.6rem;
  }
  .one>span:nth-child(2){
    margin-left: 2rem;
  }



  .head1{
    margin-top: 0.6rem;
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
