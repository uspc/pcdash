module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  },
  node: {
    fs: "empty",
    net: "empty"
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};


//"deploy": "NODE_ENV=production webpack -p --config webpack.production.config.js"