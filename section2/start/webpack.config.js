const path = require('path');

const config = {
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  }
}

module.exports = config;
