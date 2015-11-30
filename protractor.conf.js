exports.config = {
    baseUrl: 'http://localhost:8080',
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    // set to "custom" instead of cucumber.
    framework: 'custom',

    // path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: [
        'features/*.feature'
    ],
    cucumberOpts: {
        require: 'features/step_definitions/steps.js',
        format: 'pretty'
    }
}