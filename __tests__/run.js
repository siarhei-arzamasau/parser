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
  require('./logical-test'),
  require('./unary-test'),
  require('./while-test'),
  require('./do-while-test'),
  require('./for-test'),
  require('./function-declaration-test'),
  require('./member-test'),
  require('./function-call-test'),
];

const parser = new Parser();

/**
 * For manual tests.
 */
function exec() {
  const program = `

  let s = "Hello, world!";
  let i = 0;

  while (i < s.length) {
    s[i];
    console.log(i, s[i]);
    i += 1;
  }

  square(2);

  getCallback()();
  
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
