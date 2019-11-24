<template>
  <div class="singer" ref="singer">
    <scrollList ref="list" :data='singers'></scrollList>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import { ERR_OK, SCROLLVIEW } from 'api/config'
import Singer from 'assets/js/singer'
import scrollList from 'components/scrollList/scrollList'

export default {
  components: {
    scrollList
  },
  data () {
    return {
      singers: []
    }
  },
  mounted () {
    Object.values(SCROLLVIEW).forEach((item) => {
      this._getSingerList(item)
    })
  },
  methods: {
    _getSingerList (params) {
      getSingerList(params.INDEX).then((res) => {
        if (res.code === ERR_OK) {
          let list = res.singerList.data.singerlist
          this._operateSinger(params, list)
        }
      })
    },
    _operateSinger (params, list) {
      params.DATA = {
        name: params.NAME,
        title: params.TITLE,
        items: []
      }
      list.forEach((item, index) => {
        if (params.NAME === 'hot') {
          if (index < params.LENGTH) {
            params.DATA.items.push(new Singer(item))
          }
        } else {
          params.DATA.items.push(new Singer(item))
        }
      })
      this.singers.push(params.DATA)
      this._normalLizeSinger()
    },
    _normalLizeSinger () {
      let hot = []
      let ret = []
      for (let key in this.singers) {
        let val = this.singers[key]
        if (val.name === 'hot') {
          hot.push(val)
        } else if (val.name.match(/[a-zA-Z]/)) {
          ret.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.name.charCodeAt(0) - b.name.charCodeAt(0)
      })
      this.singers = hot.concat(ret)
    }
  },
  watch: {
    singers: {
      handler (newData, oldData) {
        this.singers = newData
      }
    }
  }
}
</script>
<style scoped lang="stylus">
.singer
  position: fixed
  top: 88px
  bottom: 0
  width: 100%
</style>
