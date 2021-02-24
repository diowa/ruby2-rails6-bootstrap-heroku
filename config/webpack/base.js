const { webpackConfig, merge } = require('@rails/webpacker')

const webpack = require('webpack')

const customConfig = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: 'resolve-url-loader'
      },
      {
        test: /\.handlebars$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      // jQuery
      $: 'jquery',
      jQuery: 'jquery',
      jquery: 'jquery',

      // Window
      'window.jQuery': 'jquery',

      // Bootstrap dependencies
      Popper: ['popper.js', 'default'],

      // Individual Bootstrap plugins
      Util:"exports-loader?Util!bootstrap/js/dist/util",
      Tooltip:"exports-loader?Tooltip!bootstrap/js/dist/tooltip",
      Popover:"exports-loader?Popover!bootstrap/js/dist/popover",
      Alert:"exports-loader?Alert!bootstrap/js/dist/alert",
      Carousel:"exports-loader?Carousel!bootstrap/js/dist/carousel",
      Dropdown:"exports-loader?Dropdown!bootstrap/js/dist/dropdown",
      Modal:"exports-loader?Modal!bootstrap/js/dist/modal",
      Tab:"exports-loader?Tab!bootstrap/js/dist/tab",
      Scrollspy:"exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
      Collapse:"exports-loader?Collapse!bootstrap/js/dist/collapse",
      Button:"exports-loader?Button!bootstrap/js/dist/button"
    })
  ]
}

module.exports = merge(webpackConfig, customConfig)
