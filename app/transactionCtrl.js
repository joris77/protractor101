(function () {
    'use strict';

    angular
        .module('app')
        .controller('TransactionCtrl', TransactionCtrl);

    TransactionCtrl.$inject = ['AccountService'];

    function TransactionCtrl(accountService) {
        var vm = this;
        vm.accounts = [];
        vm.transaction = {};

        vm.save = save;

        activate();

        function activate() {
            accountService.findAll().then(function (accounts) {
                vm.accounts = accounts;
            })
        }

        function save(transaction) {
            transactionService.save(transaction);
        }
    }
})();
