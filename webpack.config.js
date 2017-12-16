const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:   {
    app: ['./src/index.js'],
  },
  output:  {
    path:       path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename:   'bundle.js',
  },
  module: {
    rules: [
      {
        test:    /\.js$/,
        exclude: /node_modules/,
        use:     {
          loader:  'babel-loader',
        },
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],
  resolve: {
    mainFields: [
      'browser',
      'jsnext:main', // removing this line fixes moment-timezone but also breaks tree-shaking
      'main',
    ],
  }
}