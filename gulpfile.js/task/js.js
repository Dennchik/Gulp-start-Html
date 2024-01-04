//* Обработка JavaScript
const js = () => {
	return $.gulp.src($.path.js.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "JavaScript",
				message: error.message
			}))
		}))
		// .pipe($.gul.babel())
		.pipe($.webpack($.app.webpack))
		// .pipe($.webpack(require('../../webpack.config')))
		.pipe($.gulp.dest($.path.js.dest))
		.pipe($.gulpIf($.app.isDev, $.gul.sourcemaps.init({
			largeFile: true
		})))
		.pipe($.gulp.dest($.path.js.dest))
		.pipe($.gulpIf($.app.isProd, $.gul.size({
			title: 'До сжатия - (JavaScript):'
		})))

		// .pipe($.gul.uglify())
		// .pipe($.gul.rename($.app.renameJs))
		// .pipe($.gul.minify($.app.minJs))
		.pipe($.gulpIf($.app.isProd, $.gul.size({
			title: 'После сжатия - (JavaScript):'
		})))
		.pipe($.gulpIf($.app.isDev, $.gul.sourcemaps.write('.')))
		.pipe($.gulp.dest($.path.js.dest));
};
module.exports = js;