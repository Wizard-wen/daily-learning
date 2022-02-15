const path = require('path');

module.exports = {
  // output: {
  //   filename: path.join(__dirname, 'dist/client.html')
  // },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
