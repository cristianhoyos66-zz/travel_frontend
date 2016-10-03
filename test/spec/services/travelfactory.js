'use strict';

describe('Service: travelFactory', function () {

  // load the service's module
  beforeEach(module('travelFrontendApp'));

  // instantiate service
  var travelFactory;
  beforeEach(inject(function (_travelFactory_) {
    travelFactory = _travelFactory_;
  }));

  it('should do something', function () {
    expect(!!travelFactory).toBe(true);
  });

});
