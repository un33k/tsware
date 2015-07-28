import {Component, View, coreDirectives} from 'angular2/angular2';

// App: Top Level Component
@Component({
  selector: 'app'
})
@View({
	templateUrl: './component/greeting.html'
})
export class App {
  name: string;
  constructor() {
	  //
  }
}
