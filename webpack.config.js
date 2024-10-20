const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const tsPaths = require('./tsconfig.json').compilerOptions.paths;
const alias = {};

Object.keys(tsPaths).forEach((tsPath) => {
    const key = tsPath.slice(0, -2);
    const value = tsPaths[tsPath][0].slice(0, -2);
    alias[key] = path.resolve(__dirname, value);
})

module.exports = {
  entry: ['babel-polyfill','./src/Main.tsx'],
  output: {
    path: path.join(__dirname, '/sam'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    alias: alias,
  },

  devServer: {
    allowedHosts:'all',
    historyApiFallback: true,
    port: 6969
  },
  module: {
    rules: [{
        test: /\.(ts|tsx|js)$/,
        exclude: [/node_modules/, /tests/],
        use: {
            loader: 'babel-loader'
        }
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ],
        exclude: /\.module\.css$/
    },
    {
        test: /\.(eot|otf|webp|ttf|woff|woff2|mp4)(\?.*)?$/,
        type: 'asset/resource',
        dependency: { not: ['url'] }
    },
    {
        test: /\.svg$/,
        loader: 'svg-url-loader',
    },
    {
        test: /\.(ico|png|jpe?g|gif|)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
    }
    ]
},
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: "index.html"
    }),
],
};