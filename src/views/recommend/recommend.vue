<template>
  <scroll :data='recommends' class="recommend" ref="recommend">
    <div class="recommend-content">
      <div v-if='recommends.length' class="slider-wrapper" ref="sliderWrapper">
        <slider>
          <div v-for="(item, index) in recommends" :key="index">
            <a :href="item.linkUrl">
              <img class="needsclick" @load="loadImage" :src="item.picUrl"/>
            </a>
          </div>
        </slider>
      </div>
      <div class="recommend-list" v-for="(items, indexs) in sheetList" :key="indexs">
        <h1 class="list-title">{{items.title_template}}</h1>
        <ul>
          <li class="item" v-for="(item, index) in items.v_niche[0].v_card" :key="index">
            <div class="icon">
              <img width="60" height="60" v-lazy="item.cover">
            </div>
            <div class="text">
              <h2 class="name" v-html="item.title"></h2>
              <p class="desc">{{item.time | formatDate}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="loading-container" v-show="!sheetList.length">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import { formatDate } from 'assets/js/data'
import slider from 'components/slider/slider'
import scroll from 'components/scroll/scroll'
import loading from 'components/loading/loading'
import { getRecommend, getSheetList } from 'api/recommend'
import { ERR_OK } from 'api/config'

export default {
  data () {
    return {
      recommends: [],
      sheetList: []
    }
  },
  created () {
    this._getRecommend()
    setTimeout(() => {
      this._getSheetList()
    }, 2000)
  },
  filters: {
    formatDate (time) {
      let date = new Date(time)
      return formatDate(date, 'yyyy-MM-dd hh:mm')
    }
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.recommends = res.data.slider
        }
      })
    },
    _getSheetList () {
      getSheetList().then((res) => {
        if (res.code === ERR_OK) {
          this.sheetList = res.MusicHallHomePage.data.v_shelf
        }
      })
    },
    loadImage () { // 图片加载后重新计算高度
      if (!this.checkloaded) {
        this.checkloaded = true
        this.$refs.recommend.refresh()
      }
    }
  },
  components: {
    slider,
    scroll,
    loading
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~assets/stylus/variable"
.recommend
  position: fixed
  width: 100%
  top: 88px
  bottom: 0
  .recommend-content
    .slider-wrapper
      position: relative
      width: 100%
      overflow: hidden
    .recommend-list
      .list-title
        height: 65px
        line-height: 65px
        text-align: center
        font-size: $font-size-medium
        color: $color-theme
      .item
        display: flex
        box-sizing: border-box
        align-items: center
        padding: 0 20px 20px 20px
        .icon
          flex: 0 0 60px
          width: 60px
          padding-right: 20px
        .text
          display: flex
          flex-direction: column
          justify-content: center
          flex: 1
          line-height: 20px
          overflow: hidden
          font-size: $font-size-medium
          .name
            margin-bottom: 10px
            color: $color-text
          .desc
            color: $color-text-d
    .loading-container
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
