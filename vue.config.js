const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/bufan': {
        target: 'http://shop.bufantec.com'
      }
    }
  }
})
