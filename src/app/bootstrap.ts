import "reflect-metadata";
import "es6-shim";

import {bootstrap, bind} from 'angular2/angular2';
import {commonInjectables} from './common/injectables';
import {App} from './app';

bootstrap(App, [
    commonInjectables
  ]).then(
    success => console.log(success),
    error => console.log(error)
);
