var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.config.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
	devtool: 'cheap-module-eval-source-map',
	output: {
		path: path.resolve(__dirname + '/public/js/app'),
		filename: 'bundle.js',
		publicPath: '/js/app/',
		chunkFilename: '[id].chunk.js'
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{ loader: 'awesome-typescript-loader', options: {
						transpileOnly: true
					}},
					{ loader: 'angular2-template-loader' },
					{ loader: 'angular-router-loader' }
				]
			}
		]
	}
});