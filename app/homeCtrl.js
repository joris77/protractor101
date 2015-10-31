(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = [];

    function HomeCtrl() {
        var vm = this;
        vm.user = {
            name: 'know-it'
        };
        vm.greeting = function(){
           return 'Hello today ' + vm.user.name;
        }
    }
})();
