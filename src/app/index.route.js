(function() {
  'use strict';

  angular
    .module('angularExpenseManager')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

   
      
    $urlRouterProvider.otherwise('/');
  }

})();
