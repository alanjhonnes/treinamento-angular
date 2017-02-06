// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
// var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './features/**/*.feature'
  ],
  capabilities: {
    'browserName': 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  // framework: 'jasmine',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
    require: [
      'features/**/*.steps.ts'
    ],
    format: 'pretty'
  },
  // jasmineNodeOpts: {
  //   showColors: true,
  //   defaultTimeoutInterval: 30000,
  //   print: function() {}
  // },
  useAllAngular2AppRoots: true,
  beforeLaunch: function() {
    require('ts-node').register({
      // project: 'e2e'
      project: 'features'
    });
  },
  onPrepare: function() {
    // jasmine.getEnv().addReporter(new SpecReporter());
  }
};
