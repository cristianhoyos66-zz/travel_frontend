(function() {
  'use strict';

  angular
    .module('travelFrontendApp')
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider'];

  function router($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .when('/home', '/')
      .otherwise('/');

    $stateProvider

      .state('auth', { 
	abstract: true,
	url: '',
	templateUrl: 'views/auth.html',
	controller: 'AuthCtrl as authVm',
      })

      .state('auth.home', {
	url: '/',
	templateUrl: 'views/travels.html',
	controller: 'TravelsCtrl as travelsVm',
      });
  }
})();
