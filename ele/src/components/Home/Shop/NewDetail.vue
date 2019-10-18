<template>
    <div>
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="goTop">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">{{newData.name}}</div>
          <div class="header_left"></div>
        </div>
      </nav>
      <!--//img/1675455928722796.jpg-->
      <div class="newDateil">
        <img :src="'//elm.cangdu.org/img/'+newData.imgUrl" alt="" style="width: 100%;">
        <div class="shop_message">
          <p>{{newData.description}}</p>
          <p>{{newData.name}}</p>
          <p>
            <span>评分</span>
            <van-rate v-model=newData.rating size=0.5 />
            <span style="color: #ff9a0d;">{{newData.rating}}</span>
          </p>
          <p>
            <span>月售{{newData.month_sales}}单</span>
            <span style="color: #ff9a0d;">售价￥{{newData.price}}起</span>
          </p>
          <p>
            <span>评论数{{newData.rating_count}}</span>
            <span>好评率{{newData.satisfy_rate}}%</span>
          </p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NewDetail",
        data() {
          return {
            newData: ""
          }
        },
        methods: {
          // 返回上一级
          goTop() {
            this.$router.go(-1);
          },
          getDates() {
            console.log(this.$route.query);
            this.newData = this.$route.query;
          }
        },
        created() {
          this.getDates();
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
  .shop_message {
    padding: 0.5rem;
  }
</style>
