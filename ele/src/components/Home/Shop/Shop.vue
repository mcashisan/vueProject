<template>
    <div id="shop">
      <!--//elm.cangdu.org/img/164ad0b6a3917599.jpg-->
      <div id="shopTop" :style="{background:'url('+ 'https://elm.cangdu.org/img/' + shopImg +')',backgroundSize:'400% 400%'}">
        <!--,filter: 'blur('+0.5 +'rem)':背景模糊-->
        <!--商家:merchant 信息-->
        <div class="merchant">
          <div class="merchant_title">
            <img :src="'//elm.cangdu.org/img/'+shopImg" alt="" class="merchant_img">
            <div class="merchant_message">
              <p style="font-size: 0.7rem;font-weight: bold;">{{shopTitle}}</p>
              <p>商家配送&nbsp;/&nbsp;分钟送达&nbsp;/&nbsp;{{shopMoney}}</p>
              <p>公告:&nbsp;{{notice}}</p>
            </div>
            <i class="iconfont icon-jiantou-copy" style="font-size: 1rem;" @click="shopFanHui"></i>
          </div>
          <div class="manjian" v-if="shopMessage">
            <div>
              <span style="padding: 0.05rem;background:rgb(240, 115, 115);">{{shopMessage.icon_name}}</span>
              <span>{{shopMessage.description}}</span>
              <span>(APP专享)</span>
            </div>
            <p>
              {{shopMessage.id}}个活动
              <span class="iconfont icon-jiantou-copy" style="font-size: 0.7rem;"></span>
            </p>
          </div>
          <p class="merchant_left iconfont icon-arrowRight-copy" @click="goTo"></p>
        </div>
      </div>
      <!--商品, 评价信息-->
      <van-tabs v-model="active" style="margin-bottom: 2.5rem;">
          <van-tab title="商品">
            <van-sidebar v-model="activeKey" class="activeKey">
              <van-sidebar-item @click="shows(v)" v-for="(v, index) in listData" :key="index" :title="v.name" style="color: #000;border-top:0.01rem solid #e4e4e4;"/>
            </van-sidebar>
            <div class="flo" style="width: 75%;height: 100%;" >
              <div class="flo_title">
                <p>
                  <span>{{shopShow.name}}</span>
                  <span>{{shopShow.description}}</span>
                </p>
                <p class="little">...</p>
              </div>
              <div v-for="(x, y) in shopShow1" :key="y" style="color: #000;">
                <div class="messageList">
                  <img :src="'//elm.cangdu.org/img/'+x.image_path" alt="" style="width: 17%;height: 2rem;">
                  <div class="allMessage">
                    <p style="font-size: 0.7rem;font-weight: bold;">{{x.name}}</p>
                    <p style="color: #666;">{{x.description}}</p>
                    <p>{{x.tips}}</p>
                    <span v-if="x.activity" class="youOrwu" >{{x.activity?x.activity.image_text:''}}</span><br>
                    <div class="allMessage_bot">
                      <p><span style="color: #f60;margin-right:0.2rem;">￥{{x.specfoods[0].price}}</span>起</p>
                      <!--specifications.name-->
                      <div v-for="(v, index) in x.specifications" :key="index">
                        <button v-if="v.name" class="bot" @click="standards(v)">选{{v.name}}</button>
                      </div>
                      <button v-if="x.specifications == ''" class="bot bot1">+</button>
                    </div>
                    <!--<div v-for="(n, n1) in x.attributes" :key="n1">-->
                      <!--&lt;!&ndash;{{n}}&ndash;&gt;-->
                      <!--<div v-for="(n2, n3) in n" :key="n3">-->
                        <!--<p v-if="(n2=='新'||'招牌')" :style="n2.icon_color">{{n2}}</p>-->
                      <!--</div>-->
                    <!--</div>-->
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
          <van-tab title="评价">
            <!--评价得分-->
            <div class="grade">
              <div class="grade_left">
                <p class="col2" style="font-size: 1.5rem;font-weight: bold;">{{(evaluate_msg.food_score).toFixed(1)}}</p>
                <p class="col1">综合评价</p>
                <p style="font-size: 0.4rem">高于周边商家{{((evaluate_msg.compare_rating)*100).toFixed(1)}}%</p>
              </div>
              <div class="grade_right">
                <p>
                  <span class="col1">服务态度</span>
                  <van-rate v-model=evaluate_msg.overall_score size=5 />
                  <span class="col2">{{(evaluate_msg.overall_score).toFixed(1)}}</span>
                </p>
                <p>
                  <span class="col1">菜品评价</span>
                  <van-rate v-model=evaluate_msg.food_score size=5 />
                  <span class="col2">{{(evaluate_msg.food_score).toFixed(1)}}</span>
                </p>
                <p>
                  <span class="col1">送达时间</span>
                  <span style="font-size: 0.4rem;color: #666;">{{evaluate_msg.deliver_time}}分钟</span>
                </p>
              </div>
            </div>
            <!--评价_分类: evaluate_classify-->
            <div class="evaluate_classify">
              <div v-for="(v, index) in evaluate_c" :key="index">
                <p :class="(v.name)==conName?{evaluate_states:true}:((v.name)=='不满意'?{satisfaction:isArray2}:{rest:isArray3})" @click="fun(v.name)">
                  <!--colorState(index)-->
                  <span>{{v.name}}</span>
                  <span>({{v.count}})</span>
                </p>
              </div>
              <div style="clear: both;"></div>
            </div>
            <!--评价信息-->
            <div class="evaluate_msg_list">
              <div v-for="(v, index) in evaluate_msg_list" :key="index" class="message_time">
                <img v-if="v.avatar !=''" :src="'https://fuss10.elemecdn.com/'+v.avatar+'.jpeg'" alt="">
                <img v-else :src="'https://elm.cangdu.org/img/default.jpg'" alt="">
                <div class="allMessageList">
                  <div class="allMessageList_name">
                    <p>{{v.username}}</p>
                    <p style="font-size: 0.4rem;color:#999;">{{v.rated_at}}</p>
                  </div>
                  <div>
                    <p style="margin-top: -0.3rem">
                      <van-rate v-model=v.rating_star size=0.5 />
                      <span style="font-size: 0.7rem;">{{v.time_spent_desc}}</span>
                    </p>
                    <div class="allMessageList_img">
                      <div>
                        <!--<img v-if="v.item_ratings[0].image_hash" :src="'https://fuss10.elemecdn.com/'+v.item_ratings[0].image_hash+'.jpeg'" alt="" width="2rem">-->
                      </div>
                      <div>
                        <span>{{v.item_ratings[0]}}</span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      <!--底部购物车显示的数据-->
      <!--<div class="bot_shopCart">-->
        <!--<div class="bot_shopCart_left">-->
          <!--<div class="bot_shopCart_car">-->
            <!--<i class="iconfont icon-gouwuche1 bot_shopCart_img"></i>-->
          <!--</div>-->
          <!--<div class="bot_shopCart_money">-->
            <!--<p style="font-size: 1rem;">￥<span>0.00</span></p>-->
            <!--<p style="margin-top: -0.5rem;">配送费￥5</p>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="bot_shopCart_right">-->
          <!--<p>还差￥20起送</p>-->
        <!--</div>-->
      <!--</div>-->
    </div>
