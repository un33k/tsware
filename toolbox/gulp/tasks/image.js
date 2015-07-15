'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var help = require('gulp-help');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var plumber = require('../utils').plumber;
var size = require('gulp-size');
var cfg = require('../config');

help(gulp);

gulp.task('opt:img', "Optimize images for the web.", function () {
	return gulp.src(cfg.img.src)
		.pipe(plumber())
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
		}))
		.pipe(gulp.dest(cfg.dist.dev.imgDir))
		.pipe(size({title: 'Optimzed image files'}));
});
