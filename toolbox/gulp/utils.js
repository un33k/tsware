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

var ng2AppBuilder = new Builder({
	defaultJSExtensions: true,
  baseURL: cfg.dir.tmpDir,
  meta: cfg.ng.appMeta
});

function tsdTransform (path) {
	return '/// <reference path="../../..' + path + '" />';
};

function cssTransform (path) {
	return '<link rel="stylesheet" type="text/css" href="' + path + '">';
};

function excludePath(path) {
	return '!' + path;
};

function sequenceCallback(done) {
	console.log(done)
  return function (err) {
    if (err) {
      var error = new Error('task sequence failed');
      error.showStack = false;
      done(error);
    } else {
      done();
    }
  };
}

module.exports = {
	plumber: plumber,
	ng2AppBuilder: ng2AppBuilder,
	tsdTransform: tsdTransform,
	cssTransform: cssTransform,
	excludePath: excludePath,
	sequenceFinished: sequenceCallback
};
