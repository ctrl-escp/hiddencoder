# Hiddencoder
Encode ASCII strings into zero-width unicode characters, and decode back into ASCII

## Description
A simple encode-decode tool.
Got the idea from [@FakeUnicode](https://twitter.com/FakeUnicode)'s [tweet](https://twitter.com/FakeUnicode/status/882419542990831616).

This tool takes an ASCII string and encodes it into zero-width unicode characters, which won't show up when printing the unescaped string.
A decode operation is also available.

## Usage
```Javascript
const {a2h, h2a} = require('hiddencoder');

const hiddenString = a2h("Hidden string");
console.log(`Hidden: ${hiddenString}`);
console.log(`Actual: ${h2a(hiddenString)}`);
// Output:
//   Hidden: 󠀇󠁀󠀵󠀵󠀶󠁅󠄳󠁄󠀶󠁐󠁐󠀲󠀸󠀶
//   Actual: Hidden message
```

### Example usage:
Use the [example files](example/) to encode a file in order to hide its content:

Encode the code in [`encode.js`](example/encode.js) file by using it on itself
```Bash
node encode.js encode.js
```
This will save the encoded output into [`encode.js.enc`](example/encode.js.enc), and will seem empty

Decode the content back into readable form by using [`decoder.js`](example/decoder.js)
```Bash
node decode.js encode.js.enc
```
This will save the decoded output into [`encode.js.enc.dec`](example/encode.js.enc.dec)