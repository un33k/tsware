'use strict';

var base     = './';
var dest     = './dist/';
var src      = './src/';
var typings  = './utils/typings/';
var gulp     = './utils/gulp/';
var tmp      = './tmp/';
var test     = './test/';


var config = {
  ////////////
  gulp: {
    dirs: {
      tasks: gulp + 'tasks'
    }
  },
  ////////////
  typescript: {
    files: {
      refs: {
        lib: typings + 'tsd.d.ts',
        app: typings + 'app.d.ts',
        custom: typings + 'custom.d.ts'
      },
      ts: {
        globs: {
          app: src + '**/*.ts',
          lib: typings + '**/*.ts',
          test: test + '**/*.ts'
        }
      }
    },
    dirs: {
      base: base,
      typings: typings,
      tmp: {
        src: {
          base: tmp + 'src/',
          js: tmp + 'src/js/'
        },
        test: {
          base: tmp + 'test/',
          js: tmp + 'test/js/'
        }
      }
    },
    options: {
      ts: {
        transpile: {
          target: "ES5",
          module: "commonjs",
          declarationFiles: false,
          noExternalResolve: true,
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          typescript: require('typescript')
        },
        refs: {
          inject: {
            starttag: '//{',
            endtag: '//}',
            transform: function (path) {
              return '/// <reference path="../..' + path + '" />';
            }
          },
          tags: '//{\n//}\n'
        }
      }
    }
  }
}

module.exports = config;



// var GulpConfig = (function () {
 
//   function GulpConfig() {

//     this.baseDir    = './';
//     this.utilsDir   = this.baseDir + 'utils/';
//     this.sourceDir  = this.baseDir + 'src/';
//     this.distDir    = this.baseDir + 'dist/';
//     this.appDir     = this.sourceDir + 'app/';
//     this.typingsDir = this.utilsDir + 'typings/';

//     this.gulpDir        = this.utilsDir + 'gulp/';
//     this.gulpTaskDir    = this.gulpDir + 'tasks/';
//     this.bootstrapFile  = this.sourceDir + 'bootstrap.ts';
//     this.htmlFiles      = this.sourceDir + '**/*.html';
//     this.cssFiles       = this.sourceDir + '**/*.css';

//     this.generatedJavaScriptFiles = this.sourceDir + '**/*.js';
//     this.generatedSourceMapFiles  = this.sourceDir + '**/*.js.map';

//     this.allTypeScripts     = this.sourceDir + '**/*.ts';
//     this.allAppTypeScripts  = this.appDir + '**/*.ts';

//     this.libTsDefFiles      = this.typingsDir + '**/*.d.ts';
//     this.libTsDefListFile   = this.typingsDir + 'tsd.d.ts';
//     this.appTsDefListFile   = this.typingsDir + 'app.d.ts';
//   }

//   return GulpConfig;

// })();

// module.exports = GulpConfig;
