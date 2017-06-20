import template from './sidebar.html';
import controller from './sidebar.controller';
import './sidebar.scss';

let sidebarComponent = {
  bindings: {
  	chartName: '@',
  	chartId: '@',
  	onSave: '&'
  },
  template,
  controller
};

export default sidebarComponent;
