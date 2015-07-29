'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('../utils').plumber;
var size = require('gulp-size');
var cfg = require('../config');

gulp.task('build-js', function() {  
    var bfy = browserify({
        entries: cfg.js.app.bundle.entry,
        debug: true,
        paths: [cfg.dist.dev.baseDir],
    });
 
    return bfy.bundle()
        .pipe(source(cfg.js.app.bundle.filename))
        .pipe(gulp.dest(cfg.dist.dev.baseDir));
});
