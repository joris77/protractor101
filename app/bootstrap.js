(function () {
    'use strict';

    require('./main');

    angular.module('app', ['main']);

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    })();
});