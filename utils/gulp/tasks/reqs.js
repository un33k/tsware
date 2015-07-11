var gulp = require('gulp');
var run = require('gulp-run');
var debug = require('gulp-debug');
var help = require('gulp-help');

help(gulp);

// Install packages & reference files
gulp.task('proj:install', '-- Install the requirements (npm, bower, tsd, ..etc.)', function(cb) {
  run('npm install').exec("", function(){
    run('tsd reinstall -so').exec("", function(){
      run('bower install').exec("", cb);
    });
  });
});
