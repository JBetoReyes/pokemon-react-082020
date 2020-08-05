const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { resolve } = require('path');
// eslint-disable-next-line no-unused-vars
module.exports = (_env) => {
  const srcPath = resolve(__dirname, '..', 'src');
  const appPath = resolve(srcPath, 'app');
  const publicPath = resolve(srcPath, 'public');
  return {
    entry: resolve(srcPath, 'app', 'index.tsx'),
    output: {
      filename: 'app-[hash:6].js',
      path: resolve(srcPath, 'dist'),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
      alias: {
        '@src': srcPath,
        '@styles': resolve(publicPath, 'styles'),
        '@assets': resolve(publicPath, 'assets'),
        '@components': resolve(appPath, 'components'),
      },
    },
    plugins: [
      new HtmlPlugin({
        template: resolve(publicPath, 'index.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin({
        verbose: true,
        cleanOnceBeforeBuildPatterns: ['**/app*'],
      }),
    ],
    module: {
      rules: [
        {
          test: /.tsx?$/,
          use: {
            loader: 'awesome-typescript-loader',
          },
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          loader: 'file-loader',
        },
      ],
    },
  };
};
