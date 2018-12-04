
module.exports = {
    lintOnSave: false,

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'sass',
        patterns: []
      }
    },

    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // data: `@import "@/variables.scss";`
            }
        }
    }
}
