'use strict';

var EXT = {
  js: '.js',
  ts: '.ts',
  css: '.css',
  html: '.html',
  sass: '.scss',
  map: '.map'
};

var GLOB = {
  all: '**/*',
  js: '**/*' + EXT.js,
  ts: '**/*' + EXT.ts,
  css: '**/*' + EXT.css,
  html: '**/*' + EXT.html,
  sass: '**/*' + EXT.scss,
  map: '**/*' + EXT.map
};

var DIR = {
  rootDir: './',
  distDir: './dist/',
  tmpDir: './.staging/',
  appDir: './src/app/',
  testDir: './src/test/',
  gulpDir: './toolbox/gulp/',
  typingsDir: './toolbox/typings/',
  nodeDir: './node_modules/'
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
    appDir: DIR.distDir + 'dev/',
    imgDir: DIR.distDir + 'dev/img/',
    styleDir: DIR.distDir + 'dev/style/',
    htmlDir: DIR.distDir + 'dev/'
  },
  prod: {
    baseDir: DIR.distDir + 'prod',
    libDir: DIR.distDir + 'prod/lib/',
    appDir: DIR.distDir + 'prod/',
    imgDir: DIR.distDir + 'prod/img/',
    styleDir: DIR.distDir + 'prod/style/',
    htmlDir: DIR.distDir + 'prod/'
  }
};

var TYPESCRIPT = {
  typings: {
    baseDir: DIR.typingsDir,
    customDir: DIR.typingsDir + 'custom/'
  },
  refs: {
    libFile: DIR.typingsDir + 'tsd/tsd.d.ts',
    appFile: DIR.typingsDir + 'custom/app.d.ts',
    customFile: DIR.typingsDir + 'custom/custom.d.ts'
  },
  globs: {
    app: DIR.appDir + GLOB.ts,
    test: DIR.testDir + GLOB.ts,
    lib: DIR.typingsDir + GLOB.ts
  },
};

var LIB = {
  ol: [
    DIR.nodeDir + 'angular2/node_modules/traceur/bin/traceur-runtime.js',
    DIR.nodeDir + 'es6-module-loader/dist/es6-.js',
    DIR.nodeDir + 'reflect-metadata/Reflect.js',
    DIR.nodeDir + 'systemjs/dist/system.js',
    DIR.nodeDir + 'zone.js/dist/zone.js'
  ]
};

var ANGULAR = {
  vendorPaths: {
    'angular2/*': DIR.nodeDir + 'angular2/es6/prod/*.js',
    'rx': DIR.nodeDir + 'angular2/node_modules/rx/dist/rx.js'
  },
  libMeta: {
    'rx': {
      format: 'cjs'
    }
  },
  appMeta: {
    'angular2/angular2': { build: false },
    'angular2/router': { build: false }
  },
  ng2Modules: [
    'angular2',
    'router'
  ]
};

var JAVASCRIPT = {
  app: {
    bundle: {
      entry: DIST.dev.baseDir + 'bootstrap.js',
      filename: 'app.js',
      outputDir: DIST.prod.baseDir
    },
  }
};

var IMAGE = {
  baseDir: DIR.appDir + 'img/',
  src: [
    DIR.appDir + 'img/**/*',
  ],
};

var HTML = {
  baseDir: DIR.appDir,
  indexFile: DIR.appDir + "index.html",
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

var BLOCK = {
  tsd: {
    start: '//{',
    end: '//}'
  },
  index: {
    js: {
      start: '<!-- block:libs:js -->',
      end: '<!-- endblock:libs:js -->'
    },
    css: {
      start: '<!-- block:libs:css -->',
      end: '<!-- endblock:libs:css -->'
    }
  }
};

module.exports = {
  ext: EXT,
  glob: GLOB,
  dir: DIR,
  gulp: GULP,
  dist: DIST,
  ts: TYPESCRIPT,
  js: JAVASCRIPT,
  img: IMAGE,
  html: HTML,
  style: STYLE,
  lib: LIB,
  ng: ANGULAR,
  block: BLOCK
};
