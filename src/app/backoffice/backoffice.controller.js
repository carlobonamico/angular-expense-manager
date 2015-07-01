(function() {
  'use strict';

  angular
    .module('angular.expense.manager.backoffice')
    .controller('BackofficeController', BackofficeController);

  /** @ngInject */
  function BackofficeController() {
    this.message = "test backoffice";
    
  }
})();
