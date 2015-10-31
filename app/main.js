require('angular');

angular.module('app', []);

require('./homeCtrl');

angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
});

