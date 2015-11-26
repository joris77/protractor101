var pc = require('protractor-cucumber');
var steps = function () {
    var seleniumAddress = 'http://localhost:4444/wd/hub';
    var options = { browser : 'chrome', timeout : 100000 };
    this.World = pc.world(seleniumAddress, options);

    this.Before(function(scenario, callback){
        //pc.addMockModule('httpBackEndMock', backEndMocks.build([backEndMocks.w7Restaurants]));
        callback();
    });

    this.After(function(callback) {
        this.quit(callback);
    });

    this.Given(/^an account with name "([^"]*)"$/, function (arg1, callback) {


        callback();
    });

    this.When(/^I open the transaction page$/, function (callback) {
        this.browser.get('http://127.0.0.1:8080/index.html').then(function(result) {
            callback(result)
        });
    });
};
module.exports = steps;