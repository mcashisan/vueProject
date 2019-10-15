<template>
    <div class="down_box">
      <div style="width: 50%;">
        <div v-for="(v, n) in leftAllData" :key="n">
          <div class="down_dataList">
            <!--左边-->
            <div class="dataList_left_all" :class="yesOrNo == v.name ? {bgdShow:true}: {bgdShow:false}" @click="get_downData(v)">
              <div  class="dataList_con">
                <img :src="(n>0||v.image_url!='')?'https://fuss10.elemecdn.com/'+v.image_url+'.png':'//elm.cangdu.org/img/default.jpg'" alt="" style="width: 0.9rem;height:0.9rem;">
                <span>{{v.name}}</span>
              </div>
              <div>
                <span class="radius_">{{v.count}}</span>
                <i v-if="n>0" class="iconfont icon-jiantou-copy"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--右边-->
      <div class="dataList_right_all">
        <div v-for="(con, n) in rightAllData.sub_categories" :key="index">
          <div class="dataList_right_msg">
            <p>{{con.name}}</p>
            <p>{{con.count}}</p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ShopClassify",
        data() {
          return {
            yesOrNo: '异国料理',
            leftAllData: [], //分类下拉框所有数据
            rightAllData: [], //分类食品
          }
        },
        created() {
          this .getClassify();
        },
        methods: {
          getClassify() {
            this.myHttp.get("/shopping/v2/restaurant/category", (res) => {
              console.log(res);
              this.leftAllData = res.data;
              console.log(this.leftAllData);
            }, (err) => {
              console.log(err);
            });
          },
          get_downData(con) {
            this.yesOrNo = con.name;
            // console.log(con, index);
            this.rightAllData = con;
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_sgqu6lcw6p.css";

  .down_box {
    width: 100%;
    height: 18rem;
    display: flex;
    justify-content: start;
    background: darkgrey;
  }

  .down_dataList {
    width: 100%;
  }

  .dataList_left_all {
    width: 100%;
    padding: 0 0.5rem;
    color: #000;
    background: darkgrey;
    display: flex;
    justify-content: space-between;
  }

  .bgdShow {
    background: #fff;
  }

  .dataList_right_all {
    width: 50%;
    /*line-height: 2rem;*/
    background: #fff;
    padding-left: 0.5rem;
    overflow: auto;
  }

  .dataList_right_msg {
    width: 100%;
    padding: 0 0.5rem;
    border-bottom: 0.01rem solid #e4e4e4;
    color: #000;
    background: #fff;
    display: flex;
    justify-content: space-between;
  }

  .dataList_right_msg > p {
    margin: 0;
  }
</style>
