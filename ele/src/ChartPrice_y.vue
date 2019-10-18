<template>
  <!--加入购物车结算-->
  <div>
    <!--灰色-->
    <div class="bg_y" v-if="isshow" @click="isshow = !isshow"></div>
    <!--结算购物车-->
    <div class="chant_y">
      <!--未结算-->
      <div class="chants_y" @click="isshow = !isshow">
        <!--加入购物车的价钱以及配送费  chant_blue_y-->
        <div class="chant_one_y">
          <!--购买数量-->
          <p v-if="newNum>0">{{newNum}}</p>
          <!--购物车图片-->
          <i class="iconfont icon-gouwuche1" style="font-size: 1.3rem"></i>
        </div>
        <!--购买价格/配送费-->
        <div class="chant_num_y">
          <div class="chant_numo_y">￥{{newMoney}}.00</div>
          <div class="chant_pei_y">配送费￥{{peiSon}}</div>
        </div>
      </div>
      <!--结算/未结算  chant_green_y-->
      <div :class="newMoney<20?{chant_right_y:true}:{chant_right_y1:true}">
        <span v-if="newMoney<20">还差￥20起送</span>
        <span v-if="newMoney>=20" @click="goOrder(allData1)">去结算</span>
      </div>
    </div>
    <!--加入购物车/清空-->
    <transition name="fade">
      <div class="chart_y" v-if="isshow">
        <div class="chart_header_y">
          <h4>购物车</h4>
          <div style="line-height: 1rem;display:flex;justify-content:start;" @click="clearS">
            <i class="iconfont icon-shanchu chart_jian_y" id="chart_jian_"></i>
            <span style="font-size: 0.7rem;">清空</span>
          </div>
        </div>
        <div class="chart_divul_y">
          <ul v-if="aaaa">
            <li v-if="v.num>0?true:false" class="chart_li_y" v-for="(v, index) in allData1" :key="index">
              <div class="chart_lidiv_y">
                <p class="chart_lipo_y">{{v.name}}</p>
                <p class="chart_lipt_y"></p>
              </div>
              <div class="chart_lidivt_y" v-for="(v1, index1) in v.specfoods" :key="index1">
                <span>￥</span><span class="wei_y">{{v1.price}}</span>
              </div>
              <div class="chart_lidivr_y" >
                <i class="iconfont icon-jianhao chart_jian_y" @click="jianData(v,index)"></i>
                <span class="chart_num_y">{{v.num}}</span>
                <i class="iconfont icon-jiahao chart_jian_y" @click="jiaShuJu(v,index)"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: "CharPrice_y",
    data() {
      return {
        newNum: 0, // 购买数量
        newMoney: 0, //总价格
        peiSon: 5, //配送费
        allData1: [],
        newList: "",
        isshow: false,
        orderMsg: "",
        geohash1: "",
        aaaa: true,
        img1: "",
        name: ""
      }
    },
    methods: {
      goOrder() {
        //跳转到订单页面
        this.$router.push({path:"/ordercon", query:{dudu:this.allData1,imgUrl:this.img1,name:this.name}});
      },
      //操作数据
      jianData(data, n) {
        console.log(data, n);
        if (data.num > 0) {
          data.num -= 1;
          // this.allData1 = data;
        } else {
          data.num = undefined;
          // localStorage.clear(n);
        }
        // 存储购物车数据
        let arr111=[];
        let newM = JSON.parse(localStorage.getItem("newCarts"));
        for (let i in newM) {
          if (newM[i].name == data.name) {
            continue;
          }
          arr111.push(newM[i]);
        }
        arr111.push(data);
        localStorage.setItem('newCarts',JSON.stringify(arr111));
      },
      jiaShuJu(data, n) {
        console.log(data, n);
        data.num += 1;
        // 存储购物车数据
        let arr111=[];
        let newM = JSON.parse(localStorage.getItem("newCarts"));
        for (let i in newM) {
          if (newM[i].name == data.name) {
            continue;
          }
          arr111.push(newM[i]);
        }
        arr111.push(data);
        localStorage.setItem('newCarts',JSON.stringify(arr111));
      },
      // 清空localStorage
      clearS() {
        this.aaaa = false;
        localStorage.clear();
      }
    },

    created() {
      this.img1 = JSON.parse(this.$route.query.con).image_path;
      this.name = JSON.parse(this.$route.query.con).name;
      console.log(JSON.parse(this.$route.query.con).image_path);
      this.geohash1 = localStorage.getItem("geoHash");
      let n = JSON.parse(localStorage.getItem("newCarts"));
      this.allData1 = n;
      let _this = this;
      n.forEach(function (v, n) {
        _this.newNum += v.num;
        let newnum1 = v.num;
        v.specfoods.forEach(function (v1, n1) {
          _this.newMoney += (v1.price)*newnum1;
          _this.peiSon += v1.packing_fee
        })
      });


      // 购物车数据[{attrs:[],extra:{},id:食品id,name:食品名称,packing_fee:打包费,price:价格,quantity:数量,sku_id:规格id,specs:规格,stock:存量,}]
      let arr2222 = [];
      for (let x in  n) {
        // console.log(n[x]);
        let obj = [{
          attrs: [],
          extra: {},
          id: n[x].specfoods[0].food_id,
          name: n[x].specfoods[0].name,
          packing_fee: n[x].specfoods[0].packing_fee,
          price: n[x].specfoods[0].price,
          //数量
          quantity: n[x].num,
          sku_id: n[x].specfoods[0].sku_id,
          specs: n[x].specfoods[0].specs_name,
          stock: n[x].specfoods[0].stock,
        }];
        arr2222.push(obj)
      }
      this.myHttp.post("/v1/carts/checkout", {
        restaurant_id: localStorage.getItem("ID"),
        geohash: this.geohash1,
        entities: arr2222
      }, (res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_f3awotv784h.css";

  .bg_y {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);
    z-index: 11;
    animation: fae .5s;
    -webkit-animation: fae .5s;
    animation-fill-mode: forwards;
  }

  @keyframes fae {
    0% {
      opacity: 0;
    }
    25% {
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }

  .chant_y {
    position: fixed;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    z-index: 13;
    display: flex;
    width: 100%;
    height: 2.5rem;
  }

  .chants_y {
    flex: 1;
  }


  .chant_one_y {
    width: 2.5rem;
    height: 2.5rem;
    text-align: center;
    line-height: 2.2rem;
    background-color: #3d3d3f;
    position: absolute;
    border: .18rem solid aqua;
    border-radius: 50%;
    left: 1.3rem;
    top: -1rem;

  }

  .chant_one_y p {
    position: absolute;
    top: -.25rem;
    right: -.1rem;
    background-color: #ff461d;
    line-height: .8rem;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    min-width: .8rem;
    width: 1rem;
    line-height: 1rem;
    font-size: .8rem;
    color: #fff;
  }

  .chant_svg_y {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0;
  }

  .chant_num_y {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 5rem;
    color: white;
  }

  .chant_numo_y {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: .1rem;
  }

  .chant_pei_y {
    font-size: .4rem;
    margin-left: .2rem;
  }

  .chant_right_y {
    background-color: #535356;
  }

  .chant_right_y, .chant_right_y1 {
    position: absolute;
    right: 0;
    width: 5.5rem;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chant_right_y span, .chant_right_y1 span {
    font-size: 0.8rem;
    color: #fff;
    font-weight: bold;
  }

  .chant_right_y1 {
    background:#4cd964;
  }

  .chant_green_y {
    background-color: #4cd964;
  }

  .chant_blue_y {
    background-color: #3190e8;
  }

  .chart_y {
    position: fixed;
    width: 100%;
    padding-bottom: 2rem;
    z-index: 12;
    bottom: 0;
    left: 0;
    background-color: #fff;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .3s;
  }

  .fade-enter, .fade-leave-to {
    transform: translateY(-14.52rem);
    transform: translateY(14.52rem);
  }

  .chart_header_y {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .3rem .8rem;
    background-color: #eceff1
  }

  .chart_header_y h4 {
    font-size: .7rem;
    color: #666;
    font-weight: 400;
  }

  .chart_header_y span {
    font-size: .8rem;
    color: #666;
  }

  .chart_img_y {
    width: .8rem;
    height: .8rem;
    vertical-align: middle;
  }

  .chart_divul_y {
    background-color: #fff;
    max-height: 25rem;
    overflow-y: auto;
    margin-bottom: .9rem;
  }

  .chart_ul_y {

  }

  .chart_li_y {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem .8rem;
    font-size: 0.6rem;
  }

  .chart_lidiv_y {
    width: 55%;
  }

  .chart_lipo_y {
    font-size: .7rem;
    color: #666;
    font-weight: bold;
  }

  .chart_lipt_y {
    font-size: .6rem;
    color: #666;
  }

  .chart_lidivt_y {
    font-size: .9rem;
    color: #f60;
  }

  .wei_y {
    font-size: 1rem;
    font-weight: 800;
  }

  .chart_lidivr_y {
    display: flex;
    align-items: center;
  }

  .chart_span_y {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .chart_jian_y {
    font-size: 0.8rem;
    color: #3190e8;
  }

  #chart_jian_ {
    color: #999;
    font-size: 1.2rem;
  }

  .chart_num_y {
    font-size: .65rem;
    color: #666;
    min-width: 1rem;
    text-align: center;
  }
</style>
