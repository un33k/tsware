// 'use strict';

// var gulp = require('gulp');
// var debug = require('gulp-debug');
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');
// var plumber = require('../utils').plumber;
// var size = require('gulp-size');
// var cfg = require('../config');


// gulp.task('image:optimize', "-- Optimize images for the web.", function () {
// 	return gulp.src(cfg.img.src)
// 		.pipe(plumber())
// 		.pipe(imagemin({
// 			progressive: true,
// 			svgoPlugins: [{ removeViewBox: false }],
//       use: [pngquant()]
// 		}))
// 		.pipe(gulp.dest(cfg.dist.dev.imgDir))
// 		.pipe(size({ title: 'Optimzed image files' }));
// });
