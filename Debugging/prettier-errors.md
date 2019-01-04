# error: eslint: Empty components are self-closing (react/self-closing-comp)
## fix: missing something on the div:
<div id=editor>
  <Editor />
</div>
Old code: error: `<div id="editor">
     </div>`

# Replace `>⏎··················</i` with `·/` (prettier/prettier)
## that should be a self closing html element
ex: it needs this at the end: ` />`
<i className="fa fa-arrow-circle-o-up" aria-hidden="true" />


# error: `eslint: Replace …  ` `·src="src/assets/portfolio.png"·alt="laurelherting.github.io/portfolio"` with `⏎··`
## fix: it wants part of it on a new line

# eslint: Parsing error: JSX value should be either an expression or a quoted JSX text
## fix: ??

# eslint error: eslint: Visible, non-interactive elements with click handlers must have at least one keyboard listener. (jsx-……
## fix: I need to change something in line, ex. Take out <I>(not clickable link), so add a href instead. Possibly take out ’this’ function 

# error: react inline style look inside the element
## ??

# error  Missing radix parameter
## fix: change syntax from es5 to es6/7

# error  Unary operator '++' used   • • •no-plusplus
ex. multiPer++;
## fix: es5-change to es6/7 syntax `multiPer+= 1;`

# error: ReferenceError: div is not defined
## fix: change wording to `const` or `let` inside function

# error: Disallow Reassignment of Function Parameters (no-param-reassign)
## fix: ??

# error: eslint: Replace `↹` with `··` (prettier/prettier)
## fix: wants it spread out onto multiple lines

# error eslint: Unexpected newline after '('. (function-paren-newline)
## fix: wants it on same line

# error eslint: Prefer default export.
## fix: ??

# error eslint: Expected parentheses around arrow function argument having a body with curly braces. (arrow-parens)
## fix: module.exports = (app) => {
Old w/ error: module.exports = app => {
