(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name travelFrontendApp.appConstants
   * @description
   * # appConstants
   * Constant in the travelFrontendApp.
   */
  angular.module('travelFrontendApp')
    .constant('appConstants', {
      flightStatus: [
	'EN_VUELO',
	'SIN_DESPEGAR',
	'ATERRIZÓ'
      ]
    });


})();
