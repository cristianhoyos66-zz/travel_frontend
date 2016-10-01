'use strict';

describe('Service: nav', function () {

  // load the service's module
  beforeEach(module('travelFrontendApp'));

  // instantiate service
  var nav;
  beforeEach(inject(function (_nav_) {
    nav = _nav_;
  }));

  it('should do something', function () {
    expect(!!nav).toBe(true);
  });

});
