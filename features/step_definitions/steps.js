var pc = require('protractor-cucumber');
var steps = function () {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'chrome', timeout : 100000 };
    this.World = pc.world(seleniumAddress, options);

    this.After(function(callback) {
        this.quit(callback);
    });

    this.Given(/^an account with name "([^"]*)"$/, function (arg1, callback) {
        callback();
    });

    this.When(/^I open the transaction page$/, function (callback) {
        this.browser.get('http://localhost:8080/index.html').then(function(result) {
            callback(result)
        });
    });
};
module.exports = steps;