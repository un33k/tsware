'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    help        = require('gulp-help'),
    watch       = require('gulp-watch'),
    runSequence = require('run-sequence'),
    requireDir  = require('require-dir'),
    Config      = require('./utils/gulp/gulp.cfg');

help(gulp);
var config = new Config();

requireDir(config.gulpTaskDir, {recurse: true});

// Build
gulp.task('build', '-- Build refs file and compile Typescript files', function(callback) {
  runSequence('ts:refs', 'ts:compile', callback);
});

// Develop
gulp.task('dev', '-- Develop',
  ['copy', 'ts:refs', 'ts:compile']
);

// Watches for file changes and make subsequent runs
gulp.task('watch', '-- Watch for file changes', function() {
  gulp.watch([
    config.allAppTypeScripts,
    config.bootstrapFile,
    config.htmlFiles,
    config.cssFiles],
    ['dev']
  );
});

// Sets default behavior for the gulp command
gulp.task('default', '-- Default gulp entry point', ['clean'], function(callback) {
  runSequence(['copy', 'ts:lint'], 'build', callback);
});
