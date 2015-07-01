'use strict';

var GulpConfig = (function () {
 
  function GulpConfig() {

    this.typingsDir = './typings/';
    this.sourceDir  = './src/';
    this.distDir    = './dist/';
    this.appDir     = this.sourceDir + 'app/';
          
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
