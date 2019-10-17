<template>
    <div id="title">
      <div id="div1">东北大混沌</div>
      <div id="div2">
      <p class="p1">优惠信息</p>
      <p class="p2"><span id="span1">减</span>满30减5，满60减8(APP专享)</p>
    </div>
      <div id="div3">
        <p class="p1">优惠信息</p>
        <p class="p2">满30减5，满60减8(APP专享)</p>
      </div>
      <div id="a1">+</div>
      <div id="a2">+</div>
      <div id="a3">×</div>
    </div>
</template>

<script>
    export default {
        name: "Blackwhite"
    }
</script>

<style scoped>
#title{
  background-color: rgba(0,0,0,0.7);
  color: white;
  position: absolute;
}
  #div1{
    width: 100%;
    text-align: center;
    font-size: 0.79rem;
    padding-top: 1rem;
  }
  #div2{
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }
  .p1{
    border: 1px solid white;
    width: 2.7rem;
    border-radius: 30%;
    margin-left: 50%;
    padding:0.1rem;
  }
  #a1{
    position:absolute;
    right: 0;
    top: 84%;
    margin: 0;
    border: 1px solid blue;
    color: black;
    width:0.5rem;
    background-color: blue;
    border-radius: 50%;
    font-size: 0.5rem;
  }
  #a2{
    position:absolute;
    right: 0;
    top: 94%;
    margin: 0;
    border: 1px solid blue;
    color: black;
    width:0.5rem;
    background-color: blue;
    border-radius: 50%;
    font-size: 0.5rem;
  }
  #a3{
    position: relative;
    bottom: 0;
    left: 50%;
    margin: 0;
    width: 2rem;
    height: 2rem;
    font-size: 1.6rem;
    /*background-color:rgba(0,0,0,0.7);*/
    text-align: center;
    border: 1px solid white;
    border-radius: 50%;
  }
  #span1{
    background-color: indianred;
    padding-left: 0.1rem;
    padding-top: 0.1rem;
    margin-right: 0.14rem;
    font-weight: bold;
  }
</style>
