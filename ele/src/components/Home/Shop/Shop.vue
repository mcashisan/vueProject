<template>
    <div id="shop">
      <!--//elm.cangdu.org/img/164ad0b6a3917599.jpg-->
      <div id="shopTop" :style="{background:'url('+ 'https://elm.cangdu.org/img/' + shopImg +')',backgroundSize:'400% 400%'}">
        <!--,filter: 'blur('+0.5 +'rem)':背景模糊-->
        <!--商家:merchant 信息-->
        <div class="merchant">
          <div class="merchant_title" @click="xqandshop(newListData)">
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
            <div class="flo" style="width: 75%;height: 25rem;overflow: auto;">
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
                    <p style="font-size: 0.7rem;font-weight: bold;"  @click="shop_particulars(x)">{{x.name}}</p>
                    <p style="color: #666;">{{x.description}}</p>
                    <p>{{x.tips}}</p>
                    <span v-if="x.activity" class="youOrwu" >{{x.activity?x.activity.image_text:''}}</span><br>
                    <div class="allMessage_bot">
                      <p><span style="color: #f60;margin-right:0.2rem;">￥{{x.specfoods[0].price}}</span>起</p>
                      <!--specifications.name-->
                      <div v-for="(v, index) in x.specifications" :key="index">
                        <button v-if="v.name" class="bot" @click="standards(x,y)">选{{v.name}}</button>
                      </div>
                      <div v-if="x.specifications == ''" class="botNum">
                        <div style="width:55%;">
                          <div class="jianHao">
                            <button class="botNo" @click="joinCart_1(x, y)" :class="(x.num>0||x.num!=undefined)?{botNo:true}:{showA:true}">-</button>
                            <p class="numData">{{x.num}}</p>
                          </div>
                        </div>
                        <button class="bot bot1" @click="joinCart_2(x,y)">+</button>
                      </div>
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
      <!--购物车数据-->
      <ChartPrice></ChartPrice>
      <!--弹框-->
      <div class="alertBall" v-show="alertShow" @click="goClear"></div>
      <div class="alertBall_con" v-show="alertShow">
        <div style="padding: 0.5rem 0 0.5rem 0.5rem;">
          <div class="alertBall_con_title">
            <p>{{alertData.name}}</p>
            <p @click="clear_">X</p>
          </div>
          <div class="guige">规格</div>
          <div class="alertBall_protety">
            <!--<div>-->
              <span :class="(v.value)==conD?{aaa:true}:{bbb:true}" @click="moren(v.value)" style="margin-right:0.3rem;" v-for="(v, n) in alertData1" :key="n">{{v.value}}</span>
            <!--</div>-->
          </div>
        </div>
        <div class="alertBall_bottom">
          <div class="alertBall_bottom_money">￥<span style="font-size:0.8rem;font-weight:bold;">20</span></div>
          <div class="alertBall_bottom_bot">
            <button style="background:#3199e8;border: none;outline: none;padding: 0.2rem;border-radius: 0.1rem;" @click="clear_">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Vue from "vue"
    import ChartPrice from "../../../ChartPrice_y"
    export default {
        name: "Shop",
        components: {
          ChartPrice
        },
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
            evaluate_msg_list: [],
            alertData: [], //弹框信息
            alertShow: false,
            alertData1: [], //规格属性
            conD: "默认",
            restaurant_id: "",
            geohash1: "",
            counts: [], //购物车商品数量
            // showA: false
            cunDatas: "",
            new_cunDatas:[],
            numberData: ""
          }
        },
        created() {
          this.restaurant_id = this.$route.query.id;
          this.geohash1 = this.$route.query.jieWei;
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
          this.shows(this.listData);
          // 评价分数
          this.evaluate_grade();
          // 评价分类
          this.evaluate_classify();
          // 评价信息
          this.evaluate_message();
          // 获取到购物车数据numberData
        },
        methods: {
          // 返回上一级页面
          goTo() {
            return this.$router.go(-1)
          },
          //详情
          xqandshop(e){
            this.$router.push({path:"/aaazhi"});
          },
          // 返回商铺列表
          shopFanHui() {
            this.$router.push({path:"/msite"});
          },
          shopDetails() {
            this.myHttp.get("/shopping/v2/menu?restaurant_id="+this.ID, (res) => {
              console.log(res.data);
              this.newListData = res.data;
              this.listData = res.data;
              // 默认值
              this.shopShow = res.data[0];
              this.shopShow1 = res.data[0].foods;
              // console.log(this.shopShow1);
            }, (err) => {
              console.log(err);
            });
          },
          // 进入商品详情页
          shop_particulars(data) {
            this.$router.push({path:"/newDetail", query:{description:data.description,name:data.name,rating:data.rating, month_sales:data.month_sales,rating_count:data.rating_count,satisfy_rate:data.satisfy_rate,imgUrl:data.image_path,price:data.specfoods[0].price}});
            // console.log(data.specfoods[0].price);
          },
          shows(data){
            console.log(data);
            this.shopShow = data;
            this.shopShow1 = data.foods;
            let on = JSON.parse(localStorage.getItem("newCarts"));
              for (let ke in this.shopShow1) {
                // console.log(this.shopShow1[ke]);
                for (let key in on) {
                  if(on[key].name==this.shopShow1[ke].name){
                    this.shopShow1[ke]=on[key]
                  }
                }
                 // localStorage.setItem('newCarts',JSON.stringify());
                // console.log(localStorage.getItem("newCarts"))
            }
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
          standards(n,index) {
            this.alertShow = true;
            console.log(n, index);
            let _this = this;
            n.specfoods.forEach(function (v, i) {
              _this.alertData1 = [];
              _this.alertData1.push({value: "默认"});
              _this.alertData1.push(v.specs[0]);
            })
            this.alertData = n;
            console.log(this.alertData);
            Vue.set(this.counts, index, 1); //更新自定义
            if (n.num == undefined) {
              n.num = 1;
            } else {
              n.num += 1;
            }
            // 存储购物车数据
            let arr111=[];
            let newM = JSON.parse(localStorage.getItem("newCarts"));
            for (let i in newM) {
              if (newM[i].name == n.name) {
                continue;
              }
              arr111.push(newM[i]);
            }
            arr111.push(n);
            localStorage.setItem('newCarts',JSON.stringify(arr111));
          },
          // 点击减号删除数据
          joinCart_1(data, n) {
            this.counts[n] = data.num;
            data.num -= 1;
            //更新数组
            Vue.set(this.counts, n, this.counts[n]-1);
            if (data.num <= 0) {
              this.counts[n] = undefined;
              data.num = undefined;
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
          // 点击加号, 加入购物车
          joinCart_2(data, n) {
            Vue.set(this.counts, n, 1); //更新自定义
            if (data.num == undefined) {
              data.num = 1;
            } else {
              data.num += 1;
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
          //弹框的按钮
          moren(data) {
            this.conD = data;
          },
          // 关闭弹窗
          clear_() {
            this.alertShow = false;
          },
          // 点击蒙版关闭弹窗
          goClear() {
            this.alertShow = false;
          }
        },
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_t66e1ke3gh.css";

  .showA {
    display: none;
  }

  #shop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  a {
    text-decoration: none;
    color: #fff;
  }

  #shopTop {
    padding: 0.5rem 0 0 0;
    font-size: 0.4rem;
    color: #fff;
  }

  .merchant {
    padding: 0 0.5rem;
    overflow: hidden;
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
    height: 25rem;
    overflow: auto;
    paddding-right:0.1rem;
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

  .botNum {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  .bot, .botNo {
    margin-bottom: 0.5rem;
    border: none;
    outline: none;
    border-radius: 0.15rem;
    padding: 0.2rem;
  }

  .jianHao {
    width:100%;
    display: flex;
    justify-content: space-between;
  }

  .bot {
    color: #fff;
    background: #3199e8;
  }

  .botNo {
    color: #3190e8;
    background: #fff;
    border: 0.063rem solid #3190e8;
    padding: 0;
  }

  .numData {
    margin-top: 0.3rem;
    font-weight: bold;
    font-size: 0.8rem;
    color: #666;
  }

  .bot1, .botNo {
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: 50%;
    font-size: 0.9rem;
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

  /*弹窗*/
  .alertBall {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 999;
    background: #000;
    opacity: 0.5;
  }

  .alertBall_con {
    position: fixed;
    top: 9rem;
    left: 2rem;
    z-index: 999;
    width: 12rem;
    height: 9rem;
    border-radius: 0.3rem;
    background: #fff;
    overflow: hidden;
  }

  .alertBall_con_title {
    width: 100%;
    display: flex;
    justify-content: start;
  }

  .alertBall_con_title > p:nth-child(1) {
    width: 90%;
    text-align: center;
    font-size: 0.8rem;
    color: #000;
  }

  .alertBall_con_title > p:nth-child(2) {
    width: 10%;
    font-size: 0.9rem;
  }

  .guige {
    width: 100%;
    margin-top: 0.5rem;
  }

  .alertBall_protety {
    width: 100%;
    margin-top: 0.7rem;
  }

  .bbb, .aaa {
    padding: 0.4rem;
    border-radius: 0.2rem;
  }

  .bbb {
    border: 0.03rem solid grey;
  }

  .aaa {
    color: #3199e8;
    border: 0.03rem solid #3199e8;
  }

  .alertBall_bottom {
    width: 100%;
    padding: 0.6rem 0.5rem;
    background: #f9f9f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.1rem;
  }

  .alertBall_bottom_money {
    color: #ff6000;
  }

  .alertBall_bottom_bot {
    color: #fff;
  }

  .alertBall_bottom_bot > bottom {
    background: #3199e8;
    border-radius: 0.3rem;
    border: none;
    outline: none;
  }
</style>
