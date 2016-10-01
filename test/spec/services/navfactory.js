'use strict';

describe('Service: navFactory', function () {

  // load the service's module
  beforeEach(module('travelFrontendApp'));

  // instantiate service
  var navFactory;
  beforeEach(inject(function (_navFactory_) {
    navFactory = _navFactory_;
  }));

  it('should do something', function () {
    expect(!!navFactory).toBe(true);
  });

});
