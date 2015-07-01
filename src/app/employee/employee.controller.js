(function() {
  'use strict';

  angular
    .module('angular.expense.manager.employee')
    .controller('EmployeeController', EmployeeController);

  /** @ngInject */
  function EmployeeController() {
    this.message = "test";
    
  }
})();
