(function() {
  'use strict';

  angular
    .module('travelFrontendApp')
    .config(router);

  router.$inject = ['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider'];

  function router($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
    $urlRouterProvider
      .when('/home', '/')
      .otherwise('/');

    $stateProvider

      .state('signin', {
	url: '/signin',
	templateUrl: 'views/signin.html',
	controller: 'SigninCtrl as vm',
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
	controller: 'AuthCtrl as vm',
      })

      .state('auth.home', {
	url: '/',
	templateUrl: 'views/travels.html',
	controller: 'TravelsCtrl as vm',
	data: {
	  title: 'Travels'
	}
      });

    $mdThemingProvider
      .theme('default')
      .primaryPalette('grey', {
        'default': '600'
      })
      .accentPalette('teal', {
        'default': '500'
      })
      .warnPalette('defaultPrimary');

    $mdThemingProvider.theme('dark', 'default')
      .primaryPalette('defaultPrimary')
      .dark();

    $mdThemingProvider.theme('grey', 'default')
      .primaryPalette('grey');

    $mdThemingProvider.theme('custom', 'default')
      .primaryPalette('defaultPrimary', {
        'hue-1': '50'
      });

    $mdThemingProvider.definePalette('defaultPrimary', {
      '50':  '#FFFFFF',
      '100': 'rgb(255, 198, 197)',
      '200': '#E75753',
      '300': '#E75753',
      '400': '#E75753',
      '500': '#E75753',
      '600': '#E75753',
      '700': '#E75753',
      '800': '#E75753',
      '900': '#E75753',
      'A100': '#E75753',
      'A200': '#E75753',
      'A400': '#E75753',
      'A700': '#E75753'
    });

    $mdIconProvider.icon('user', 'assets/images/user.svg', 64);
  }
})();
