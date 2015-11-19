require('angular');
require('angular-resource');

angular.module('app', ['ngResource']);

require('./accountService');
require('./transactionCtrl');

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});

