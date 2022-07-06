const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
  return {
    entry: ['@babel/polyfill', './src/index.jsx'],
    output: {
      path: path.resolve(options.root, 'dist'),
      filename: '[name].bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                babelrc: true
              }
            }
          ]
        },
        {
          test: /.(css|scss)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.APP_ENV': JSON.stringify(env.APP_ENV),
        'process.env.BUILD_VERSION': JSON.stringify(
          process.env.BUY_MODULARITY_VERSION
        )
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.join(options.root, 'src', 'index.html'),
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css'
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'public', to: '' },
          { from: 'translations', to: 'translations' }
        ]
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx'] // Looks for index.js first, then falls back to index.jsx
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    }
  };
};
