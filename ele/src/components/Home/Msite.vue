<template>
    <div id="msite">
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="miste_fanhui">
            <i class="iconfont icon-sousuo1" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con search_Title" @click="goHeader">{{getTile}}</div>
          <div v-if="xiaoren ==''" class="header_left" @click="toLogin"><span>登录</span>|<span>注册</span></div>
          <i v-else class="iconfont icon-xiaoren" @click="toMine"></i>
        </div>
      </nav>
      <!--轮播-->
      <van-swipe class="lbt" indicator-color="white">
        <van-swipe-item>
          <!--geohash=31.22299,121.36025&title=川湘菜&restaurant_category_id=220-->
          <van-grid :column-num="4">

            <van-grid-item
              v-for="(v,i) in arr1"
              :icon="'//fuss10.elemecdn.com'+v.image_url"
              :text="v.title"
              :to="{path:'/food', query:{geohash:aaa, title:v.title, restaurant_category_id:v.id}}"
              :key="i"
            />
          </van-grid>
        </van-swipe-item>
        <van-swipe-item>
          <van-grid :column-num="4">
            <van-grid-item
              v-for="(v,i) in arr2"
              :icon="'//fuss10.elemecdn.com'+v.image_url"
              :text="v.title"
              :to="{path:'/food', query:{geohash:aaa, title:v.title, restaurant_category_id:v.id}}"
              :key="i"
            />
          </van-grid>
        </van-swipe-item>
      </van-swipe>
      <!--数据列表-->
      <div class="nearby">
        <span class="iconfont icon-icon-test" style="font-size: 0.8rem;"></span>
        <p>附近商家</p>
      </div>
      <!--引入商家列表组件-->
      <shopList></shopList>
      <!--底部导航-->
      <Footer></Footer>
    </div>
</template>

<script>
    import shopList from "../../components/ShopList"
    import Footer from "../../components/Footer"
    export default {
        name: "Msite",
        components: {
          shopList,
          Footer
        },
        data() {
          return {
            dataTitle: "",
            // 创建数组储存轮播图信息
            arr1: [],
            arr2: [],
            aaa: "",
            xiaoren:""
          }
        },
        methods: {
          //跳搜索
          goHeader() {
            this.$router.push({path:"/home"});
          },
          // 跳转到login页面
          toLogin() {
            this.$router.push({path: "/login",query:{}});
          },
          // 跳到我的页面
          toMine() {
            this.$router.push({path: "/footmine"});
          },
          // 返回
          miste_fanhui() {
            this.$router.push({path:"/home"});
          },
          // 页面展示请求
          getMessageAll() {
            this.myHttp.get("/v2/index_entry", (res) => {
              this.arr1 = res.data.slice(0, 8);
              this.arr2 = res.data.slice(8, 16);
              console.log(res.data);
            }, (err) => {
              console.log(err);
            });
          }
        },
        created() {
          this.xiaoren = this.$route.query.username;
          this.getMessageAll();
          this.aaa = this.$route.query.aaa;
        },
        computed: {
          getTile() {
            return this.$route.query.geoHash;
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_492sa80v98i.css";

  #msite {
    margin-bottom: 1.5rem;
  }

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
    width: 20%;
    text-align: left;
  }

  .header_con {
    width: 60%;
    font-size: 1rem;
    font-weight: bold;
    margin-left: -0.6rem;
  }

  .search_Title {
    width: 8rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size: 0.8rem;
  }

  .nearby {
    margin-top: 0.5rem;
    background: #fff;
    padding: 0.3rem 0.5rem;
    font-size: 0.6rem;
    border-top: 0.01rem solid #e4e4e4;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .nearby > p {
    margin-left: 0.2rem;
    margin-top: 0.3rem;
  }
</style>
