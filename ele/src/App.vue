<template>
  <div id="app">
    <!--<Header></Header>-->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  // import Header from "./components/Header"
  import Footer from "./components/Footer"
export default {
  name: 'App',
  components: {
    // Header,
    Footer
  }
}
</script>

<style>
  /*@import "//at.alicdn.com/t/font_1084936_jq9kmpk8nls.css";*/
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }

  #app {
    font-size: 0.6rem;
    color: #666;
    background: #f5f5f5;
  }

  a {
    text-align: center;
    text-decoration: none;
    color: #666;
  }
</style>
