class SidebarController {
  constructor() {
    this.name = 'sidebar';
    this.sort = 'asc';

    this.sortArray = [{
    	title: 'Ascending',
    	value: 'asc'
   	}, {
   		title: 'Decending',
   		value: 'desc'
   	}];
  }
}

export default SidebarController;
