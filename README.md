# DEPRECATED

# karma-qunit-cli-fail [![Build Status](https://travis-ci.org/BBVAEngineering/karma-qunit-cli-fail.svg?branch=master)](https://travis-ci.org/BBVAEngineering/karma-qunit-cli-fail) [![GitHub version](https://badge.fury.io/gh/BBVAEngineering%2Fkarma-qunit-cli-fail.svg)](https://badge.fury.io/gh/BBVAEngineering%2Fkarma-qunit-cli-fail) [![Coverage Status](https://coveralls.io/repos/BBVAEngineering/karma-qunit-cli-fail/badge.svg?branch=master&service=github)](https://coveralls.io/github/BBVAEngineering/karma-qunit-cli-fail?branch=master)

## Information

[![NPM](https://nodei.co/npm/karma-qunit-cli-fail.png?downloads=true&downloadRank=true)](https://nodei.co/npm/karma-qunit-cli-fail/)

<table>
<tr>
<td>Package</td><td>karma-qunit-cli-fail</td>
</tr>
<tr>
<td>Description</td>
<td>Karma qunit plugin to stop runner if test fails</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.10</td>
</tr>
</table>

## Installation

Just add `karma-qunit-cli-fail` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma-qunit-cli-fail": "~0.1.0"
  }
}
```
Or issue the following command:
```bash
npm install karma-qunit-cli-fail --save-dev
```

## Configuration

The code below shows a sample configuration of the preprocessor (must be inserted after `qunit`).
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['qunit', 'qunit-cli-fail'],
  });
};
```

## Usage

Run karma from cli and add the next flag: `--failOnError`
