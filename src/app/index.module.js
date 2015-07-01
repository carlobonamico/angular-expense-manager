(function() {
  'use strict';

  angular
    .module('angularExpenseManager',
       ['ngResource', 'ui.router'
         , 'angular.expense.manager.backoffice'
         , 'angular.expense.manager.employee']);

})();
