'use strict';

var gulp        = require('gulp'),
    debug       = require('gulp-debug'),
    file        = require('gulp-file'),
    watch       = require('gulp-watch'),
    inject      = require('gulp-inject'),
    tsc         = require('gulp-typescript'),
    tslint      = require('gulp-tslint'),
    sourcemaps  = require('gulp-sourcemaps'),
    clean       = require('gulp-clean'),
    runSequence = require('run-sequence'),
    Config      = require('./gulp.cfg');

var config = new Config();

// Lint all app *.ts files.
gulp.task('lint', function () {
  return gulp.src(config.allTypeScripts)
      .pipe(tslint())
      .pipe(tslint.report('prose'));
});

// Compile *.ts files while including refs to libs & app.d.ts
gulp.task('compile', function () {
  var sourceTsFiles = [
    config.bootstrapFile,
    config.allAppTypeScripts,  
    config.libTsDefFiles,
    config.libTsDefListFile,
    config.appTsDefListFile
  ];

  var tsResult = gulp.src(sourceTsFiles)
      .pipe(sourcemaps.init())
      .pipe(tsc({
        typescript: require('typescript'),
        declarationFiles: false,
        noExternalResolve: true,
        target: "es5",
        module: "commonjs",
        experimentalDecorators: true,
        emitDecoratorMetadata: true
      }));

  tsResult.dts.pipe(gulp.dest(config.distDir));
  return tsResult.js
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.distDir));
});

// Create a single ref file (app.d.ts), using all app *.ts files
gulp.task('refs', function () {
    var target = gulp.src(config.appTsDefListFile);
    var sources = gulp.src([
        config.bootstrapFile,
        config.allAppTypeScripts
      ],{read: false});
    file(config.appTsDefListFile, '//{\n//}', {src: true}).pipe(gulp.dest(config.baseDir));
    return target.pipe(inject(sources, {
        starttag: '//{',
        endtag: '//}',
        transform: function (filepath) {
            return '/// <reference path="../..' + filepath + '" />';
        }
    })).pipe(gulp.dest(config.typingsDir));
});

// Remove compilation artifacts (*.js)
gulp.task('clean', function () {
  var GeneratedFiles = [
    config.distDir,
    config.generatedJavaScriptFiles,
    config.generatedJavaScriptFiles
  ];
  return gulp.src(GeneratedFiles, {read: false}).pipe(clean());
});

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

// Build
gulp.task('build', function(callback) {
  runSequence('clean', 'copy', 'lint', 'refs', 'compile', callback);
});

// Develop
gulp.task('dev',
  ['copy', 'refs', 'compile']
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
gulp.task('default', function(callback) {
  runSequence('clean', 'build', callback);
});
