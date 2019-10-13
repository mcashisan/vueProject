<template>
    <div id="food">
      <!--导航条-->
      <nav id="headers">
        <div class="row">
          <p class="path_" @click="goTo"><</p>
          <div class="search_Title">{{con}}</div>
          <p class="path_"></p>
        </div>
        <!--筛选框-->
        <div style="width: 100%;height: 2rem; background: pink;position: absolute;left: 0;"></div>
      </nav>
      <!--数据列表-->
      <ShopList></ShopList>
    </div>
</template>

<script>
  import ShopList from "../../../components/ShopList"
    export default {
        name: "Food",
        data() {
          return {
            con: ""
          }
        },
        components: {
          ShopList
        },
        created() {
          this.con = this.$route.query.title;
        },
        methods: {
          goTo() {
            return this.$router.go(-1)
          }
        }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_wvn10akwfmn.css";
  #food {
    padding-top: 4rem;
  }

  #headers {
    height: 4rem;
    padding: 0 0.5rem;
    color: white;
    line-height: 2rem;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
  }

  .row {
    height: 2rem;
    display:flex;
    justify-content: start;
    text-align: center;
    color: #fff;
    background: #3190e8;
    font-size: 1rem;
    font-weight: bold;
  }

  .path_ {
    display: block;
    width: 15%;
    color: #fff;
  }

  .search_Title {
    width: 65%;
  }
</style>
