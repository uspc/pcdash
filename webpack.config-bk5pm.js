var webpack = require('webpack');
const path = require('path');
var fs = require('fs');


var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
      return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
      nodeModules[mod] = 'commonjs ' + mod;
    });

const PATHS = {
  app: path.join(__dirname, 'app','server'),
  main: path.join(__dirname,'app','server','servermain.js'),
  build: path.join(__dirname,'build','serv'),
  style: [
    path.join(__dirname, 'app', 'main.css')
  ]
}

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  cache: true,
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    definePlugin
  ],
  entry: {
    main:  PATHS.main,
    vendors: ['react']
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  resolve: { modulesDirectories: ['node_modules', 'src'], extension: ['', '.js', '.scss'] },
  output: {
    path: PATHS.build,
    filename: 'serverEntry.js'
  },
  externals: nodeModules,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: ['babel-loader','reach-hot'],
        include: PATHS.app,
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: PATHS.app,
        query: { presets: ['react', 'es2015'] }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
};