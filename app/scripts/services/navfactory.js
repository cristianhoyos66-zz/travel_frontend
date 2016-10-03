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
	name: 'Travels',
        icon: 'airplanemode_active',
        sref: 'auth.home'
      }
    ];
    
    var service = {
      menuItems: menuItems,
    };

    return service;

  }
  
})();
