<template>
  <div class="tab">
    <router-link class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/variable"
.tab
  position relative
  display: flex
  width: 100%
  height: 44px
  line-height: 44px
  z-index: 2
  background: $color-background
  font-size: $font-size-medium
  .tab-item
    flex: 1
    text-align: center
    .tab-link
      padding-bottom: 5px
      color: $color-text-l
    &.router-link-active
      .tab-link
        color: $color-theme
        border-bottom: 2px solid $color-theme
</style>
