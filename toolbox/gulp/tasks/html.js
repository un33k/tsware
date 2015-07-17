'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var plumber = require('../utils').plumber;
var size = require('gulp-size');
var cfg = require('../config');


gulp.task('html:copy', "-- Copy templates.", function () {
	return gulp.src(cfg.html.src.app)
		.pipe(plumber())
		.pipe(gulp.dest(cfg.dist.dev.htmlDir))
		.pipe(size({ title: 'Optimzed html files' }));
});
