(function(){
  'use strict';
  angular
    .module('travelFrontendApp')
    .controller('MessagesCtrl', MessagesCtrl);

  MessagesCtrl.$inject = ['messagesService'];
  
  function MessagesCtrl(messagesService) {
    var vm = this;

    vm.messages = [];

    messagesService
      .loadAllItems()
      .then(function(messages) {
        vm.messages = [].concat(messages);
      });
  }

})();
