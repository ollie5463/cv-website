const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },
    devtool: "source-map",
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    })],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules(?!\/@bolt)/,
                use: [
                    {
						loader: 'babel-loader',
						options: {}, // Empty options uses babel.config.js
					},
                    {
                        loader: "ts-loader",
                        options: {}
                    }
                ]
            },{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {}, // Empty options uses babel.config.js
					},
				],
			}
        ]
    }
}