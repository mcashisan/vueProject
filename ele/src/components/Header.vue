<template>
  <nav id="headers" class="container-fluid">
    <div class="row" style="display:flex; justify-content: space-between;text-align: center;">
      <div>ele.me</div>
      <div></div>
      <router-link :to="{path:'/login'}">
        <div><span>登录</span>|<span>注册</span></div>
      </router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }
  
  a {
    color: #fff;
  }
</style>
