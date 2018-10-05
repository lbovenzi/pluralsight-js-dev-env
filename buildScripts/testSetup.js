// This file ins't transpiled, so must use CommonJS and ES5

// Register babel to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
//  In index.js we have import .css so need to disable
//  In this case if we see .css execute this 'empty' function
require.extensions['.css'] = function() {};
