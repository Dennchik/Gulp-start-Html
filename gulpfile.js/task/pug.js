//* Pug processing
const pug = () => {
	return $.gulp.src($.path.pug.src)
		.pipe($.gul.plumber({
			errorHandler: $.gul.notify.onError(error => ({
				title: "PUG",
				message: error.message
			}))
		}))
		.pipe($.gul.pug($.app.pugMin))
		.pipe($.gulp.dest($.path.pug.dest));
};
module.exports = pug;