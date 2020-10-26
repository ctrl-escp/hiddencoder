/*
    Hiddencoder
    Encode ASCII strings into zero-width unicode characters, and decode back into ASCII
*/
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*(),.`~-=?\\/<>;:[]{}"_+|\n\r\t ' + "'";
const hidingChars = '%uDB40%uD';
const initValue = 65;   // Use 65 ('A') to avoid having values > 100 or < -100
const CODES = {};
for (const c of alphabet) {
    const charPoint = c.codePointAt(0);
    const pointDiff = initValue - c.codePointAt(0);
    let u = pointDiff < 0 ? 'C' : 'D';
    const val = '' + Math.abs(pointDiff);
    u += (val.length < 2 ? '0' : '') + val
    CODES[charPoint] = unescape(u);
    CODES[unescape(u)] = charPoint;
}

/**
 * Encode ASCII chars to hidden string
 * @param {string} inputAscii 
 */
function a2h(inputAscii) {
    let output = '';
    for (const c of inputAscii) {
        output += unescape(hidingChars + CODES[c.codePointAt(0)]);
    }
    return output
}

/**
 * Decode hidden strings back to ASCII
 * @param {string} inputHidden 
 */
function h2a(inputHidden) {
    let output = '';
    const hiddenCode = escape(inputHidden).split(hidingChars);
    for (const c of hiddenCode) {
        if (!c) continue;
        output += String.fromCodePoint(CODES[c]);
    }
    return output;
}

module.exports = {
    a2h,
    h2a
}
