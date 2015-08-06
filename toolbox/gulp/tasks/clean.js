'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var del = require('del');
var utils = require('../utils');
var cfg = require('../config');


gulp.task('clean:all', "-- Clean all generated files.", function (done) {
  del(cfg.dist.baseDir, done);
});

gulp.task('clean:all:dev', "-- Clean all development specific generated files.", function (done) {
  del(cfg.dist.dev.baseDir, done);
});

gulp.task('clean:app:dev', "-- Clean app's development specific generated files.", function (done) {
  var source = [
    cfg.dist.dev.baseDir + cfg.glob.js,
    cfg.dist.dev.baseDir + cfg.glob.html,
    cfg.dist.dev.baseDir + cfg.glob.css,
    utils.exclude(cfg.dist.dev.libDir + cfg.glob.js)
  ]
  del(source, done);
});

gulp.task('clean:all:prod', "-- Clean all production specific generated files.", function (done) {
  del(cfg.dist.prod.baseDir, done);
});
