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

      .state('signin', {
	url: '/signin',
	templateUrl: 'views/signin.html',
	controller: 'SigninCtrl as SigninVm',
      })

      .state('signup', {
	url: '/signup',
	templateUrl: 'views/signup.html',
	controller: 'SignupCtrl as SignupVm',
      })
    
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
