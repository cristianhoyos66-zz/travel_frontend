(function() {
'use strict';

/**
 * @ngdoc service
 * @name travelFrontendApp.authFactory
 * @description
 * # authFactory
 * Factory in the travelFrontendApp.
 */
angular.module('travelFrontendApp')
  .factory('authFactory', authFactory);

  authFactory.$inject = ['$http', 'servicesConstants'];

  function authFactory($http, servicesConstans) {

    var service = {
      signin: signin,
      logout: logout
    };

    return service;

    /////////////

    function signin() {
      return $http.get(servicesConstans.auth.login)
	.then(signinComplete)
	.catch(signinFailed);

      function signinComplete(response) {
	return response.data;
      }

      function signinFailed(error) {
	console.log('jsonp failed for signin' + error.data);
      }
    }

    function logout() {
      return $http.get(servicesConstans.auth.logout)
	.then(logoutComplete)
	.catch(logoutFailed);

      function logoutComplete(response) {
	return response.data;
      }

      function logoutFailed(error) {
	console.log('jsonp failed for logout' + error.data);
      }
    }
    
  }
  
})();
