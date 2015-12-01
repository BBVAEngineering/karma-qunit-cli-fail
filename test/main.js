'use strict';

var assert = require('assert');

var defaultFiles = ['test.js'];

it('it should not prepend the file if flag --failOnError', function (cb) {
    process.argv.push('--failOnError');
    var frameworkFactory = require('../lib/index')['framework:qunit-cli-fail'][1];
    frameworkFactory(defaultFiles);
    
    assert.equal(defaultFiles.length, 2, 'files length must be 2');

    cb();
});
