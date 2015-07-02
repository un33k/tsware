'use strict';

var GulpConfig = (function () {
 
  function GulpConfig() {

    this.baseDir   = './';
    this.utilsDir   = this.baseDir + '/utils/';
    this.sourceDir  = this.baseDir + './src/';
    this.distDir    = this.baseDir + './dist/';
    this.appDir     = this.sourceDir + 'app/';
    this.typingsDir = this.utilsDir + 'typings/';

    this.generatedJavaScriptFiles = this.sourceDir + '/**/*.js';
    this.generatedSourceMapFiles  = this.sourceDir + '/**/*.js.map';

    this.allTypeScripts     = this.sourceDir + '/**/*.ts';
    this.allAppTypeScripts  = this.appDir + '/**/*.ts';

    this.libTsDefFiles      = this.typingsDir + '/**/*.d.ts';
    this.libTsDefListFile   = this.typingsDir + 'tsd.d.ts';
    this.appTsDefListFile   = this.typingsDir + 'app.d.ts';
  }

  return GulpConfig;

})();

module.exports = GulpConfig;
