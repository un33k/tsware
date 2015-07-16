'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var del = require('del');
var cfg = require('../config');


gulp.task('del:all', "-- Clean all generated files.", function (done) {
  del(cfg.dist.baseDir, done);
});

gulp.task('del:dev', "-- Clean development specific generated files.", function (done) {
  del(cfg.dist.dev.baseDir, done);
});

gulp.task('del:prod', "-- Clean production specific generated files.", function (done) {
  del(cfg.dist.prod.baseDir, done);
});
