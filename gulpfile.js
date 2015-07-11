'use strict';

var gulp        = require('gulp');
var debug       = require('gulp-debug');
var help        = require('gulp-help');
var reqdir      = require('require-dir');
var cfg         = require('./utils/gulp/config');

help(gulp);
reqdir(cfg.gulp.dirs.tasks, {recurse: true});

// // Build
// gulp.task('build', '-- Build refs file and compile Typescript files', function(callback) {
//   runSequence('ts:refs', 'ts:compile', callback);
// });

// // Develop
// gulp.task('dev', '-- Develop',
//   ['copy', 'ts:refs', 'ts:compile']
// );

// // Watches for file changes and make subsequent runs
// gulp.task('watch', '-- Watch for file changes', function() {
//   gulp.watch([
//     config.allAppTypeScripts,
//     config.bootstrapFile,
//     config.htmlFiles,
//     config.cssFiles],
//     ['dev']
//   );
// });

// // Sets default behavior for the gulp command
// gulp.task('default', '-- Default gulp entry point', ['clean', 'ts:refs', 'ts:lint'], function(callback) {
//   runSequence(['copy', 'ts:compile'], callback);
// });
