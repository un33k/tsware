import { bind } from 'angular2/angular2';;
import { FormBuilder } from 'angular2/angular2';
import { ChangeDetection, JitChangeDetection } from 'angular2/angular2';

export var commonInjectables: Array<any> = [
	bind(ChangeDetection).toClass(JitChangeDetection),
  	FormBuilder
];
