<template>
  <div class="res">
    <div class="res1">
<router-link :to="{}"><</router-link>
    <div class="Title">编辑地址</div>
    <router-link :to="{}" class="bianji">编辑</router-link>
    </div>
    <div class="add">点击新增地址</div>
    <!--<router-view></router-view>-->
  </div>


</template>

<script>
    export default {
        name: "Address",


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
.add{
  width: 16rem;
  height: 2rem;
  background-color: white;
  padding: 0.5rem;
  margin-top: 1rem;
  font-size: 0.6rem;

}
  a{
    color: white;
    font-size: .6rem;
  }
  .bianji{
    position: absolute;
    top: 2rem;
    left: 14.4rem;
    font-size: 0.6rem;
  }
  .Title{
    position: absolute;
    top: 2rem;
    left: 7rem;
  }
</style>
