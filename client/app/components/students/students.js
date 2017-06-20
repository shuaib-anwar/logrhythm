import angular from 'angular';
import uiRouter from 'angular-ui-router';
import studentsComponent from './students.component';

let studentsModule = angular.module('students', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('students', {
      url: '/students',
      component: 'students'
    });
})

.component('students', studentsComponent)
  
.name;

export default studentsModule;
