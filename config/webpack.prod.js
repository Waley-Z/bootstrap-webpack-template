const { mergeWithRules } = require('webpack-merge');
const common = require('./webpack.common.js');
const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = mergeWithRules({
    module: {
        rules: {
          test: 'match',
          use: {
            loader: 'match',
            options: 'replace'
          }, 
        }
      }
})(common, {
  mode: 'production',
//   devtool: 'source-map',
  module: {
    rules: [
    {
        test: /\.(scss)$/,
        use: [
        {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer"],
                  purgecss({
                      content: ['./**/*.html']
                  })
                ]
              }
            }
          },
        ]
      }
    ]
  }
})