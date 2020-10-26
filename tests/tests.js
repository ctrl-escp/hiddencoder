const assert = require('assert');
const hidenc = require('../src/index');

/**
 * Encode a string and decode it back.
 * Assert decoded string matches original string
 */
function test_encode_decode() {
    const originalString = "This is a test";
    assert( originalString === hidenc.h2a(hidenc.a2h(originalString)))
}

const availableTests = [test_encode_decode];

for (const test of availableTests) {
    test();
}