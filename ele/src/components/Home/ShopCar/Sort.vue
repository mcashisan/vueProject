<template>
    <div id="sort">
      <div class="sort_list">
        <div>符号</div>
        <div class="sort_right">
          <p style="margin: 0;">智能排序</p>
          <i class="iconfont icon-duihao" style="font-size:0.9rem;font-weight:bold;"></i>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Sort"
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1084936_stdbav5lfa.css";
  #sort {
    width: 100%;
    background: #fff;
    padding-left: 1rem;
  }

  .sort_list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sort_right {
    width: 90%;
    color: grey;
    padding: 0.6rem 0.5rem 0.6rem 0.3rem;
    border-bottom: 0.01rem solid #e4e4e4;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
