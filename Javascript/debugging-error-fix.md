1. Scroll up to find error message, error file, and error line number

2. Open file and review opening/closing parenthesis and braces inside function with error.

3. If no problems, check opening/closing parenthesis and braces in rest of functions in file.

4. Check that return statements make sense


*** Think of it this way. You're html gets rendered by react ***

Css is applied when the page loads. So only html that exists in the `elements` tab in chrome dev tools will have a chance for CSS to be applied. 

##error `'React' must be in scope when using JSX react/react-in-jsx-scope`

Make sure you change `import { Component } from 'react';` to `import React, { Component } from 'react';`
