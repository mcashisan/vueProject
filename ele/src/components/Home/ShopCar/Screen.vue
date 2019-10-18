<template>
    <div id="screen">
      <div class="way_on">
        <p>配送方式</p>
        <div class="result">
          <img src="" alt="">
          <span>蜂鸟专送</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Screen",
        data() {
          return {

          }
        },
        methods: {
          getPaiXu() {
            // this.myHttp.get("/shopping/order_by=1?latitude=31.22967&longitude=121.4762", (res) => {
            //   console.log(res);
            // }, (err) => {
            //   console.log(err);
            // });
          }
        },
        created() {
          this.getPaiXu();
        }
    }
</script>

<style scoped>
  #screen {
    width: 100%;
    height: 100%;
    background: pink;
  }
</style>
