var parseArgs = require('minimist');

var argv = parseArgs(process.argv.slice(2));

var blendQunit = function(files) {    
    if(argv.failOnError){
        files.unshift({
            pattern: __dirname + '/karma-qunit-cli-fail.js',
            included: true,
            served: true,
            watched: false
        });
    }
};

blendQunit.$inject = ['config.files'];

// PUBLISH DI MODULE
module.exports = {
    'framework:qunit-cli-fail': ['factory', blendQunit]
};
