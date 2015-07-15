import {bootstrap, bind} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router, routerInjectables} from 'angular2/router';
import {commonInjectables} from './common/injectables';
import {App} from './app';

bootstrap(App, [
    commonInjectables
  ]).then(
    success => console.log(success),
    error => console.log(error)
);
