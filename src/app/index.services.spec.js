(function() {
  'use strict';

  describe('expeses service', function(){
    var service; 
    
   
    
    beforeEach(module('angularExpenseManager'));

    beforeEach(inject(function(expensesService){
          service = expensesService;
    }));

    
    describe('when I call getExpensesByEmployee', function(){
      it('should contain data only for that employee',function() {
        var result = service.getExpensesForEmployee("aaa");
        
        expect(result.length).toBe(0);
      });
    });
    
    
  });
})();
