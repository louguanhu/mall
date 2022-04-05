const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  alias:{
    'assets':'@/assets',
    'components':'@/components',

  }
})