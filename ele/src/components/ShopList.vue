<template>
    <div id="shopList">
      <!--geohash=31.22299,121.36025&id=1-->
        <router-link class="allList" v-for="(v, index) in allList" :key="index" :to="{path:'/shop', query:{con:JSON.stringify(v)}}">
          <!--//elm.cangdu.org/img/164ad0b6a3917599.jpg-->
          <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="" class="allList_img">
          <div class="allList_data">
            <div class="allList_top">
              <p class="allList_top_title">
                <span>品牌</span>
                <span>{{v.name}}</span>
              </p>
              <!--保准票-->
              <p>
                <span v-for="(v, index) in standard" :key="index" style="color: #999;padding: 0.05rem;border: 0.01rem solid #e4e4e4;">{{v.icon_name}}</span>
              </p>
            </div>
            <!--评分-->
            <div class="allList_top">
              <p class="icon_">
                <van-rate v-model=v.rating size=5 />
                <span style="color: #ff6000; padding: 0 0.05rem;">{{v.rating}}</span>
                <span>月售{{v.recent_order_num}}单</span>
              </p>
              <p  class="icon_">
                <!--specific:特定-->
                <span class="specific">{{v.delivery_mode.text}}</span>
                <!--punctuality: 准时-->
                <span class="punctuality">{{timeOut}}</span>
              </p>
            </div>
            <!--配送-->
            <div class="allList_top">
              <p class="icon_">
                <span>￥{{v.float_minimum_order_amount}}起送/</span>
                <span>{{v.piecewise_agent_fee.tips}}</span>
              </p>
              <p class="icon_">
                <span>{{v.distance}}/</span>
                <span>{{v.order_lead_time}}</span>
              </p>
            </div>
          </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "ShopList",
        data() {
          return{
            allList: [],
            // 保准票
            standard: [],
            // 准时达
            timeOut: "",
            geohash: "",//路由参数
            ID: ""
          }
        },
        created() {
          this.getShopList();
          this.geohash = this.$route.query.geoHash;
        },
        methods: {
          getShopList() {
            this.myHttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762",(res) => {
              // console.log(res.data);
              this.allList = res.data;
              // res.data.supports
              let _this = this;
              // 保准票
              res.data.forEach(function (v, i) {
                _this.standard = v.supports;
              });
              this.timeOut = _this.standard[1].name;
            },(err) => {
              console.log(err);
            });
          }
        }
    }
</script>

<style scoped>
  #shopList {
    /*margin-top: -0.4rem;*/
    background: #fff;
  }

  .allList {
    text-align: left;
    padding: 0 0.4rem 0.4rem;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 0.01rem solid #e4e4e4;
    text-decoration: none;
  }

  .allList_img {
    width: 20%;
  }

  .allList_data {
    width: 84%;
    margin-left: 0.3rem;
    padding-top: 0.2rem;
  }

  .allList_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .allList_top_title {
    width: 45%;
    font-weight: bold;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap
  }

  .allList_top_title >  span:nth-child(1) {
    padding: 0.015rem;
    border-radius: 0.1rem;
    background: #ffd930;
  }

  .icon_ {
    font-size: 0.25rem;
  }
  
  .specific, .punctuality {
    padding: 0.015rem;

  }

  .specific {
    color: #fff;
    background: #3190e8;
    border-radius: 0.1rem;
  }
  
  .punctuality {
    color: #3190e8;
    border: 0.05rem solid #3190e8;
    border-radius: 0.015rem;
  }
</style>
