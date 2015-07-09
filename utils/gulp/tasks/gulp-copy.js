'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    Config      = require('../gulp.cfg');

var config = new Config();

// Copy html
gulp.task('copy-html', function() {  
  gulp.src(config.appDir + '/**/*.html', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

// Copy css
gulp.task('copy-css', function() {  
  gulp.src(config.appDir + '/**/*.css', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

// Copy assets
gulp.task('copy',
  ['copy-html', 'copy-css']
);
