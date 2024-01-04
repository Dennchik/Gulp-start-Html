const recompress = require('imagemin-jpeg-recompress');
const pngquant = require('imagemin-pngquant');
const isProd = process.argv.includes('--production');
const isDev = !isProd;
const MergeIntoSingleFilePlugin = require('webpack-merge-and-include-globally');

const path = require('path');
module.exports = {
	isProd: isProd,
	isDev: isDev,

	htmlMin: {
		collapseWhitespace: isProd,
	},
	webpack: {
		// mode: isProd ? 'production' : 'development',
		mode: 'production',
		entry: {
			anime: './#src/js/anime.js',
			main: './#src/js/main.js',
			app: './#src/js/app.js'
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
	},
	fonter: {
		formats: ['woff', 'ttf', 'eot', 'svg'],
	},
	minJs: {
		ext: {
			src: '.js',
			min: '.min.js'
		}
	},
	renameScss: {
		extname: '.css',
		suffix: '.min',
	},
	// renameJs: {
	// 	extname: '.js',
	// 	suffix: '.min',
	// },
	autoprefixer: {
		cascade: false,
		grid: 'auto-place',
		overrideBrowserslist: [
			'Android >= 5',
			'last 2 versions',
			'Firefox >= 24',
			'Safari >= 6',
			'Opera >= 12',
		],
	},
	imagemin: {
		verbose: true,
		interlaced: true,
		progressive: true,
		optimizationLevel: 5,
	}[
		recompress({
			loops: 6,
			min: 50,
			max: 90,
			quality: 'high',
			use: [
				pngquant({
					quality: [0.8, 1],
					strip: true,
					speed: 1,
				}),
			],
		})
	],
};
