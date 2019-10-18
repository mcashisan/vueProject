<template>
    <div>
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goTop">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">订单列表</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <!--底部导航条-->
      <Order></Order>
    </div>
</template>

<script>
    import Order from "../../components/Footer"
    export default {
        name: "OrderList",
        components: {
          Order
        },
        methods:{
          goTop() {
            this.$router.go(-1);
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";
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
