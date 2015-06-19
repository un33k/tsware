'use strict';

var GulpConfig = (function () {
  function GulpConfig() {

    this.tools_dir = './tools/';
    this.types_dir = this.tools_dir + 'typings/';

    this.source_dir = './src/';
    this.source_app_dir = this.source_dir + 'app/';

    this.javascript_dir = this.source_dir + '/js/';
    this.javascript_wildcards = [this.javascript_dir + '**/*.js'];
    this.typescript_wildcards = this.source_dir + '**/*.ts';

    this.typescript_def_libs = this.types_dir + '**/*.ts';
    this.typescript_refs_app = this.types_dir + 'typescriptApp.d.ts';
  }

  return GulpConfig;

})();

module.exports = GulpConfig;
