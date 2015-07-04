/// <reference path="../utils/typings/tsd.d.ts" />
/// <reference path="../utils/typings/app.d.ts" />

import { bootstrap, bind } from 'angular2/angular2';
import { commonInjectables } from './app/injectables';
import { App } from './app/app';

bootstrap(
  App,
  [
    formInjectables,
    routerInjectables
  ]
);