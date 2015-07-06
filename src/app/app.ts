import {Component, View, coreDirectives} from 'angular2/angular2';
import {RouteConfig, RouterOutlet, RouterLink, Router} from 'angular2/router';


// App: Top Level Component
@Component({
  selector: 'app'
})
@View({
	templateUrl: './index.html'
})
export class App {
  name: string;
  constructor() {
	  //
  }
}
