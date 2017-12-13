var exec = require('child_process').exec;
require('babel-core/register')(); //babel polyfill ES6

process.on('warning', (warning) => {
  console.log(warning.name);
  console.log(warning.message);
  console.log(warning.stack);
});

var verbose = false;

if (process.argv[2] === '--v') {
  verbose = true;
}

var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

jasmine.loadConfig({
  spec_dir: './',
  spec_files: [
    'api/**/*[sS]pec.js'
  ],
  helpers: [
    '/api/utils/jasmineHelpers.js'
  ]
});

jasmine.addReporter(new SpecReporter({
  spec: {
    //displayStacktrace: 'summary',
    displaySuccessful: verbose,
    displayFailedSpec: true,
    displaySpecDuration: true
  }
}));

jasmine.execute();
