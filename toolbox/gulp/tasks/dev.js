'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var utils = require('../utils');
var size = require('gulp-size');
var cfg = require('../config');

gulp.task('build:lib:dev', "-- Build libs, development version.", function () {
  utils.ng2SetBuildEnv(cfg.dist.dev.libDir);
  return gulp.src(cfg.lib.ol)
    .pipe(gulp.dest(cfg.dist.dev.libDir));
});
