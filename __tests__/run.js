/**
 * Main test runner.
 */

const { Parser } = require('../src/index');
const assert = require('assert');

/**
 * List of tests.
 */
const tests = [
  require('./literals-test'),
  require('./statement-list-test'),
  require('./block-test'),
  require('./empty-statement-test'),
  require('./math-test'),
  require('./assignment-test'),
  require('./variable-test'),
  require('./if-test'),
  require('./relational-test'),
  require('./equality-test'),
];

const parser = new Parser();

/**
 * For manual tests.
 */
function exec() {
  const program = `

  x + 5 > 10 == true;
  x + 5 > 10 == false;
  x + 5 > 10 == null;
  
  `;

  const ast = parser.parse(program);

  console.log(JSON.stringify(ast, null, 2));
}

// Manual test:
exec();

/**
 * Test function.
 */
function test(program, expected) {
  const ast = parser.parse(program);
  assert.deepEqual(ast, expected);
}

// Run all tests:
tests.forEach((testRun) => testRun(test));

console.log('\x1b[32m', 'All assertions sucessfully passed');