</template>

<script>
    export default {
        name: "Shop",
        data() {
          return {
            conName: "全部",
            shopImg: "",  //商家图片
            shopTitle: "", //商家名称
            shopMoney: "", //商家配送/送达/配送费
            notice: "", // 公告
            shopMessage: "", //满减
            ID : "",
            // 左侧列表
            active: 2,
            activeKey: 0,
            listData: [],
            newListData: [],
            // 商品展示
            shopShow: "",
            shopShow1: "",
            // 热销榜
            heatData: [],
            // 评价得分
            evaluate_msg: "",
            // 评价分类
            evaluate_c: [],
            isArray1: true,
            isArray2: true,
            isArray3: true,
            // 评价信息
            evaluate_msg_list: []
          }
        },
        created() {
          let data = JSON.parse(this.$route.query.con);
          this.shopImg = data.image_path;
          this.shopTitle = data.name;
          this.shopMoney = data.piecewise_agent_fee.tips;
          this.notice =data.promotion_info;
          this.shopMessage = data.activities[0];
          this.ID = data.id;
          // 数据请求
          this.shopDetails();
          // 商品展示
          this.shows(data);
          // 评价分数
          this.evaluate_grade();
          // 评价分类
          this.evaluate_classify();
          // 评价信息
          this.evaluate_message();
          //背景图
          // this.url_ = 'https://fuss10.elemecdn.com/' + this.shopImg;
        },
        methods: {
          // 返回上一级页面
          goTo() {
            return this.$router.go(-1)
          },
          // 返回商铺列表
          shopFanHui() {
            this.$router.push({path:"/msite"});
          },
          shopDetails() {
            this.myHttp.get("/shopping/v2/menu?restaurant_id="+this.ID, (res) => {
              // console.log(res.data);
              this.newListData = res.data;
              this.listData = res.data;
              // 默认值
              this.shopShow = res.data[0];
              this.shopShow1 = res.data[0].foods;
            }, (err) => {
              console.log(err);
            });
          },
          shows(data){
            this.shopShow = data;
            // console.log(data);
            this.shopShow1 = data.foods;
            // specifications.name
          },
          // 评价分数
          evaluate_grade() {
            this.myHttp.get("/ugc/v2/restaurants/"+this.ID+"/ratings/scores", (res) => {
              // console.log(res);
              this.evaluate_msg = res.data;
            }, (err) => {
              console.log(err);
            });
          },
          // 评价分类
          //  /ugc/v2/restaurants/1/ratings/tags
          evaluate_classify() {
            this.myHttp.get("/ugc/v2/restaurants/" + this.ID + "/ratings/tags", (res) => {
              // console.log(res);
              this.evaluate_c = res.data;
              // console.log(this.evaluate_c);
            }, (err) => {
              console.log(err);
            });
          },
          // 点击分类按钮
          colorState(data) {
            // console.log(data);
          },
          // 获取评价信息
          evaluate_message() {
            this.myHttp.get("/ugc/v2/restaurants/" + this.ID + "/ratings?offset=0&limit=10", (res) => {
              // console.log(res.data[0].item_ratings[0].food_name);
              this.evaluate_msg_list = res.data;
            }, (err) => {
              console.log(err);
            });
          },
          //
          fun(data) {
            this.conName = data;
          },
          // 点击选规格/加如购物车
          standards(n) {
            console.log(n);
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_t66e1ke3gh.css";
  a {
    text-decoration: none;
    color: #fff;
  }

  #shopTop {
    padding: 0.5rem 0 0 0;
    font-size: 0.4rem;
    color: #fff;
    /*background: rgba(119,103,137,.43);*/
    /*background: url("");*/
  }

  .merchant {
    padding: 0 0.5rem;
  }

  .merchant_title {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .merchant_img {
    width: 20%;
    border-radius: 0.1rem;
    margin-top: -0.5rem;
  }

  .merchant_message {
    width: 80%;
    margin-left: 0.2rem;
  }

  .merchant_right {
    margin-top: 1rem;
    font-size: 1rem;
  }

  .merchant_left {
    position: fixed;
    top: 0.1rem;
    left: 0.3rem;
    font-size: 1rem;
    font-weight: bold;
  }

  .manjian {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .activeKey{
    width: 25%;
    paddding-right:0.1rem;
    /*overflow: hidden;*/
    float: left;
  }
  .flo{
    float: left;
  }
  .flo_title {
    padding: 0.5rem 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .flo_title span:nth-child(1) {
    font-size: 0.8rem;
    font-weight: bold;
    margin-right: 0.3rem;
    color: #666;
  }
  .little {
    font-size: 0.9rem;
    margin-right: 0.1rem;
    color: #000;
  }
  .messageList {
    width: 100%;
    padding: 0.5rem;
    background: #fff;
    border-bottom: 0.01rem solid #e4e4e4;
    display: flex;
    justify-content: start;
  }

  .allMessage {
    width: 83%;
    line-height: 0.5rem;
    margin-left: 0.2rem;
  }

  .youOrwu {
    font-size: 0.5rem;
    padding: 0 0.1rem;
    color: rgb(241, 136, 79);
    border: 0.05rem solid rgb(241, 136, 79);
    border-radius: 0.5rem;
  }

  .allMessage_bot {
    width: 100%;
    margin-top: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .bot {
    margin-bottom: 0.5rem;
    border: none;
    outline: none;
    border-radius: 0.15rem;
    color: #fff;
    padding: 0.2rem;
    background: #3199e8;
  }

  .bot1 {
    padding: 0.3rem;
    border-radius: 50%;
  }

  /*评价得分*/
  .grade {
    padding: 0.5rem;
    color: #000;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .grade_left {
    width: 37%;
    text-align: center;
    line-height: 1rem;
    margin-top: 0.2rem;
  }

  .grade_right {
    width: 60%;
  }

  .col1 {
    font-size: 0.7rem;
  }
  
  .col2 {
    color: #f60;
  }

  /*评价分类*/
  .evaluate_classify {
    padding: 0.5rem;
    margin-top: 0.6rem;
    /*border-bottom: 0.01rem solid #e4e4e4;*/
    background: #fff;
  }

  .evaluate_states, .rest, .satisfaction {
    padding: 0.2rem;
    margin: 0.15rem;
    border-radius: 0.15rem;
    float: left;
  }

  .evaluate_states {
    color: #fff;
    background: #3190e8;
  }
  
  .rest {
    color: #6d7885;
    background: #ebf5ff;
  }

  .satisfaction {
    color: #aaa;
    background: #f5f5f5;
  }

  /*评价信息----列表*/
  .evaluate_msg_list {
    width: 100%;
    padding: 0.5rem;
    background: #fff;
  }

  .message_time {
    width: 100%;
    border-top: 0.01rem solid #e4e4e4;
    display: flex;
    justify-content: space-between;
  }

  .message_time > img {
    width: 10%;
    height: 1.5rem;
    border-radius: 50%;
    margin-top: 0.5rem;
  }

  .allMessageList {
    width: 93%;
    margin-left: 0.7rem;
    padding: 0.5rem 0;
    color: #666;
  }

  .allMessageList_name {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  /*底部购物车数据*/
  .bot_shopCart {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    height: 2.5rem;
    color: #fff;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  /*底部开始*/
  .bot_shopCart_left {
    width: 67.5%;
    height: 100%;
    /*#333*/
    background: #333;
    display: flex;
    justify-content: start;
  }

  .bot_shopCart_car {
    width: 3rem;
    height: 3rem;
    background: #3d3d3f;
    border: 0.05rem solid #4ff;
    border-radius: 50%;
    position: absolute;
    top: -1.3rem;
    left: 0.7rem;
    text-align: center;
    line-height: 3rem;
  }

  .bot_shopCart_img {
    font-size: 1.5rem;
  }

  .bot_shopCart_money {
    width: 12rem;
    text-align: center;
  }

  .bot_shopCart_right {
    width: 50%;
    height: 100%;
    /*margin-left: 10.5rem;*/
    background: #535356;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: center;
    line-height: 2.5rem;
  }
</style>
