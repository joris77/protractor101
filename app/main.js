require('bootstrap-webpack!./bootstrap.config.js');
var $ = require('jquery');

require('angular');
require('angular-resource');

angular.module('main', ['ngResource']);

require('./accountService');
require('./transactionCtrl');



