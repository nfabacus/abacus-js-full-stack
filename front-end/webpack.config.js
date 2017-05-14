var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
  "axios",
  "babel-preset-stage-1",
  "bootstrap",
  "history",
  "jquery",
  "tether",
  "lodash",
  "react",
  "react-dom",
  "react-redux",
  "react-router",
  "react-router-redux",
  "redux",
  "redux-form",
  "redux-thunk"
];

module.exports = {
  entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
  devtool: 'source-map',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },

    devServer: {

      historyApiFallback: true, // true for index.html upon 404, object for multiple paths
      hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
      https: false, // true for self-signed, object for cert authority
      noInfo: true, // only errors & warns on hot reload
      // ...
    },
    module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },
      {
        use: 'raw-loader',
        test: /\.html$/
      },
      {
          test: /\.scss$/,
          // exclude: /node_modules/,
          loaders: [
              'style-loader', //from webpack2 you have to use style-loader for below loaders to take effect. this will covert css to javascript.
              'css-loader',
              'autoprefixer-loader?browsers=last 3 versions',
              'sass-loader?outputStyle=expanded' //this one is applied first.
          ]
      },
      {
          test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
          'jQuery': 'jquery',
          'window.jQuery': 'jquery',
          'window.$': 'jquery',
          Tether: "tether",
          "window.Tether": "tether",
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
          Button: "exports-loader?Button!bootstrap/js/dist/button",
          Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
          Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
          Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
          Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
          Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
          Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
          Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
          Util: "exports-loader?Util!bootstrap/js/dist/util"
        }),
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
