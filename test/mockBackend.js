appDev = angular.module('appDev', ['app', 'ngMockE2E']);
appDev.run(function($httpBackend) {
    $httpBackend.whenGET(/^\/templates\//).passThrough();
});