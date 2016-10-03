(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name travelFrontendApp.controller:TravelsCtrl
   * @description
   * # TravelsCtrl
   * Controller of the travelFrontendApp
   */
  angular.module('travelFrontendApp')
    .controller('TravelsCtrl', TravelsCtrl);

  TravelsCtrl.$inject = ['travelFactory', 'appConstants'];

  function TravelsCtrl(travelFactory, appConstants) {

    var vm = this;
    vm.flights = [];
    vm.flightStatus = appConstants.flightStatus;
    vm.currentDate = new Date();

    getAll();

    function getAll() {
      travelFactory.getAll()
	.then(function(data) {
	  vm.flights = data;
	});
    }
    
    
  }

})();
