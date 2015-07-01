(function() {
  'use strict';

  angular
    .module('angularExpenseManager')
    .service("expensesService", expensesService);

  /** @ngInject */
  function expensesService($log) {

    $log.debug('runBlock end');
    
    var expenses = [
      {
        employee: "carlo",
        date: "10/1/2015", 
        type: "train", 
        amount : "10"
      },
      {
        employee: "carlo",
        date: "10/1/2015", 
        type: "hotel", 
        amount : "100"
      },
      {
        employee: "marco",
        date: "10/1/2015", 
        type: "taxi", 
        amount : "19"
      }
    ];
    
    this.getExpenses = function (){
      return expenses; 
    };
    
    this.getExpensesForEmployee = function (employee){
      return expenses; 
    };
  }

})();
