'use strict';

var plum = require('gulp-plumber');
var utils = require('gulp-util');
var Builder = require('systemjs-builder');
var tsc = require('gulp-typescript');
var cfg = require('./config');


var plumber = function () {
	return plum({
		errorHandler: function (err) {
			utils.log(err.message);
			this.emit('end');
		}
	});
};

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript')
});

var ng2LibBuilder = new Builder({
	paths: cfg.ng.vendorPaths,
	meta: cfg.ng.libMeta,
});

var ng2AppBuilder = new Builder({
  baseURL: cfg.dir.tmpDir,
  meta: cfg.ng.appMeta
});

var ng2SetBuildEnv = function(path){
	var ret, name, dest;
	cfg.ng.modules.forEach(function (mod) {
		name = 'angular2/' + mod;
		dest = path + mod + cfg.ext.js;
		ret = ng2LibBuilder.build(name, dest, {});
	});
	return ret;
}

module.exports = {
	plumber: plumber,
	ng2LibBuilder: ng2LibBuilder,
	ng2AppBuilder: ng2AppBuilder,
	ng2SetBuildEnv: ng2SetBuildEnv,
	tsProject: tsProject
};
