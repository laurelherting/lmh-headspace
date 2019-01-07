# Exponentiation Operator **
## ES5 `Math.pow(2, 4);` —> ES6  `2**4;`

# [].includes
## ES5 `nums.indexOf(3);` —> ES6 nums.includes(3);

# ES2017 async functions
## simplifies writing asynchronous code, specifically Promises, reads like synchronous code
## Await: follows an async function, pauses it and is followed by a Promise
    Think of it as a pause: waits for promise to be resolved and then returns the resolved value

# condense from es5 to es6/7
Dramatically condense arrow function:
`.map(email => { return { email: email }})
(We have an identical key and value),
So it becomes… { return { email }}
## B/c we just have one JS expression / function (inside arrow function), we
can remove the return key word and the outside curly braces
.map(email => { email })
To avoid confusion w/ JS, now wrap it in ( ):
.map(email => ({ email })
