'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    Config      = require('../gulp.cfg');

var config = new Config();

// Copy html
gulp.task('html:copy', function() {  
  gulp.src(config.appDir + '/**/*.html', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

// Copy css
gulp.task('css:copy', function() {  
  gulp.src(config.appDir + '/**/*.css', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

// Copy assets
gulp.task('copy',
  ['html:copy', 'css:copy']
);
