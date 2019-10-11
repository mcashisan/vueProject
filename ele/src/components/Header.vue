<template>
  <nav id="headers" class="container-fluid">
    <div class="row" style="display:flex; justify-content: space-between;text-align: center;">
      <div>ele.me</div>
      <div></div>
      <div><span>登录</span>|<span>注册</span></div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header",
    component: {
      template:`
      <div>
        <div class="glyphicon glyphicon-search"></div>
        <div>城市名称</div>
        <div><span>登录</span>|<span>注册</span></div>
      </div>
      `
    }
  }
</script>

<style scoped>
  #headers {
    height: 3rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 3rem;
    background: #3190e8;
  }
</style>
