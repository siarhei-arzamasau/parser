# Parser

Parser which parses code and builds AST

## Installation

Run `npm ci`

## Usage

### Parse the code from the command-line

`npm run eval '<YOUR CODE>'`

Example:

`npm run eval 'let x = 10; console.log(x);'`

### Parse the code from the source file

`npm run eval-src '<PATH TO SRC>'`

Example:

`npm run eval-src '__tests__/example.lt'`

## Tests

Run `npm run test`
