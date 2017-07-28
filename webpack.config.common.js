var webpack = require('webpack');

module.exports = {
	entry: {
		'app': './assets/app/main.ts'
	},
	resolve: {
		extensions: ['.js', '.ts', '.css']
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				// use: [{ loader: 'html-loader' }]
				use: [{   loader: 'raw-loader' }]
			},
			{
				test: /\.css$/,
				use: [{ loader: 'raw-loader' }]
			},
			{
			 	test: /\.pug$/,
			  	use: [{ loader: 'html-loader' }, { loader: 'pug-html-loader' }]
			},
			{  
			 	test: /\.styl$/,
			  	use: [ { loader: 'raw-loader' }, { loader: 'stylus-loader' }]
			}
		],
		exprContextCritical: false
	}
};