'use strict';

var gulp = require('gulp');
var run = require('gulp-run');
var debug = require('gulp-debug');
var help = require('gulp-help');

help(gulp);

gulp.task('env:install', "Re-install the requirements (npm, bower, tsd, ..etc.)", function (cb) {
  run('npm install').exec("", function () {
    run('tsd reinstall -so').exec("", function () {
      run('bower install').exec("", cb);
    });
  });
});
