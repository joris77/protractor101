require('bootstrap-webpack!./bootstrap.config.js');
var $ = require('jquery');

require('angular');
require('angular-resource');

angular.module('main', ['ngResource']);

if(module.hot) {
    module.hot.accept('./transactionCtrl',function(){});
}

require('./accountService');
require('./transactionCtrl');



