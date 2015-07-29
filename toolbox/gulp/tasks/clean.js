'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var del = require('del');
var cfg = require('../config');


gulp.task('clean:all', "-- Clean all generated files.", function (done) {
  del(cfg.dist.baseDir, done);
});

gulp.task('clean:dev', "-- Clean development specific generated files.", function (done) {
  del(cfg.dist.dev.baseDir, done);
});

gulp.task('clean:prod', "-- Clean production specific generated files.", function (done) {
  del(cfg.dist.prod.baseDir, done);
});
