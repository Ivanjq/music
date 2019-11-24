<template>
  <div class="loading">
    <img width="35" height="35" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>
<style scoped lang="stylus">
@import "~assets/stylus/variable"
.loading
  width: 100%
  height: 100%
  margin-top: 50%
  text-align: center
  .desc
    line-height: 20px
    font-size: $font-size-large
    color: $color-text-l
</style>
