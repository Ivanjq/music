/**
 * send the jsonp to get json
 * join the params and commonParams
 */
import jsonp from 'assets/js/jsonp.js'
import { commonParams, options } from './config.js'

// 获取轮播图信息
export function getRecommend () {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonp(url, data, options)
}
// 获取排行榜
export function getRankList () {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    '-': 'getUCGI2182617219737759',
    loginUin: 0,
    hostUin: 0,
    platform: 'yqq.json',
    needNewCode: 0,
    data: decodeURIComponent('{"detail":{"module":"musicToplist.ToplistInfoServer","method":"GetDetail","param":{"topId":4,"offset":0,"num":20,"period":"2019-10-30"}},"comm":{"ct":24,"cv":0}}')
  })

  return jsonp(url, data, 'rankList')
}
// 获取歌单列表
export function getSheetList () {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    cgiKey: 'GetHomePage',
    '_': '1572503382921',
    data: decodeURIComponent('{"comm":{"g_tk":5381,"uin":"","format":"json","inCharset":"utf-8","outCharset":"utf-8","notice":0,"platform":"h5","needNewCode":1},"MusicHallHomePage":{"module":"music.musicHall.MusicHallPlatform","method":"MobileWebHome","param":{"ShelfId":[101,102,161]}},"hotkey":{"module":"tencent_musicsoso_hotkey.HotkeyService","method":"GetHotkeyForQQMusicMobile","param":{"remoteplace":"txt.miniapp.wxada7aab80ba27074","searchid":"1559616839293"}}}')
  })

  return jsonp(url, data, 'sheetList')
}
