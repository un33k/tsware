'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var ignore = require('gulp-ignore');
var del = require('del');
var cfg = require('../config');


gulp.task('clean:all', "-- Clean all generated files.", function (done) {
  del(cfg.dist.baseDir, done);
});

gulp.task('clean:all:dev', "-- Clean all development specific generated files.", function (done) {
  del(cfg.dist.dev.baseDir, done);
});

// gulp.task('clean:app:dev', "-- Clean app's development specific generated files.", function (done) {
//   var source = [
//     cfg.dist.dev.appDir + cfg.glob.all,
//     cfg.js.app.bundle.filename
//   ]
//   return gulp.src(source, { read: false })
//     .pipe(grimraf({ force: true }));
// });

gulp.task('clean:all:prod', "-- Clean all production specific generated files.", function (done) {
  del(cfg.dist.prod.baseDir, done);
});
