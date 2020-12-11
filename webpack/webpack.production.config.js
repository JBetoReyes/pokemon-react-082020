const { merge } = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const baseConfig = require('./webpack.base.config');

const rootPath = resolve(__dirname, '..');

module.exports = (env) => ({
  ...merge(baseConfig(env), {
    plugins: [
      new HtmlPlugin({
        template: resolve(rootPath, 'src', 'public', 'index.html'),
        filename: 'index.html',
      }),
      new MiniCssExtractPlugin()
    ],
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    }
  }),
});
