const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

require('webpack-dev-server');

/** @type {import('webpack').Configuration} */
module.exports = {
  target: 'browserslist',
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devServer: {
    port: 3000,
    allowedHosts: 'all'
  },
  optimization: {
    runtimeChunk: { name: 'runtime' }
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { runtime: 'automatic' }],
              ['@babel/preset-typescript', { allowDeclareFields: true }]
            ],
            plugins: ['react-refresh/babel']
          }
        }
      },
      {
        test: /\.css$/,
        exclude: /\.vanilla\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.vanilla\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // URLs are pre-processed in the TS sources already
              url: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new VanillaExtractPlugin(),
    new MiniCssExtractPlugin()
  ]
};
