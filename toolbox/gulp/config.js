'use strict';

var EXT = {
  js: '.js',
  ts: '.ts',
  css: '.css',
  html: '.html',
  sass: '.scss'
};

var DIR = {
  rootDir: './',
  distDir: './dist/',
  tmpDir: './.staging/',
  appDir: './src/app/',
  testDir: './src/test/',
  gulpDir: './toolbox/gulp/',
  typingsDir: './toolbox/typings/'
};

var GULP = {
  baseDir: DIR.gulp,
  tasksDir: DIR.gulp + 'tasks/',
  cfgFile: DIR.gulpDir + 'config.js'
};

var DIST = {
  baseDir: DIR.distDir,
  dev: {
    baseDir: DIR.distDir + 'dev/',
    libDir: DIR.distDir + 'dev/lib/',
    imgDir: DIR.distDir + 'dev/img/',
    styleDir: DIR.distDir + 'dev/style/',
    htmlDir: DIR.distDir + 'dev/'
  },
  prod: {
    baseDir: DIR.distDir + 'prod',
    libDir: DIR.distDir + 'prod/lib/',
    imgDir: DIR.distDir + 'prod/img/',
    styleDir: DIR.distDir + 'prod/style/',
    htmlDir: DIR.distDir + 'prod/'
  }
};

var TYPESCRIPT = {
  typings: {
    baseDir: DIR.typingsDir,
  },
  refs: {
    libFile: DIR.typingsDir + 'tsd.d.ts',
    appFile: DIR.typingsDir + 'app.d.ts',
    customFile: DIR.typingsDir + 'custom.d.ts'
  },
  globs: {
    app: DIR.appDir + '**/*.ts',
    test: DIR.testDir + '**/*.ts',
    lib: DIR.typingsDir + '**/*.ts'
  },
};

var IMAGE = {
  baseDir: DIR.appDir + 'img/',
  src: [
    DIR.appDir + 'img/**/*',
  ],
};

var HTML = {
  baseDir: DIR.appDir,
  src: {
    app: DIR.appDir + "**/*.html"
  }
};

var STYLE = {
  baseDir: DIR.appDir,
  src: {
    app: DIR.appDir + "/style/**/*.css"
  }
};


module.exports = {
  dir: DIR,
  gulp: GULP,
  dist: DIST,
  ts: TYPESCRIPT,
  img: IMAGE,
  html: HTML,
  style: STYLE
};
