(function() {
  'use strict';

  angular
    .module('angular.expense.manager.employee')
    .config(function routeConfig($stateProvider) {
    
    console.log("attivazione routing modulo employee");
    $stateProvider
      .state('employee', {
        url: '/employee',
        templateUrl: 'app/employee/index.html',
        controller: 'EmployeeController',
        controllerAs: 'employeeCtrl'
      });
    $stateProvider
      .state('employeeInsert', {
        url: '/employee/insert',
        templateUrl: 'app/employee/employee-insert.html',
        controller: 'EmployeeController',
        controllerAs: 'employeeCtrl'
      });
      

  }); 

})();
