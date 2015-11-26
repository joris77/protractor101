(function () {
    'use strict';

    angular.module('httpBackEndMock', ['ngMockE2E'])
        .run(function ($httpBackend) {

                      $httpBackend.whenGET('/accounts').respond([
                          { id: 1, name: 'account 1'},
                          { id: 2, name: 'account 2'}
                      ]);
        })
})();