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

#### Debug props

- disables all fields for easy testing
- `props.disabled = true;
- example:
  function FormGroup({
  fieldName,
  label,
  description,
  ariaLabel,
  ariaLabelledBy,
  readOnly,
  parse,
  className: additionalClassNames,
  ...props
  }) {
  props.disabled = true;
  const [dirty, setDirty] = useState(false);

#### Disable in browser

- add `disabled` to className
  -i.e. <button class="primary" disabled="">New</button>

## Error: Objects are not valid as a React child (found: object with keys)

- can't output plain vanilla javascript objects in jsx
- solution: map array of plan js objects to an array of jsx elements (renderable)
  map every object into a jsx equivalent, into a renderable element
  - default vanilla js method that exists on any array
    ex. map every obj into a list item
    (use map method)
    `props.goals.map((goal) => { return <li key={goal.id}>{goal.text}</li> })`

## Multiple root level jsx elements next to each other

- wrap them inside: `<React.Fragment></React.Fragment`
