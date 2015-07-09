'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    watch       = require('gulp-watch'),
    runSequence = require('run-sequence'),
    requireDir  = require('require-dir'),
    Config      = require('./utils/gulp/gulp.cfg');

var config = new Config();

requireDir(config.gulpTaskDir, {recurse: true});

// Build
gulp.task('build', function(callback) {
  runSequence('ts:refs', 'ts:compile', callback);
});

// Develop
gulp.task('dev',
  ['copy', 'ts:refs', 'ts:compile']
);

// Watches for file changes and make subsequent runs
gulp.task('watch', function() {
  gulp.watch([
    config.allAppTypeScripts,
    config.bootstrapFile,
    config.htmlFiles,
    config.cssFiles],
    ['dev']
  );
});

// Sets default behavior for the gulp command
gulp.task('default', ['clean'], function(callback) {
  runSequence(['copy', 'ts:lint'], 'build', callback);
});
