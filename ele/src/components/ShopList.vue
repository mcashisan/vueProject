<template>
    <div id="shopList">
        <div class="allList" v-for="(v, index) in allList" :key="index">
          <!--//elm.cangdu.org/img/164ad0b6a3917599.jpg-->
          <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="" style="width: 3rem;">
          <div>
            <p>{{v.name}}</p>
            <p>{{v.distance}}</p>
            <p>{{v.order_lead_time}}</p>
            <p>{{v.float_minimum_order_amount}}</p>
            <p>{{v.float_delivery_fee}}</p>
            <p>{{v.delivery_mode.text}}</p>
            <p>{{v.piecewise_agent_fee.tips}}</p>
            <p>{{v.rating}}</p>
            <!--保准票-->
            <p>
              <span v-for="(v, index) in standard" :key="index" style="border: 0.01rem solid #e4e4e4;">{{v.icon_name}}</span>
            </p>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopList",
        data() {
          return{
            allList: [],
            // 保准票
            standard: []
          }
        },
        created() {
          this.getShopList();
        },
        methods: {
          getShopList() {
            this.myHttp.get("/shopping/restaurants?latitude=31.22967&longitude=121.4762",(res) => {
              console.log(res.data);
              // supports
              this.allList = res.data;
              // res.data.supports
              let _this = this;
              res.data.forEach(function (v, i) {
                console.log(v.supports);
                _this.standard = v.supports;
              });
            },(err) => {
              console.log(err);
            });
          }
        }
    }
</script>

<style scoped>
  #shopList {
    padding: 0.5rem;
    background: #fff;
  }

  .allList {
    display: flex;
    justify-content: start;
    align-items: center;
  }
</style>
