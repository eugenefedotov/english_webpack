var webpack = require('webpack');
var path = require('path');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
  context: path.join( __dirname, '/frontend'),
  entry: {
    app: 'index.js'
  },
  output : {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  resolve: {
    root: [
      path.join( __dirname, '/frontend')
    ]
  },

  module: {
    loaders: [
      { test: /\.html$/, exclude: /node_modules/, loader:"html" },
      { test: /\.js$/, exclude: /node_modules/, loader:"babel", query: { presets: ['es2015', 'stage-1'] }},
      { test: /\.json$/, loader: "json" },
      { test: /\.css$/, loader: "style!css"},
      { test: /\.less$/, loader: "style!css!less"},
      { test: /\.(ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      { test: /\.woff(2)?$/, loader: "url?limit=8192&minetype=application/font-woff"},
      { test: /\.(woff|woff2)\?v=\d+\.\d+\.\d+?$/,loader: 'url?limit=10000&mimetype=application/font-woff&prefix=fonts'},
      { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /\.(svg|gif)$/, loader: 'file'}

    ]
  },

  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new ngAnnotatePlugin({
      add: true
    })
  ],

  devServer: {
    contentBase: "./frontend",
    noInfo: false,
    hot: true
  }
};