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

const hiddenString = a2h("Hidden message");
console.log(`Hidden: ${hiddenString}`);
console.log(`Shown: ${h2a(hiddenString)}`);
// Output:
//   Hidden: 󠀇󠁀󠀵󠀵󠀶󠁅󠄳󠁄󠀶󠁐󠁐󠀲󠀸󠀶
//   Shown: Hidden message
```
