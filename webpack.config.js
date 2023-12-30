// const path = require('path');
// module.exports = {
// 	entry: {
// 		app: './#src/js/modules/loading.js'
// 	},
// 	output: {
// 		filename: '[name].js',
// 		path: path.resolve(__dirname, './dist'),
// 		publickpath: './dist'
// 	},
// 	devServer: {
// 		overlay: true
// 	}
// };
const config = {
	mode: 'production',
	entry: {
		main: './#src/js/main.js',
		script: './#src/js/app.js'
		// script: './#src/js/script.js',
	},
	output: {
		filename: '[name].js'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loaader', 'css-loader']
			}
		]
	}
};
module.exports = config;