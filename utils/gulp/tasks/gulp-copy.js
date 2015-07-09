'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    help        = require('gulp-help'),
    Config      = require('../gulp.cfg');

help(gulp);
var config = new Config();

// Copy html
gulp.task('html:copy', '-- Copy HTML files to dist directory', function() {  
  gulp.src(config.appDir + '/**/*.html', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

// Copy css
gulp.task('css:copy', '-- Copy CSS files to dist directory', function() {  
  gulp.src(config.appDir + '/**/*.css', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

// Copy assets
gulp.task('copy', '-- Copy assets to the dist directory',
  ['html:copy', 'css:copy']
);
