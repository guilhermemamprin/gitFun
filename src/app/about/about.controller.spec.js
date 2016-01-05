'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('testApp'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    var vm = $controller('AboutController');

    expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
    expect(vm.awesomeThings.length > 5).toBeTruthy();
  }));
});
