# JavaScript 'arguments' object quirk
This example demonstrates a potential pitfall when working with the `arguments` object in JavaScript functions.  The `arguments` object, while appearing array-like, isn't a true array and lacks some array methods like `forEach` and, in older JavaScript versions, `length` which can cause unexpected behavior when used with for...of loops.

The `bug.js` file shows the error, and `bugSolution.js` presents a corrected version using a modern approach to handling function arguments.