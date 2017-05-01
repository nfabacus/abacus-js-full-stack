var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "lodash",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "redux",
  "redux-form",
  "redux-thunk",
  "bootstrap-loader"
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: 'raw',
        test: /\.html$/
      },
      {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
              'style',
              'css',
              'autoprefixer?browsers=last 3 versions',
              'sass?outputStyle=expanded'
          ]
      }
    ]
  },
  plugins: [
    // CommonsChunkPlugin will see the different entry points and if it finds duplicates, it will only include the code only on the named output, in the below case, 'vendor'
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']   //manifest is to tell webpack more detais about whether 'vendor' file is actually changed when cache busting.
    }),
    // HtmlWebpackPlugin will create reference links for the files automatically, inside the html specified in template below.
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
