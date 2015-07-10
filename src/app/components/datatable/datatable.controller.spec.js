(function() {
  'use strict';

  describe('datatable controller', function(){
    var controller; 
    var scope; 
    var data = [
      {
        name: "aaa"
      }, 
      {
        name: "bbb"
      }, 
    ];
    
    beforeEach(module('angular.common.datatable'));

    beforeEach(inject(function($controller, $rootScope){
          scope = $rootScope.$new();
          controller = $controller('DatatableController'
            , {
                '$scope': scope
            });
    }));

    it('result',function() {
      
      expect(controller.items.length >0).toBe(true);
    });
    
    describe('when I load some data', function(){
      it('should contain that data',function() {
        controller.items = data; 
        
        expect(controller.items.length).toBe(2);
      });
    });
    
    describe('when I select the first row', function(){
      it('should have selected that row',function() {
        controller.items = data; 
        controller.select(data[0]);
        
        expect(controller.isSelected(data[0])).toBe(true);
      });
    });
    
  });
})();
