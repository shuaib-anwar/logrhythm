import SidebarModule from './sidebar'

describe('Sidebar', () => {
  let $rootScope, $state, $location, $componentController, $compile;

  beforeEach(window.module(SidebarModule));

  beforeEach(inject(($injector) => {
    $rootScope = $injector.get('$rootScope');
    $componentController = $injector.get('$componentController');
    $state = $injector.get('$state');
    $location = $injector.get('$location');
    $compile = $injector.get('$compile');
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    let controller;
    
    beforeEach(() => {
      controller = $componentController('sidebar', {
        $scope: $rootScope.$new()
      });
    });

    it('has a name property', () => {
      expect(controller).to.have.property('name');
    });
  });

  describe('View', () => {
    // view layer specs.
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<sidebar></sidebar>')(scope);
      scope.$apply();
    });

    it('has logo in template', () => {
      expect(template.find('img').attr('alt')).to.eq('logo');
    });
  });
});
