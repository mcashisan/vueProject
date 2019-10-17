<template>
    <div id="footers">
      <van-tabbar v-model="active">
        <van-tabbar-item  @click="shouye">
          <span>外卖</span>
          <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
          >
        </van-tabbar-item>
        <van-tabbar-item icon="search" @click="sousuo">搜索</van-tabbar-item>
        <van-tabbar-item icon="orders-o" @click="Indentshop">订单</van-tabbar-item>
        <van-tabbar-item icon="contact" @click="PageJunpToMine">我的</van-tabbar-item>
      </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
          return {
            active: 0,
            icon: {
              normal: require('./img/elemn.png'),
              active: require('./img/elema.png')
            }
          }
        },
      methods:{
          // 跳转首页
        shouye() {
          this.$router.push({path:"/msite"});
        },
        // 搜索
        sousuo() {
          this.$router.push({path:"/search"});
        },

        //跳到Mine页面
        PageJunpToMine(){
          this.$router.push({path:"/footmine"});
        },
        //订单
        Indentshop(){
          this.$router.push({path:"/indents"})
        }
      }
    }
</script>

<style scoped>
  #footers {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
