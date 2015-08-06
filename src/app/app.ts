import {Component, View, coreDirectives} from 'angular2/angular2';
import {bootstrap, bind} from 'angular2/angular2';
import {commonInjectables} from 'common/injectables';

// App: Top Level Component
@Component({
  selector: 'app'
})
@View({
	templateUrl: 'component/greeting.html'
})
export class App {
  name: string;
  constructor() {
	  //
  }
}

// import "reflect-metadata";
// import "es6-shim";

bootstrap(App, [
    commonInjectables
  ]).then(
    success => console.log(success),
    error => console.log(error)
);

