/**
 * Encode an ASCII file
 */

const {a2h} = require('../src/index');
const fs = require('fs');

const inputFilename = process.argv[2];
const inputFile = fs.readFileSync(inputFilename, 'utf-8');
fs.writeFileSync(`${inputFilename}.enc`, a2h(inputFile));
