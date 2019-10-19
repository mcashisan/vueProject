<template>
  <!--订单列表-->
  <section class="title_y">
    <!--导航头部-->
    <header id="head_top_y">
      <router-link :to="{}">
        <section class="head_nav_y">
          <svg width="100%" height="100%" version="1.1" @click="goback">
            <polyline points="14,19,4,9,13,0" :style="head_navs_y"></polyline>
          </svg>
        </section>
      </router-link>
      <section class="head_title_y ex">
        <span class="title_text_y">订单列表</span>
      </section>
    </header>
    <router-link :to="{}" class="as_y">
      <ul class="orderul_y">
        <li class="orderli_y">
          <img src="//elm.cangdu.org/img/164ad0b6a3917599.jpg" alt="" class="orderli_img_y">
          <section class="orderli_p_y">
            <!--效果演示-->
            <router-link :to="{}" class="as_y">
              <header class="orderli_header_y">
                <section>
                  <h4 class="orderli_h4_y">
                    <span>效果演示</span>
                    <!--箭头-->
                    <!--<img src="../img/jiantou.png" alt="" class="orderli_h4_img_y">-->
                  </h4>
                  <p class="orderli_time_y">2019-08-04 13:42</p>
                </section>
                <p class="orderli_timeout_y" :class="minss==0&&secondss==0&&secondss==0?{cs_y:'支付超时'}:{cs_y:'等待支付'}" >{{cs_y}}</p>
              </header>
            </router-link>
            <!--名字.价钱-->
            <section class="orderli_center_y">
              <p class="orderli_center_p_y">12 等3件商品</p>
              <p class="orderli_center_price_y">￥13950.00</p>
            </section>
            <!--再来一单按钮-->
            <div class="orderli_again_y " @click="isshows = !isshows">
              <router-link :to="{}" :class="minss==0&&secondss==0&&secondss==0?{orderli_blue_y:true}:{orange_y:true}">去支付(还剩{{minss}}分{{secondss}}{{seconds}}秒)</router-link>
            </div>
          </section>
        </li>
      </ul>
    </router-link>
    <transition name="fade">
      <div class="tan_y" v-if="isshows" >
        <section class="tankuang_y">
          <div class="tan_div_y">
            <span class="tanspan_y"></span>
            <span class="tanspans_y"></span>
          </div>
          <p class="tanp_y">暂不开放支付接口</p>
          <router-link :to="{}" class="Ok_y">
            <div  @click="isshows = !isshows">确认</div>
          </router-link>
        </section>
      </div>
    </transition>

  </section>

</template>

<script>
  import Footer from "../Footer";
  export default {
    name: "Orderli_y",
    components: {Footer},
    data(){
      return{
        head_navs_y: {
          fill: 'none',
          stroke: 'rgb(255, 255, 255)',
          strokeWidth: '2'
        },
        cs_y:'等待支付',
        isshows:false,
        couth:'',
        ms:'',
        seconds:9,
        secondss:5,
        minss:14,
      }
    },
    created(){
      this.countDown();
      this.$store.state.shopcar=false;
      this.$store.state.showOrNot = true;
    },
    methods:{
      countDown(){
        setInterval(()=>{
          if (this.seconds <=1){
            this.secondss--;
            if (this.secondss<0){
              this.secondss=5;
              this.minss--;
            }
            this.seconds=10
          }
          this.seconds--
        },1000)
      },
      goback(){
        this.$router.go(-1)
      }

    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }
  .fade-enter, .fade-leave-to  {
    transform: scale(2,0);
    transform: scale(2,0);
  }
  .as_y{
    text-decoration: none;
  }
  .title_y{
    padding: 3rem 0;
    animation: fae .5s;
    -webkit-animation:fae .5s;
    animation-fill-mode: forwards;
  }
  @keyframes  fae{
    0%{
      opacity: 0;
    }
    25%{
      opacity: 0.2;
    }
    50%{
      opacity: 0.5;
    }
    75%{
      opacity: 0.75;
    }
    100%{
      opacity: 1;
    }
  }
  #head_top_y{
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 2.85rem;
  }
  .head_nav_y{
    left: .7rem;
    width: 1rem;
    height: 1rem;
    line-height: 2.85rem;
    margin-left: .4rem;
  }
  .head_title_y{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center
  }
  .title_text_y{
    font-size: 1.2rem;
    color: #fff;
    text-align: center;
    font-weight: 700;
  }
  .ex{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .orderul_y{
    padding-top: .05rem;
  }
  .orderli_y{
    background-color: #fff;
    display: flex;
    margin-bottom: .5rem;
    padding: .6rem .8rem 0;
    width: 100%;
  }
  .orderli_img_y{
    width: 3rem;
    height: 3rem;
    margin-right: .4rem;
  }
  .orderli_p_y{
    flex: 5;
  }
  .orderli_header_y{
    border-bottom: .025rem solid #f5f5f5;
    padding-bottom: .3rem;
    display: flex;
    justify-content: space-between;
  }
  .orderli_h4_y{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.1rem;
    font-weight: 400;
    color: #333;
    line-height: 1.3rem;
    /*width: 9rem;*/
  }
  .orderli_h4_img_y{
    width: 1rem;
    height: 1rem;
    fill: #ccc;
    margin-right: .2rem
  }
  .orderli_time_y{
    font-size: .8rem;
    color: #999;
    line-height: 1.4rem;
  }
  .orderli_timeout_y{
    font-size: .9rem;
    color: #333;
  }
  .orderli_center_y{
    display: flex;
    justify-content: space-between;
    line-height: 3rem;
    border-bottom: .025rem solid #f5f5f5
  }
  .orderli_center_p_y{
    font-size: .9rem;
    color: #666;
    /*width: 10rem;*/
  }
  .orderli_center_price_y{
    font-size: .9rem;
    color: #f60;
    font-weight: 700;
  }
  .orderli_again_y{
    text-align: right;
    line-height: 3rem;
    display: block;
  }
  .orange_y {
    color: orange;
    border: .04rem solid orange;
  }
  .orderli_blue_y{
    color: #3190e8;
    border: .04rem solid #3190e8;
  }
  .orderli_again_y a{
    text-decoration: none;
    font-size: .8rem;
    padding:  .1rem .3rem;
    border-radius: .2rem;
  }
  .tan_y{
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    zIndex: 200;
  }
  .tankuang_y{
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10.1rem;
    margin-left: -9rem;
    width: 18rem;
    animation: tipMove .4s;
    background-color: #fff;
    padding-top: .6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px;
    border-radius: .25rem;
  }
  .tan_div_y{
    width: 4rem;
    height: 4rem;
    border: .2rem solid #f8cb86;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .tanspan_y{
    width: .2rem;
    height:2rem;
    background-color: #f8cb86;
  }
  .tanspans_y{
    width: .2rem;
    height: .2rem;
    border: 0.5rem;
    border-radius: 50%;
    margin-top: .2rem;
    background-color:#f8cb86;
  }
  .tanp_y{
    font-size: 1.05rem;
    color: #333;
    line-height: 1.2rem;
    text-align: center;
    margin-top: .8rem;
    padding: 0 .4rem;
  }
  .Ok_y{
    font-size: 1.25rem;
    color: #fff;
    font-weight:800;
    margin-top: 1rem;
    background-color:#4cd964;
    width: 100%;
    text-align: center;
    line-height: 2.8rem;
    display: block;
    border: 0.3rem;
    text-decoration: none;
    border-bottom-left-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
</style>
