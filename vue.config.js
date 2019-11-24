const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config)=>{
    config.resolve.alias
    .set('src', resolve('src'))
    .set('api',resolve('src/api'))
    .set('assets',resolve('src/assets'))
    .set('components',resolve('src/components'))
    .set('views',resolve('src/views'))
    // .set('base',resolve('src/base'))
    // .set('static',resolve('src/static'))
  },
  devServer: {
    host: '127.0.0.1',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: null
  }
}
