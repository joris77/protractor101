describe('home page', function() {
    it('should show message', function() {
        browser.get('http://localhost:8080/index.html');

        var inputElement = element(by.model('home.user.name'));
        inputElement.clear();
        inputElement.sendKeys('joris');

        expect(element(by.id('page-heading')).getText()).toEqual('Hello today joris');

    });
});