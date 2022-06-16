const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

const PATHS = {
  src: path.join(__dirname, './src'),
  docs: path.join(__dirname, './docs')
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  
  devServer: {
    static: {
      directory: PATHS.docs
    },    
    watchFiles: ['src/**/*.js', 'src/**/*.scss', 'src/**/*.jsx'],
    open: false,
    port: 1337,
    historyApiFallback: true
  },
});
