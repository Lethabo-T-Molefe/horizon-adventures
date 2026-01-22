/**
 * Progressive Enhancement Script
 * Removes no-js class and adds js class when JavaScript is enabled
 * This should be included in a script tag in the HTML head
 */
(function() {
  'use strict';
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');
})();
