'use strict';

var gulp = require('gulp');
var utils = require('../utils');
var cfg = require('../config');


gulp.task('set:ng2:dev', "-- Setup build object for `dev` environment.", function () {
	return utils.ng2SetBuildEnv(cfg.dist.dev.libDir);
});
