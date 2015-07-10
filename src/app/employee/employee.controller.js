(function() {
  'use strict';

  angular
    .module('angular.expense.manager.employee')
    .controller('EmployeeController', EmployeeController);

  /** @ngInject */
  function EmployeeController(expensesService) {
    
    this.expenses = expensesService.getExpensesForEmployee('carlo'); 
    
    this.message = "test";
    
  }
})();
