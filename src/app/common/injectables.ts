import {bind, FormBuilder, ChangeDetection, JitChangeDetection} from 'angular2/angular2';

export var commonInjectables: Array<any> = [
  bind(ChangeDetection).toClass(JitChangeDetection),
  FormBuilder
];
