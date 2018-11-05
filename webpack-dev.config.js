const webpack = require('webpack')
const path = require('path')

module.exports = {
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/backend/public/js'),
    publicPath: 'http://localhost:2992/assets/'
  },
  devServer: {
    publicPath: 'http://localhost:2992/assets/'
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
        use: "file-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    })
  ]
}
