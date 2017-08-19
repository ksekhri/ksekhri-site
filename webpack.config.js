var webpack = require("webpack");
var path = require("path");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.join(__dirname, "dist/js"),
		filename: "bundle.js",
		publicPath: "js",
	},
	devServer: {
		inline: true,
		contentBase: './dist',
		port: 3000,
		historyApiFallback: true,
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules)/,
				loader: "babel-loader",
				query: {
					presets: ["latest", "react"],
				}
			}
		]
	}
};