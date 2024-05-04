/**
 * Main test runner.
 */

const { Parser } = require('../src/index');
const assert = require('assert');

/**
 * List of tests.
 */
const tests = [require('./literals-test')];

const parser = new Parser();

function exec() {
  const program = `
    /**
     * Documentation comments: 
     */
    "hello";
  
    // Number:
    42;
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 2));
}

/**
 * Test function.
 */
function test(program, expected) {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
}

// Run all tests:
tests.forEach(testRun => testRun(test));