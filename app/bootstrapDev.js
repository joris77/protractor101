(function () {
    'use strict';

    require('angular-mocks');
    require('./main');

    var appDev = angular.module('app', ['main', 'ngMockE2E']);
    appDev.run(function ($httpBackend) {
        $httpBackend.whenGET('/accounts').respond([
            {id: 1, name: 'account 1'},
            {id: 2, name: 'account 2'}
        ]);

        $httpBackend.whenGET(/^\/templates\//).passThrough();
    });

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
})();