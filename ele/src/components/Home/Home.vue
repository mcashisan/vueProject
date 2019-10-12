<template>
  <div id="home">
    <!--当前城市, 定位城市-->
    <div class="presentCity">
      <div class="presentCity_header">
        <p>当前定位城市:</p>
        <p>定位不准时, 请在城市列表选择</p>
      </div>
      <div class="presentCity_footer">
        <router-link :to="{}" class="iconfont icon-jiantou-copy" style="font-size:1rem;font-weight:bold;"></router-link>
      </div>
    </div>
    <!--热门城市列表-->
    <div class="hotCity">
      <div>
        <span style="margin-left: 0.5rem;">热门城市</span>
      </div>
      <router-link class="newHot" :to="{path:'/city', query:{id:hotCon.id, name:hotCon.name}}" v-for="(hotCon, index) in hotCityName" :key="index" >
        {{hotCon.name}}
      </router-link>
      <div style="clear: both;"></div>
    </div>
    <!--所有城市列表-->
      <div v-for="(con, index) in arr1" :key="index" class="row" style="overflow: hidden;">
        <div class="cityHeader">
          <span style="margin-left: 0.5rem">{{con}}</span>
        </div>
        <router-link class="newAll"  :to="{path:'/city', query:{id:con1.id, name:con1.name}}" v-for="(con1, index) in arr2[con]" :key="index">{{con1.name}}</router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        // 热门城市
        hotCityName: [],
        // 所有城市
        arr1: [],
        arr2: []
      }
    },
    methods: {
      // 经纬度定位
      local() {
        this.myHttp.get("/v2/pois/geohash", (res) => {
          console.log(res);
        }, (err) => {
          console.log(err);
        });
      },
      //热门城市
      hotCity() {
        this.myHttp.get("/v1/cities?type=hot", (res) => {
          let _this = this;
          res.data.forEach(function(v, i) {
            _this.hotCityName.push(v);
          });
        }, (err) => {
          console.log(err);
        });
      },
      //所有城市列表请求
      allCity() {
        this.myHttp.get("/v1/cities?type=group", (res) => {
          this.arr2 = res.data;
          console.log(res.data);
          for (let v in res.data) {
            this.arr1.push(v);
          }
          this.arr1.sort();
        }, (err) => {
          console.log(err);
        });
      }
    },
    created() {
      this.local(); //经纬度定位城市
      this.hotCity(); // 热门城市
      this.allCity(); // 所有城市
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_o73md0pauc.css";
  #home {
   font-size: 0.7rem;
  }

  /*定位城市*/
  .presentCity {
    background: #fff;
    font-size: 0.5rem;
  }
  
  /*热门城市*/
  .hotCity {
    margin-top: 0.5rem;
    background: #fff;
  }

  .hotCity > div {
    line-height: 1.5rem;
    border-bottom: 0.01rem solid #e4e4e4;
  }

  .newHot {
    display: block;
    float: left;
    width: 24.75%;
    line-height: 1.5rem;
    padding: 0.01rem 0.015rem;
    border: 0.005rem solid #e4e4e4;
    background: #fff;
  }

  .presentCity_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .presentCity_header, .presentCity_footer {
    padding: 0 0.5rem;
    line-height: 1.7rem;
    border-bottom: 0.01rem solid #e4e4e4;
  }

  .presentCity_footer{
    text-align: right;
    font-size: 1rem;
  }

  .cityHeader {
    height: 1.2rem;
    line-height: 1.2rem;
    border-top: 0.01rem solid #e4e4e4;
    border-bottom: 0.01rem solid #e4e4e4;
    margin-top: 0.5rem;
    background: white;
  }

  .newAll {
    float:left;
    display: block;
    width: 24.75%;
    line-height: 1.5rem;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    border: 0.005rem solid #e4e4e4;
    border-top: 0;
    padding: 0.01rem 0.015rem;
    background: white;
  }
</style>
