/*
    Hiddencoder
    Encode ASCII strings into zero-width unicode characters, and decode back into ASCII
*/

const unicodePrefix = '%uDB40%uDD';  // An invalid zero-width character followed by the beginning of a unicode for another zero-width character

/**
 * Encode ASCII chars to hidden string
 * @param {string} inputAscii 
 */
function a2h(inputAscii) {
    // Convert each char's code point to hex and append it to the unicodePrefix
    return [...inputAscii].reduce((output, c) => output += (unescape(unicodePrefix + c.codePointAt(0).toString(16))), '');
}

/**
 * Decode hidden strings back to ASCII
 * @param {string} inputHidden 
 */
function h2a(inputHidden) {
    // Skip the first item in the array since it'll be empty
    return escape(inputHidden).split(unicodePrefix).slice(1).reduce((output, c) => output += (String.fromCodePoint(parseInt(c, 16))), '');
}

module.exports = {
    a2h,
    h2a
}
