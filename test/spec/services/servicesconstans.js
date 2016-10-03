'use strict';

describe('Service: servicesConstans', function () {

  // load the service's module
  beforeEach(module('travelFrontendApp'));

  // instantiate service
  var servicesConstans;
  beforeEach(inject(function (_servicesConstans_) {
    servicesConstans = _servicesConstans_;
  }));

  it('should do something', function () {
    expect(!!servicesConstans).toBe(true);
  });

});
