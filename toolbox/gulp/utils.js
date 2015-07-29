'use strict';

var plum = require('gulp-plumber');
var utils = require('gulp-util');

var plumber = function () {
	// same are gulp.plumber, but will handle errors gracefully
	return plum({
		errorHandler: function (err) {
			// ensure error don't break pipes
			utils.log(err.message);
			this.emit('end');
		}
	});
};

module.exports = {
	plumber: plumber
};
