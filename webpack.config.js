var webpack = require('webpack');
var path = require("path");

module.exports = {

  entry: {
	'appLogin': './mainLogin.ts',
	'app': './main.ts',
	'vendor': './vendor.ts',
	'polyfills': './polyfills.ts',
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [
		{
          test: /\.ts$/,
		  exclude: [
		    path.resolve(__dirname, "node_modules")
		  ],
          loaders: [{
            loader: 'awesome-typescript-loader',
            options: { configFileName: 'tsconfig.json' }
          } , 'angular2-template-loader']
        },
      {test: /\.html$/, loader: 'raw-loader'},
      {test: /\.css$/, loader: 'raw-loader'}
    ]
  },
  resolve: {
    extensions: ['.js', '.ts', '.html', '.css']
  },
  devtool: 'source-map',
  plugins: [
	  new webpack.optimize.CommonsChunkPlugin({
        name: ['app', 'vendor', 'polyfills']
      })
  ]
};
