'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var ignore = require('gulp-ignore');
var rimraf = require('rimraf');
var grimraf = require('gulp-rimraf');
var cfg = require('../config');


gulp.task('clean:all', "-- Clean all generated files.", function (done) {
  rimraf(cfg.dist.baseDir, done);
});

gulp.task('clean:dev:all', "-- Clean all development specific generated files.", function (done) {
  rimraf(cfg.dist.dev.baseDir, done);
});

gulp.task('clean:dev:app', "-- Clean app's development specific generated files.", function (done) {
  var source = [
    cfg.dist.dev.appDir + cfg.glob.all,
    cfg.js.app.bundle.filename
  ]
  return gulp.src(source, { read: false })
    .pipe(grimraf({ force: true }));
});

gulp.task('clean:prod:all', "-- Clean all production specific generated files.", function (done) {
  rimraf(cfg.dist.prod.baseDir, done);
});
