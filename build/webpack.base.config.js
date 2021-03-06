const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/client/index.jsx',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
      },
      {
        test: /\.png$/,
        use: 'url-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/index.html',
      favicon: './src/client/favicon.ico',
    }),
  ],
  resolve: {
    extensions: ['.jsx', '.js'],
    // antd icon 不支持按需加载，使用替代方案完成
    alias: {
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, '../src/client/icons.js'),
    },
  },
  externals: {
    lodash: '_',
    react: 'React',
    'react-dom': 'ReactDOM',
    bizcharts: 'BizCharts',
    '@antv/data-set': 'DataSet',
  },
};
