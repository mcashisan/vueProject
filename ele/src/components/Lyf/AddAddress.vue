<template>
  <div class="res">
    <div class="res1">
      <router-link :to="{path:'/address'}"><</router-link>
      <div class="Title">新增地址</div>

    </div>

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
    top: 2rem;
    left: 7rem;
  }
</style>
