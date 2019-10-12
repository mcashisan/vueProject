<template>
  <div class="res">
    <div class="res1">
      <router-link :to="{path:'/address'}">
        <i class="iconfont icon-arrow-left-copy"></i>
      </router-link>

    <div class="Title">新增地址</div>

    </div>
    <div class="input1">
      <input type="text" placeholder="请填写你的名字">
      <input type="text" placeholder="小区/写字楼/学校等">
      <input type="text" placeholder="请填写详细的送餐地址">
      <input type="text" placeholder="请填写能够联系到您的手机号">
      <input type="text" placeholder="备用联系电话（选填）">

    </div>
    <button class="btn">确认修改</button>

  </div>
</template>

<script>
    export default {
        name: "AddAddress"
    }
</script>

<style scoped>
  .res1{
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }

  a{
    color: white;
    font-size: .6rem;
  }

  .Title{
    position: absolute;
    top: 0rem;
    left: 7rem;
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
