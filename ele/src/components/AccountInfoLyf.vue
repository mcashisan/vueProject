<template>
    <div class="AccInfo">
      <div class="res1">
        <router-link :to="{path:'/account'}">
          <i class="iconfont icon-arrow-left-copy"></i>
        </router-link>

        <div class="Title">账户信息</div>

      </div>
<div class="head1">
      <van-cell title="用户名照片"   is-link to="index" />
</div>
      <van-cell title="用户名"   value="1221312"  is-link to="index" />
      <van-cell title="收货地址" size="large" is-link to="/address" />
      <div class="mid1">
        账号绑定
      </div>

      <van-cell title="手机" size="large" icon="phone-o" is-link to="index">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->

      </van-cell>
      <div class="mid1">
        安全问题
      </div>
      <van-cell title="登录密码"   value="修改" is-link to="/reset" />
<div class="bottom">
        <!--<button type="button" class="btn btn-danger btn-lg">退出登录</button>-->

  <div class="bottom" @click="showPopup">退出登录</div>
<div></div>

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
        showPopup() {
          this.show = true;
        }
      }

    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1454015_7cimcv58g7p.css";
  .res1{
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
    width: 100%;
  }
  .Title{
    position: absolute;
    top: 0rem;
    left: 7rem;
    font-size: .8rem;
  }

  img{
    width: 1.6rem;
    height: 1.6rem;
    float:left;
    margin-left: 9rem;
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
  .icon-gerentouxiang{
    font-size: 1rem;
  }
  .one{
    height: 3.5rem;
    background-color: white;
    color: black;
    padding-top: 1rem;
    margin-top: 1rem;
  }
  .one>span:nth-child(1){
    margin-left: 1rem;
    font-size: 0.6rem;
  }
  .one>span:nth-child(2){
    margin-left: 2rem;
  }
  .icon-arrow-right{
    font-size: 1rem;
  }
  .head1{
    margin-top: 0.6rem;
  }

</style>
