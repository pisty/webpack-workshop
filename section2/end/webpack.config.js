const path = require('path')

const config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
        test: /\.sass|scss$/
      }
    ]
  }
}

module.exports = config
