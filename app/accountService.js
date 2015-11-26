(function () {
    'use strict';

    angular
        .module('main')
        .factory('AccountService', AccountService);

    AccountService.$inject = ['$resource'];

    function AccountService($resource) {
        var Account = $resource('/accounts');

        return {
            findAll: findAll
        }

        function findAll(){
            return Account.query().$promise;
        }

    }
})();