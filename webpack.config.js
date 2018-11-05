const prodConfig = require('./webpack-prod.config.js')
const devConfig = require('./webpack-dev.config.js')
const path = require('path');


/**
 * combines and returns the properties from a base webpack
 * config object with the properties of a prod or dev webpack
 * config object. Prod or dev webpack properties have priority.
 */
const configBuilder = (config = {}) => {
  return Object.assign({}, {
    entry: ['./src/frontend/index.js'],
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[name].[chunkhash].js',
      path: path.resolve(__dirname, 'src/backend/public/js'),
      publicPath: '/assets/js/'
    },
    resolve: {
      extensions: ['.js', '.styl']
    },
    module: {
      rules: [
        {
          test: /.js$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader'
            }
          ]
        },
        {
          test: /\.styl$/,
          use: ['style-loader', 'css-loader','stylus-loader']
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                outputPath: '../images'
              }
            }
          ]
        }
      ]
    }
   }, config)
}

module.exports = (env, argv) => {
  switch(argv.mode) {
    case 'development': {
      return configBuilder(devConfig)
    }
    case 'production': {
      return configBuilder(prodConfig)
    }
    default: {
      return configBuilder()
    }
  }
}
