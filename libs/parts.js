const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

exports.indexTemplate = function(options) {
  return {
    plugins: [
      new HtmlWebpackPlugin({
        template: require('html-webpack-template'),
        title: options.title,
        appMountId: options.appMountId,
        inject: false
      })
    ]
  };
}


// Start extending

exports.processExpress = function(path){
  return{
    target: 'node',
    entry: './server.js',
    output: {
      path: path,
      filename: 'bundleserv.js'
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
  }
}


exports.server = function(options){
  return{
    entry: options.entry,
    target: 'node',
    output: {
      path: options.output,
      filename: options.filename
    }
  };
}

// end customization

exports.loadJSX = function(include) {
  return {
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          // Enable caching for extra performance
          loaders: ['babel?cacheDirectory'],
          include: include
        }
      ]
    }
  };
}

exports.loadIsparta = function(include) {
  return {
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['isparta-instrumenter'],
          include: include
        }
      ]
    }
  };
}

exports.loadJson = function(){
  return{
    module: {
      preLoaders: [
        {
          test: /\.json$/,
          loader: "json-loader"
        }
      ]
    }
  };
}

exports.lintJSX = function(include) {
  return {
    module: {
      preLoaders: [
        {
          test: /\.(js|jsx)$/,
          loaders: ['eslint'],
          include: include
        }
      ]
    }
  };
}

exports.enableReactPerformanceTools = function() {
  return {
    module: {
      loaders: [
        {
          test: require.resolve('react'),
          loader: 'expose?React'
        }
      ]
    }
  };
}

exports.devServer = function(options) {
  const ret = {
    devServer: {
      // Enable history API fallback so HTML5 History API based
      // routing works. This is a good default that will come
      // in handy in more complicated setups.
      historyApiFallback: true,

      // Unlike the cli flag, this doesn't set
      // HotModuleReplacementPlugin!
      hot: true,
      inline: true,

      // Display only errors to reduce the amount of output.
      stats: 'errors-only',

      // Parse host and port from env to allow customization.
      //
      // If you use Vagrant or Cloud9, set
      // host: options.host || '0.0.0.0';
      //
      // 0.0.0.0 is available to all network devices
      // unlike default `localhost`.
      host: options.host, // Defaults to `localhost`
      port: options.port // Defaults to 8080
    },
    plugins: [
      // Enable multi-pass compilation for enhanced performance
      // in larger projects. Good default.
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
  };

  if(options.poll) {
    ret.watchOptions = {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,
      // Poll using interval (in ms, accepts boolean too)
      poll: 1000
    };
  }

  return ret;
}

exports.setupCSS = function(paths) {
  return {
    module: {
      loaders: [
        {
          test: /\.css$/,
          loaders: ['style-loader','css-loader']
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
       ]
    }
  };
}

//{test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
//{test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
//{test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
//{test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}


exports.minify = function() {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  };
}

exports.setFreeVariable = function(key, value) {
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins: [
      new webpack.DefinePlugin(env)
    ]
  };
}

exports.extractBundle = function(options) {
  const entry = {};
  entry[options.name] = options.entries;

  return {
    // Define an entry point needed for splitting.
    entry: entry,
    plugins: [
      // Extract bundle and manifest files. Manifest is
      // needed for reliable caching.
      new webpack.optimize.CommonsChunkPlugin({
        names: [options.name, 'manifest'],

        // options.name modules only
        minChunks: Infinity
      })
    ]
  };
}

exports.clean = function(path) {
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root: process.cwd()
      })
    ]
  };
}

exports.extractCSS = function(paths) {
  return {
    module: {
      loaders: [
        // Extract CSS during build
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
          include: paths
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
}

exports.npmInstall = function(options) {
  options = options || {};

  return {
    plugins: [
      new NpmInstallPlugin(options)
    ]
  };
}
