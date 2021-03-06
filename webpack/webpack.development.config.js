const { merge } = require('webpack-merge');
const { resolve } = require('path');
const baseConfig = require('./webpack.base.config');

module.exports = (env) => ({
  ...merge(baseConfig(env), {
    output: {
      filename: 'app-[hash:6].js',
      path: resolve(rootPath, 'dist'),
      publicPath: '/',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.s?css$/,
          loader: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      contentBase: resolve(__dirname, '..', 'src', 'public'),
      host: '0.0.0.0',
      open: false,
      historyApiFallback: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers':
          'X-Requested-With, content-type, Authorization',
      },
    },
  }),
});
