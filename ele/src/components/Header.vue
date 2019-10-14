<template>
  <!--导航条-->
  <nav id="headers">
    <div class="headers_msg">
      <div class="header_left">
        <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
      </div>
      <div class="header_con">密码登录</div>
      <div class="header_left"></div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>
  /*导航条*/
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

</style>
