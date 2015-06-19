'use strict';

var gulp = require('gulp');
var debug = require('gulp-debug');
var inject = require('gulp-inject');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var del = require('del');
var Config = require('./gulpfile.config');

var config = new Config();

// Creates a single ref file (app.d.ts), using all app *.ts files
gulp.task('refs-ts', function () {
  var target = gulp.src(config.appTypeScriptReferences);
  var sources = gulp.src([config.allTypeScript], {read: false});
  return target.pipe(inject(sources, {
    starttag: '//{',
    endtag: '//}',
    transform: function (filepath) {
      return '/// <reference path="../..' + filepath + '" />';
    }
  })).pipe(gulp.dest(config.typings));
});

// Lints all app *.ts files.
gulp.task('lint-ts', function () {
  return gulp.src(config.allTypeScript)
    .pipe(tslint())
    .pipe(tslint.report('prose'));
});

// Compiles *.ts files while including refs to libs & app.d.ts
gulp.task('compile-ts', function () {
  var sourceTsFiles = [
    config.allTypeScript,                //path to *.ts files
    config.libraryTypeScriptDefinitions, //reference to lib *.d.ts files
    config.appTypeScriptReferences       //reference to app.d.ts files
  ];
  var tsconfig = tsc({
    target: 'ES5',
    declarationFiles: false,
    noExternalResolve: true
  });
  var tsResult = gulp
    .src(sourceTsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsconfig);

  tsResult.dts.pipe(gulp.dest(config.tsOutputPath));
  return tsResult
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.tsOutputPath));
});

// Removes compilation artifacts (*.js)
gulp.task('clean-js', function (cb) {
  var typeScriptGenFiles = [
    config.sourceApp +'**/*.js',    // path to all generated *.js files
    config.sourceApp +'**/*.js.map' // path to all generated *.js.map files
    config.tsOutputPath,            // path to specific generated *.js files
  ];

  del(typeScriptGenFiles, cb);
});

// Watches for file changes
gulp.task('watch', function() {
    gulp.watch([config.allTypeScript], [
      'ts-lint',
      'compile-ts',
      'app-ref-ts'
    ]);
});

// Sets default behavior for the gulp command
gulp.task('default', [
  'lint-ts',
  'compile-ts',
  'refs-ts',
  'watch'
]);
