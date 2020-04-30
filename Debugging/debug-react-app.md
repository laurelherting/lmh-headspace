1. babel-node opens file devServer.js
2. devServer.js calls web pack files
3. webpack is har-coded to look for ./src/index.html and ./src/index.js
4. webpack enters into ./src/index.js and transpiles code to es5, creates bundle that is inserted into your index.html file
   1. you can see this in ChromeDevTools
5. ./src/index.js uses ReactDom.render() method call to grab index.html file and inserts all your react jsx html and javascript into <div id=“root”></div>

Important Reminders: # Use `console.log` throughout file
so I understand where every object comes from or is create # Comments have to be wrapped in curly braces using block comments
`{/* This is a comment */}`

    # **Only use lower-case for file names**  for const/let

For a function, no. ex.
function myFunc() {}

# SyntaxError: missing ) after argument list

## error in calling the function

# TypeError: str.split is not a function

Prettier
type `:Prettier` in neovim
it will fix all your prettier warnings / errors if possible.
it'll fix all the indentation issues automatically

# Undefined

## error in console or not calling expected information

1. confirm in React Dev tools that the parent component has the state information you are expecting
2. Use React Dev Tools to locate where that component is being used throughout app

- look through Tools to see where props, parent is located to get it to pull correct information
