const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/'
  },
  devServer: {
    contentBase: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'styles')
    ],
    hot: true,
    port: 9123,
    open: true
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/
      },
      {
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'style-loader'
        }),
        test: /\.css$/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 50000
            }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
}

module.exports = config
