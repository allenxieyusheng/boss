module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },

  // 问你是否使用eslint,设置为时true，eslint-loader将发出lint错误作为警告。默认情况下，警告仅记录到终端，并且不会使编译失败
  lintOnSave: false,

  // proxyTable: { 
  //   '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
  //     target: 'http://f.apiplus.cn', //源地址 
  //     changeOrigin: true, //改变源 
  //     pathRewrite: { 
  //       '^/api': 'http://f.apiplus.cn' //路径重写 
  //       } 
  //   } 
  // }

  
}
