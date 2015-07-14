'use strict';

var plum = require('gulp-plumber');

var plumber = function () {
	// same are gulp.plumber, but will handle errors gracefully
	return plum({
		errorHandler: function (err) {
			// ensure error don't break pipes
			console.log(err);
			this.emit('end');
		}
	});
};

module.exports = {
	plumber: plumber
};
