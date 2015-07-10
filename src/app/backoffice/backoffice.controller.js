(function() {
  'use strict';

  angular
    .module('angular.expense.manager.backoffice')
    .controller('BackofficeController', BackofficeController);

  /** @ngInject */
  function BackofficeController(expensesService) {
    
    this.expenses = expensesService.getExpenses(); 
    
    this.message = "test backoffice";
    
  }
})();
