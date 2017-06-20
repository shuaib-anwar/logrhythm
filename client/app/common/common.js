import angular from 'angular';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
  Header,
  Sidebar
])
  
.name;

export default commonModule;
