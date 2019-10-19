<template>
  <div id="title">
    <div class="vipshop">
      <p>请重新进入</p>
      <p>请返回后重新进入积分获取</p>
      <img src="../img/emoji_2.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "VipShop"
    }
</script>

<style scoped>
  .body{
    background-color:rgb(240,240,240) ;
  }
.vipshop{
  /*background-color:rgb(240,240,240) ;*/
  padding-top: 50%;
  text-align: center;
}
  .vipshop>p:nth-child(1){
    color:rgb(13,127,213);
    font-size: 1rem;
    font-weight: bold;
  }
  .vipshop>p:nth-child(2){
    font-size: .6rem;
  }

</style>
