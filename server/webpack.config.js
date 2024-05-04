const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './project/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      // other rules
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'project/public', to: 'dist' }  // Adjust according to your paths
      ],
    }),
  ]
};
