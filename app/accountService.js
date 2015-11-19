(function () {
    'use strict';

    angular
        .module('app')
        .factory('AccountService', AccountService);

    AccountService.$inject = ['$resource'];

    function AccountService($resource) {
        var Account = $resource('/account');

        return {
            findAll: findAll
        }

        function findAll(){
            return Account.get().$promise;
        }

    }
})();