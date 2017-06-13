const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');
const SCSS_DIR = SRC_DIR + '/scss/main.scss';
const APP_DIR = SRC_DIR + '/app.js';

const extractSass = new ExtractTextPlugin({
    filename: "styles.css"
});

const config = {
	entry: [
		APP_DIR, 
		SCSS_DIR
	],
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module : {
		rules: [
			{
				test : /\.js$/,
				include : SRC_DIR,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
	               	fallback: 'style-loader',
		            use: ['css-loader', 'sass-loader']	
	            })
			}
		],
	},
 	plugins: [
	  	extractSass
	]
};

module.exports = config;