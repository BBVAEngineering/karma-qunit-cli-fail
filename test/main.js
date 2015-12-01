'use strict';

var assert = require('assert');

var defaultFiles = ['test.js'];

it('it should add the file if flag --failOnError', function (cb) {
    process.argv.push('--failOnError');
    var frameworkFactory = require('../lib/index')['framework:qunit-cli-fail'][1];
    frameworkFactory(defaultFiles);
    
    assert.equal(defaultFiles.length, 2, 'files length must be 2');
    assert.equal(defaultFiles[0], 'test.js', 'files should not be sorted');
    assert(defaultFiles[1].pattern.match(/karma-qunit-cli-fail.js/), 'last file must be karma-qunit-cli-fail.js');

    cb();
});
