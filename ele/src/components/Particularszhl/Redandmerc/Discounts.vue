<template>
  <div id="title">
  <!--导航条-->
    <div>
  <nav id="headers">
    <div class="headers_msg">
      <div class="header_left">
        <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;" @click="blackdiscounts"><</i>
      </div>
      <div class="header_con">我的优惠</div>
      <div class="header_left"></div>
    </div>
  </nav>
  </div>
<div id="andDiv">
  <router-link :to="{path:'/pagered'}" id="lpage">红包</router-link>
  <router-link :to="{}" id="rmerc">商家代金券</router-link>
</div>
  </div>
</template>

<script>
    export default {
        name: "Discounts",
      methods:{
        blackdiscounts(){
          this.$router.push({path:"/footmine"})
        }
      }
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
  .login_header, .login_bottom {
    padding: 0.5rem;
  }
  .login_header > div {
    width: 55%;
  }
  .login_header > div > input {
    width: 100%;
    font-size: 0.75rem;
    border: none;
    outline: none;
  }
  #andDiv{
  width: 100%;
  height: 2rem;
  background-color: white;
    font-size: 0.69rem;
    padding-top: 0.7rem;
}
  #lpage{
margin:0 2.5rem;
  }
  #rmerc{
    margin: 0 2.5rem;
  }
</style>
