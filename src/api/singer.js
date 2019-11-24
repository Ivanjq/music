/**
 * send the jsonp to get json
 * join the params and commonParams
 */
import jsonp from 'assets/js/jsonp.js'
import { commonParams } from './config.js'

// 获取歌手列表
export function getSingerList (params) {
  const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'

  const data = Object.assign({}, commonParams, {
    '-': 'getUCGI2182617219737759',
    loginUin: 0,
    hostUin: 0,
    format: 'json',
    platform: 'yqq.json',
    needNewCode: 0,
    data: decodeURIComponent('{"comm":{"ct":24,"cv":0},"singerList":{"module":"Music.SingerListServer","method":"get_singer_list","param":{"area":-100,"sex":-100,"genre":-100,"index":' + params + ',"sin":0,"cur_page":1}}}')
  })

  return jsonp(url, data, 'singerList')
}
