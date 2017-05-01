var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
  "lodash",
  "bootstrap-loader",
  "jquery",
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
          exclude: /node_modules/,
          loaders: [
              'style-loader',
              'css-loader',
              'autoprefixer-loader?browsers=last 3 versions',
              'sass-loader?outputStyle=expanded'
          ]
      },
      {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
      },
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
