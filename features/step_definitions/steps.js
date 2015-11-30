var w = require('../support/world');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var expect = chai.expect;

var steps = function () {
    this.World = w.World();

    this.Before(function (scenario, callback) {
        callback();
    });

    this.When(/^I open the transaction page$/, function (callback) {
        browser.get('http://127.0.0.1:8080/index.html').then(function(){
            callback();
        })
    });

    this.When(/^select "([^"]*)"$/, function (arg1, callback) {
        element(by.model('vm.transaction.account')).$('[label="' + arg1 + '"]').click()
            .then(function(){
            callback();
        });
    });

    this.When(/^insert amount "([^"]*)"$/, function (arg1, callback) {
        element(by.model('vm.transaction.amount')).sendKeys(arg1).then(function(){
            callback();
        });

    });

};
module.exports = steps;