<template>
  <div id="search">
    <!--导航条-->
    <nav id="headers">
      <div class="headers_msg">
        <div class="header_left" @click="searchFan">
          <i class="iconfont icon-arrowRight-copy" style="font-size: 1rem;font-weight: bold;"></i>
        </div>
        <div class="header_con">搜索</div>
        <div class="header_left"></div>
      </div>
    </nav>
    <div class="search_header">
      <div class="search_int">
        <input type="search" placeholder="请输入商家或美食名称" v-model="historyDatss">
      </div>
      <button class="submitBot" @click="historyList">提交</button>
    </div>
    <div v-if="show_on1" class="merchant">
      <p style="padding: 0.5rem;">商家</p>
      <div v-for="(v, index) in searchDatas" :key="index" @click="goShop(v)">
        <div class="merchant_list">
          <img :src="'//elm.cangdu.org/img/'+v.image_path" alt="" style="width:2rem;height:2rem;">
          <div class="merchant_message">
            <p>
              <span>{{v.name}}</span>
              <span style="border:0.01rem solid rgb(255, 96, 0);color:rgb(255, 96, 0);">&nbsp;支付</span>
            </p>
            <p>月售&nbsp;{{v.recent_order_num}}&nbsp;单</p>
            <p>
              <span>{{v.float_minimum_order_amount}}&nbsp;元起送&nbsp;/</span>
              <span>&nbsp;距离&nbsp;{{v.distance}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="his_list" v-if="show_on">
      <p style="padding: 0.5rem;">搜索历史</p>
      <ul class="history_list">
        <li v-for="(v, index) in allName" :key="index">
          <div class="list_one">
            <p>{{v.name}}</p>
            <p @click="delete_(index)">X</p>
          </div>
        </li>
        <div class="clear_allData" @click="clear_allData">清空搜索历史</div>
      </ul>
    </div>
    <!--底部导航条-->
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from "../../components/Footer"
  export default {
    name: "Search",
    components: {Footer},
    data() {
      return {
        historyDatss: "", // 数据绑定
        show_on: true,
        show_on1: false,
        searchDatas: [],
        allName: [1], //存储数据
        hisAll_list: [], //取数据
      }
    },
    methods: {
      // 点击跳转到shop页面
      goShop(data) {
        this.show_on = true;
        this.show_on1 = false;
        // this.$router.push({path: "/shop"});
        if (localStorage.getItem("allDatas") == null) {
          this.allName.push({"name": data.name});
        } else {
          this.allName = JSON.parse(localStorage.getItem("allDatas"));
          this.allName.push({"name": data.name});
        }
        localStorage.setItem("allDatas", JSON.stringify(this.allName));
      },
      searchFan() {
        this.$router.go(-1);
      },
      //发起网络请求
      historyList() {
        this.show_on = false;
        this.show_on1 = true;
        this.myHttp.get("/v4/restaurants?geohash=31.22967,121.4762&keyword=" + this.historyDatss, (res) => {
          console.log(res);
          this.searchDatas = res.data;
        }, (err) => {
          console.log(err);
        });
      },
      //点击删除当前这条数据
      delete_(n) {
        this.allName.splice(n, 1);
        localStorage.setItem("allDatas", JSON.stringify(this.allName));
        if (this.allName.length <= 0) {
          this.show_on = false;
        }
      },
      // 清空搜索历史
      clear_allData() {
        this.show_on = false;
        localStorage.clear();
      }
    },
    created() {
      this.allName = JSON.parse(localStorage.getItem("allDatas"));
      if (this.allName == "" || this.allName == null) {
        this.show_on = false;
      }
    }
  }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_89o5dxhawbk.css";
  #headers {
    height: 2rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    background: #3190e8;
  }

  .headers_msg {
    display: flex;
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

  #search {
    color: #666;
    font-weight: bold;
  }

  .search_header {
    padding: 0.5rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .search_int {
    width: 79%;
    padding: 0.3rem;
    border: 0.05rem solid #e4e4e4;
    border-radius: 0.15rem;
    background: #f2f2f2;
  }

  .search_int > input {
    border: none;
    outline: none;
    background: #f2f2f2;
  }

  .submitBot {
    width: 20%;
    padding: 0.3rem;
    font-size: 0.65rem;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 0.15rem;
    color: #fff;
    background: #3190e8;
  }

  .merchant {
    padding-bottom: 2.2rem;
  }
  /*搜索商家列表*/
  .merchant_list {
    padding: 0.5rem;
    background: #fff;
    border-bottom: 0.025rem solid #e4e4e4;
  }

  .merchant_list {
    display: flex;
    justify-content: start;
  }

  .merchant_message {
    width: 90%;
    margin-left: 0.3rem;
    font-size: 0.4rem;
    border-bottom: 0.01rem solid #e4e4e4;
  }

  .history_list {
    background: #fff;
  }

  p {
    margin: 0;
  }

  .list_one {
    padding: 0.6rem 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .history_list > li {
    border-bottom: .025rem solid #e4e4e4;
  }

  .clear_allData {
    padding: 0.5rem;
    text-align: center;
    font-size: 0.7rem;
    color: #3190e8;
    background: #fff;
  }

</style>
