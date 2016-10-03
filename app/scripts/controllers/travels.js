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

  TravelsCtrl.$inject = ['travelFactory'];

  function TravelsCtrl(travelFactory) {

    var vm = this;
    vm.flights = [];

    getAll();

    function getAll() {
      travelFactory.getAll()
	.then(function(data) {
	  vm.flights = data;
	});
    }
    
    
  }

})();
