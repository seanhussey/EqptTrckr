'use strict';

describe('Controller: EquiptmentCtrl', function () {

  // load the controller's module
  beforeEach(module('eqpTrkrApp'));

  var EquiptmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquiptmentCtrl = $controller('EquiptmentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
