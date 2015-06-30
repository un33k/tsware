'use strict';

var GulpConfig = (function () {
 
  function GulpConfig() {

    this.toolsDir   = './tools/';
    this.typingsDir = this.toolsDir + 'typings/';

    this.sourceDir  = './src/';
    this.appDir     = this.sourceDir + 'app/';

    this.GeneratedJavaScriptFiles = this.sourceDir + '**/*.js';
    this.GeneratedSourceMapFiles  = this.sourceDir + '**/*.js.map';

    this.allTypeScripts     = this.sourceDir + '**/*.ts';
    this.allAppTypeScripts  = this.appApp + '**/*.ts';

    this.libTsDefFiles      = this.typingsDir + '*/*.d.ts';
    this.libTsDefListFile   = this.typingsDir + 'tsd.d.ts';
    this.appTsDefListFile   = this.typingsDir + 'app.d.ts';
  }

  return GulpConfig;

})();

module.exports = GulpConfig;
