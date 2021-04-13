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
    ['Hello there', 'a regular string'], 
    ['12345', 'a regular number'],  // That's amazing! I've got the same combination on my luggage!
    ['1234.567890', 'a number with a decimal point'],
    ['12.', 'a number that ends with a decimal point'],
    ['133t', 'mixed digits and characters'],
    ['`backtick`', 'a string that starts and ends with a backtick'],
    ["'single quote'", 'a string that starts and ends with a single quote'],
    ['"double quotes"', 'a string that starts and ends with double quotes'],
    ['', 'an empty string'],
    ['     ', 'whitespaces'],
    ['\n\r\t\b', 'special chars'],
];

console.log('Starting Hiddencoder tests...');
console.time('All tests completed in');
for (const [hideThisString, testDescription] of stringsToTest) {
    process.stdout.write(`- Testing ${testDescription}...'\n`);
    for (const [coverString, coverDescription] of stringsToTest) {
        console.time('PASS');
        process.stdout.write(`\twith ${coverDescription}... `);
        test_encode_decode(hideThisString, coverString);
        console.timeEnd('PASS');
    } 
}
console.timeEnd('All tests completed in');