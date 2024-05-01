/**
 * Main test runner.
 */

const { Parser } = require('../src/index');

const parser = new Parser();

const program = `1231`;

const ast = parser.parse(program);

console.log(JSON.stringify(ast, null, 2));
