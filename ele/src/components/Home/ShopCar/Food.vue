<template>
    <div id="food">
      <!--导航条-->
      <nav id="headers">
        <div class="headers_msg">
          <div class="header_left" @click="foodFanHui">
            <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
          </div>
          <div class="header_con">{{con}}</div>
          <div class="header_left"></div>
        </div>
        <!--筛选框-->
        <div class="classify">
          <div @click="show_Down">
            <span>{{classify_title}}</span>
            <span></span>
          </div>
          <div>
            <span class="classify_border">
              <span>排序</span>
              <span></span>
            </span>
          </div>
          <div>
            <span>筛选</span>
            <span></span>
          </div>
        </div>
        <!--下拉列表-->
        <div class="pullDown_left" v-if="pullDown">
          <shopCon></shopCon>
        </div>
      </nav>
      <!--数据列表-->
      <ShopList></ShopList>
    </div>
</template>

<script>
    import shopCon from "./ShopClassify"
    import ShopList from "../../../components/ShopList"
    export default {
        name: "Food",
        data() {
          return {
            con: "",
            classify_title: "",
            pullDown: false, //下拉绑定变量
            pullDownData: [], // 所有类型的数据
            pullDownData_classify: [], // 所以类型食品数据
          }
        },
        components: {
          shopCon, ShopList
        },
        created() {
          this.con = this.$route.query.title;
          // 食品分类(准时达)
          this.data_classify();
        },
        methods: {
          foodFanHui() {
            return this.$router.go(-1)
          },
          //点击
          show_Down() {
            if (this.pullDown) {
              this.pullDown = false;
            } else {
              this.pullDown = true;
            }
          },
          // 数据分类请求
          data_classify() {
            console.log(this.$route.query.title);
            this.classify_title = this.$route.query.title;
            this.myHttp.get("/shopping/v2/restaurant/category", (res) => {
              // console.log(res.data);
              this.pullDownData = res.data;
            }, (err) => {
              console.log(err);
            });
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_sgqu6lcw6p.css";
  #food {
    padding-top: 4.1rem;
  }

  /*导航条*/
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
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

  .classify {
    width: 100%;
    height: 2rem;
    background: #fff;
    color: #000;
    border-bottom: 0.01rem solid #e4e4e4;
    position: absolute;
    left: 0;
    top: 2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .classify > div {
    width: 33%;
    text-align: center;
  }

  .classify_border {
    display: block;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    border: 0.01rem solid #e4e4e4;
    border-top: 0;
    border-bottom: 0;
  }

  .pullDown_left {
    position: absolute;
    left: 0;
    right: 0;
    top: 4rem;
  }

</style>
