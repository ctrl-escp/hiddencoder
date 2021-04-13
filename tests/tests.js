const assert = require('assert');
const hidenc = require('../src/index');

/**
 * Encode a string and decode it back.
 * Append and prepend a cover string to verify it does not interfere with encoding/decoding.
 * Assert decoded string matches original string.
 */
function test_encode_decode(originalString, coverString) {
    const withoutHiding = hidenc.a2h(originalString);
    const hideBeforeCover = coverString + hidenc.a2h(originalString);
    const hideAfterCover = hidenc.a2h(originalString) + coverString;
    const hideBetweenCover = coverString + hidenc.a2h(originalString) + coverString;
    for (const hiddencodedString of [withoutHiding, hideBeforeCover, hideAfterCover, hideBetweenCover])
    assert(originalString === hidenc.h2a(hiddencodedString), `The string ==>${hiddencodedString}<== was not decoded properly back to ${originalString}`);
}

const stringsToTest = [
    'Hello there', 
    '123456789.0',
    '123 number and characters 890',
    '`start and end with backtick`',
    "'start and end with single quote'",
    '"start and end with double quote"',
    '',
    ' ',
    '\n\r\t'
];

console.log('Starting Hiddencoder tests...');
console.time('All tests completed in');
for (const hideThisString of stringsToTest) {
    process.stdout.write(`- Testing ${hideThisString}...'\n`);
    for (const coverString of stringsToTest) {
        console.time('PASS');
        process.stdout.write(`\twith ${coverString} ...`);
        test_encode_decode(hideThisString, coverString);
        console.timeEnd('PASS');
    } 
}
console.timeEnd('All tests completed in');