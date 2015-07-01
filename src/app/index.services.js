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
        date: "10/1/2015", 
        type: "train", 
        amount : "10"
      },
      {
        date: "10/1/2015", 
        type: "hotel", 
        amount : "100"
      },
      {
        date: "10/1/2015", 
        type: "taxi", 
        amount : "19"
      }
    ];
    
    this.getExpenses = function (){
      return expenses; 
    };
    
  }

})();
