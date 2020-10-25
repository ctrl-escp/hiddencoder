/**
 * Decode a file which was encoded with Hiddencoder
 */

const {h2a} = require('hiddencoder');
const fs = require('fs');

const inputFilename = process.argv[2];
const inputFile = fs.readFileSync(inputFilename, 'utf-8');
fs.writeFileSync(`${inputFilename}.dec`, h2a(inputFile));
