(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name travelFrontendApp.navFactory
   * @description
   * # navFactory
   * Factory in the travelFrontendApp.
   */
  angular.module('travelFrontendApp')
    .factory('navFactory', navFactory);

  navFactory.$inject = [];
  
  function navFactory() {
    var menuItems = [
      {
	name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      }
    ];
    
    var service = {
      menuItems: menuItems,
    };

    return service;

  }
  
})();
