(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name travelFrontendApp.controller:SigninCtrl
   * @description
   * # SigninCtrl
   * Controller of the travelFrontendApp
   */
  angular.module('travelFrontendApp')
    .controller('SigninCtrl', SigninCtrl);

  SigninCtrl.$inject = ['authFactory', '$state'];
  
  function SigninCtrl(authFactory, $state) {

    var vm = this;
    vm.signin = signin;

    function signin() {
      authFactory.signin()
	.then(function(data) {
	  if (data.session) {
	    $state.go('auth.home');
	  }
	});
    }
    
  }
  
})();
