import angular from 'angular';
import Home from './home/home';
import Students from './students/students';

let componentModule = angular.module('app.components', [
  Home,
  Students
])

.name;

export default componentModule;
