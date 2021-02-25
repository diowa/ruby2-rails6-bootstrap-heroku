process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const { merge } = require('@rails/webpacker')
const webpackConfig = require('./base')

const StyleLintPlugin = require('stylelint-webpack-plugin')

const customConfig = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /vendor\/.+\.js$/,
        loader: 'standard-loader',
        options: {
          error: true,
          globals: [
            '$'
          ]
        }
      }
    ]
  },
  plugins: [
    new StyleLintPlugin({
      files: '/app/**/*.(s(c|a)ss|css)'
    })
  ],
  devServer: {
    stats: {
      colors: true
    }
  }
}

module.exports = merge(webpackConfig, customConfig)
