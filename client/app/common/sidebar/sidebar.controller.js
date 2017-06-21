class SidebarController {
  constructor() {
    this.name = 'sidebar';
    this.chartName = null;
    this.sort = 'desc';
    this.mode = 'auto';

    
    this.chartData = {
      name: null
    };

    this.sortArray = [{
      title: 'Ascending',
      value: 'asc'
    }, {
      title: 'Decending',
      value: 'desc'
    }];
  }

  getData() {
    var name = null;

    if(this.mode == 'auto') {
      name = this.chartData.sort == 'desc' ? `Top n ${this.chartData.filter}` : `Lowest n ${this.chartData.filter}`;
    } else {
      name = this.chartData.name;
    }

    this.chartData.name = name;

    return this.chartData;
  }

  $onChanges(changesObj) {
    if(changesObj.chartData && changesObj.chartData.currentValue){
      this.chartData = JSON.parse(changesObj.chartData.currentValue);
    }
  }
}

export default SidebarController;
