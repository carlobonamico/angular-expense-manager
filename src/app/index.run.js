(function() {
  'use strict';

  angular
    .module('angularExpenseManager')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
