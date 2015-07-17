'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var plumber = require('../utils').plumber;
var size = require('gulp-size');
var cfg = require('../config');


gulp.task('style:copy', "-- Copy styles.", function () {
	return gulp.src(cfg.style.src.app)
		.pipe(plumber())
		.pipe(gulp.dest(cfg.dist.dev.styleDir))
		.pipe(size({ title: 'Optimzed style files' }));
});
