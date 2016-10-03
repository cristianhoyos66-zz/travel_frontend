(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name travelFrontendApp.servicesConstans
   * @description
   * # servicesConstans
   * Constant in the travelFrontendApp.
   */
  var urlServer = 'http://localhost:8084/TravelBackend/';
  var apiVersion = 'api/v1/';
  var auth = 'auth/'
  angular.module('travelFrontendApp')
    .constant('servicesConstants', {
      auth: {
	login: urlServer + apiVersion + auth + 'signin',
	logout: urlServer + apiVersion + auth + 'logout;'
      }
    });

})();
