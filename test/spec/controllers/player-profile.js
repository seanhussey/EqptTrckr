'use strict';

describe('Controller: PlayerProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('eqpTrkrApp'));

  var PlayerProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlayerProfileCtrl = $controller('PlayerProfileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
