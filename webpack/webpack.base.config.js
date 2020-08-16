const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const { existsSync } = require('fs');
const { resolve } = require('path');
const dotenv = require('dotenv');

// eslint-disable-next-line no-unused-vars
module.exports = (env) => {
  const rootPath = resolve(__dirname, '..');
  const srcPath = resolve(rootPath, 'src');
  const appPath = resolve(srcPath, 'app');
  const publicPath = resolve(srcPath, 'public');
  const baseEnvPath = resolve(rootPath, '.env');
  const envPath = `${baseEnvPath}.${env.ENVIRONMENT}`;
  const finalPath = existsSync(envPath) ? envPath : baseEnvPath;
  const envObject = dotenv.config({ path: finalPath }).parsed;
  const envKeys = Object.keys(envObject).reduce(
    (keys, nextKey) => ({
      ...keys,
      [`process.env.${nextKey}`]: JSON.stringify(envObject[nextKey]),
    }),
    {}
  );
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
        '@app': appPath,
        '@components': resolve(appPath, 'components'),
        '@services': resolve(appPath, 'services'),
        '@hooks': resolve(appPath, 'hooks'),
      },
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
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
