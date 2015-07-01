(function() {
  'use strict';

  angular
    .module('angular.expense.manager.employee')
    .config(function routeConfig($stateProvider) {
    
    console.log("attivazione routing modulo Backoffice");
    $stateProvider
      .state('backoffice', {
        url: '/backoffice',
        templateUrl: 'app/backoffice/index.html',
        controller: 'BackofficeController',
        controllerAs: 'backofficeCtrl'
      });
    $stateProvider
      .state('backofficeInsert', {
        url: '/backoffice/insert',
        templateUrl: 'app/backoffice/backoffice-insert.html',
        controller: 'BackofficeController',
        controllerAs: 'backofficeCtrl'
      });
      

  }); 

})();
