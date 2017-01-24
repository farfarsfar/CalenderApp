// This will create context for the tests we're running
// and is used as a entry point for our webpack testing config
let testsContext = require.context('.', true, /\.test.js$/);
testsContext.keys().forEach(testsContext);