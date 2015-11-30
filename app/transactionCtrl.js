(function () {
    'use strict';

    angular
        .module('main')
        .controller('TransactionCtrl', TransactionCtrl);

    TransactionCtrl.$inject = ['AccountService'];

    function TransactionCtrl(accountService) {
        var vm = this;
        vm.accounts = [];
        vm.transaction = { amount: 1000};

        vm.save = save;

        activate();

        function activate() {
            accountService.findAll().then(function (accounts) {
                vm.accounts = accounts;
            })
        }

        function save(transaction) {
            alert("Amount " + vm.transaction.amount);
            //transactionService.save(transaction);
        }
    }
})();
