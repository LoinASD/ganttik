const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
      app: path.resolve(__dirname, '..', 'src', 'index.tsx')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
            'ts-loader',
            ]
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          "css-loader"
          
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg)?$/,
        exclude: /node_modules/,
        loader: "url-loader"
      }
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'public', 'index.html'),
      inject: 'body',
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: [ '.tsx', '.ts', '.js', 'jsx', 'json'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@containers': path.resolve(__dirname, '../src/containers'),
      '@src': path.resolve(__dirname, '../src'),
      '@theme': path.resolve(__dirname, '../src/index.ts')
    }
  },

};