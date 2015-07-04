import { bind } from 'angular2/di';
import { FormBuilder } from 'angular2/forms';
import { ChangeDetection, JitChangeDetection } from 'angular2/change_detection';

export var commonInjectables: Array<any> = [
	bind(ChangeDetection).toClass(JitChangeDetection),
  	FormBuilder
];
