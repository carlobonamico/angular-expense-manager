(function() {
  'use strict';


    /** @ngInject */
    function DatatableController() {
      var vm = this;
      this.selected = {}; 
      
      if (!this.items)
      {
        this.items = [
        {
          a: "a", 
          b: "b"
        }, 
{
          a: "a2", 
          b: "b2"
        }, 
        
        
      ];
      }
      this.isSelected = function (item)
      {
        if (item == this.selected)
          return true; 
        else 
          return false; 
      };
      
      this.select = function (item){
        this.selected = item ;
        this.onSelected(item); 
      };
      // "vm.creation" is avaible by directive option "bindToController: true"
     
    }
  
 angular
    .module('angular.common.datatable')
    .controller('DatatableController', DatatableController);
    
  
  /** @ngInject */
  function datatable() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/datatable/datatable.html',
      scope: {
          creationDate: '=',
          items: "=data", 
          onSelect : "&"
      },
      controller: "DatatableController",
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;
  }
  angular
    .module('angular.common.datatable')
    .directive('datatable', datatable);


})();
