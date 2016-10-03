(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name travelFrontendApp.travelFactory
   * @description
   * # travelFactory
   * Factory in the travelFrontendApp.
   */
  angular.module('travelFrontendApp')
    .factory('travelFactory', travelFactory);

  travelFactory.$inject = ['$http', 'servicesConstants'];
  
  function travelFactory($http, servicesConstans) {

    var service = {
      getAll: getAll
    };

    return service;

    ////////////

    function getAll() {
      return $http.get(servicesConstans.travel.getAll)
	.then(getAllComplete)
	.catch(getAllFailed);

      function getAllComplete(response) {
	return response.data;
      }

      function getAllFailed(error) {
	console.log('jsonp failed for getAll' + error.data);
      }
    }
    
  }
  
})();
