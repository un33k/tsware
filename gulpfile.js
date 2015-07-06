'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    file        = require('gulp-file'),
    watch        = require('gulp-watch'),
    inject      = require('gulp-inject'),
    tsc         = require('gulp-typescript'),
    tslint      = require('gulp-tslint'),
    sourcemaps  = require('gulp-sourcemaps'),
    clean       = require('gulp-clean'),
    runSequence = require('run-sequence'),
    Config      = require('./gulp.cfg');

var config = new Config();

// Lints all app *.ts files.
gulp.task('lint-ts', function () {
  return gulp.src(config.allTypeScripts)
      .pipe(tslint())
      .pipe(tslint.report('prose'));
});

// Compiles *.ts files while including refs to libs & app.d.ts
gulp.task('compile-app-ts', function () {
  var sourceTsFiles = [
    config.sourceDir + 'bootstrap.ts',
    config.allAppTypeScripts,  
    config.libTsDefFiles,
    config.libTsDefListFile,
    config.appTsDefListFile
  ];

  var tsResult = gulp.src(sourceTsFiles)
      .pipe(sourcemaps.init())
      .pipe(tsc({
        typescript: require('typescript'),
        target           : 'ES5',
        module           : 'commonjs',
        declarationFiles : false,
        noExternalResolve: true
      }));

  tsResult.dts.pipe(gulp.dest(config.distDir));
  return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.distDir));
});

// Creates a single ref file (app.d.ts), using all app *.ts files
gulp.task('generate-app-tsrefs', function () {
    var target = gulp.src(config.appTsDefListFile);
    var sources = gulp.src([
        config.sourceDir + 'bootstrap.ts',
        config.allAppTypeScripts
      ],{read: false});
    file(config.appTsDefListFile, '//{\n//}', { src: true }).pipe(gulp.dest(config.baseDir));
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function (filepath) {
            return '/// <reference path="../..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.typingsDir));
});

// Removes compilation artifacts (*.js)
gulp.task('clean-ts', function () {
  var GeneratedFiles = [
    config.distDir,
    config.generatedJavaScriptFiles,
    config.generatedJavaScriptFiles
  ];
  return gulp.src(GeneratedFiles, {read: false}).pipe(clean());
});

gulp.task('copy-html', function() {  
  gulp.src(config.appDir + '/**/*.html', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

gulp.task('copy-css', function() {  
  gulp.src(config.appDir + '/**/*.css', {base: config.appDir})
    .pipe(gulp.dest(config.distDir));
});

var taskList = [
  'lint-ts',
  'generate-app-tsrefs',
  'compile-app-ts',
  'copy-html',
  'copy-css'
];

// Builds
gulp.task('build',
  taskList
);

// Watches for file changes and make subsequent runs
gulp.task('watch', function() {
  gulp.watch([config.allAppTypeScripts], taskList);
});

// Sets default behavior for the gulp command
gulp.task('default', function(callback) {
  runSequence('clean-ts', 'build', callback);
});
