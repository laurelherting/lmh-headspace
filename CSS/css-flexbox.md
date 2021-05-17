layout methods: floats, inline-block, absolute positioning. Stack & layout
elements. build flex box w/ less steps

BASICS AND TERMS
first step: create a flex container. flex items -direction (div, ul)
main axis (primary) & cross axis

CREATE CONTAINER
// makes it so words don’t stretch all the way to the edge of the page
ex. <div classname=“container”>

Define
Example #1,
.container { display: flex; }

CONTROL DIRECTION OF FLEX ITEMS
flex-direction applies to flex container only
Example #1, .css, default “row”, to reverse use:
{ flex-direction: row-reverse; }
Example #2, column change
{ flex-direction: column; }
Example #3, column reverse
{ flex-direction: column-reverse; }

FLEX WRAP
flex containers only. Fix height, as needed.
Example #1, wrap to next line, multi-line text container
.container { display: flex; flex-wrap: wrap; height: —px; }

DISTRIBUTE SPACE IN FLEX CONTAINER
position & align flex items on main axis, how space distributed
Example #1, set at end of line
.container { justify-content: flex-end; }
Example #2, set to center
.container { justify-content: center; }
Example #3, give "space-between”/"space-around"
.container { justify-content: space-between; }

CHANGING ORDER OF FLEX ITEMS
default: laid out in source code order
Example #1, item 6 appears first
.item-6 { order: -1; }

GROW FLEX ITEMS
grow/shrink in avail space inside flex container, great for flexible columns. Apply to flex items only, not flex container=no effect on it.
Example #1, items adjust to width
.item { flex-grow: 1; }
Example #2, gives 2x amount of space, display columns similar on desktop/mobile
.item-3 { flex-grow: 2; }

SMARTER LAYOUTS W/ FLEX-BASIS & FLEX
control over size of flex items, sets value w/out specificity, px, em, %
Example #1, size evenly distributed
{ flex-basis: 200px; }
Example #2, 2x space, but shorthand sets it to 0, so it doesn’t break to a new line
.item-2 { flex: 2; }

ALIGN FLEX ITEMS ON CROSS AXIS
cross axis runs perpendicular to main axis
align items applies to flex containers only. Align self applies to flex items only.
Example #1, run vertically, give height to give more vertical space, then give align property. stretch=default, equal ends
{ height: 450px; align-items: stretch; }
Example #2, packs items toward end of cross axis.
{ align-items: flex-end; }
Example #3, centers, easiest way to center in cross axis
{ align-items: center; }

VERTICAL & HORIZONTAL CENTERING
Center content
Example #1, align in center of container
{ justify-content: center; align-items: center; }
Example #2, same result, absorbs space
{ align-self: center; }
Example #3, browser automatically puts space in
{ margin: auto; }

BUILD NAV BAR W/ FLEXBOX
source-order independence to build responsive web nav.
Example #1, css, position on left of header, aligns left & right and space in between them
.main-header { justify-content: space-between; }
Example #2, define flex, display side-by-side, make parent nav flex container
.main-header, { .main-nav; display: flex; }
Example #3, add column
.main-header { flex-direction: column; align-items: center; }
Example #4, put name and nav on same line, inside media query
.main-header { flex-direction: row; }

CREATE A 2-COLUMN LAYOUT W/ FLEXBOX
w/out using floats or inline-block display
Example #1, equal width columns with flex-grow & flex properties
.col { flex: 1; }
Example #2, gets 2x amount the space
.primary { flex: 2; }

CREATE A 3-COLUMN LAYOUT W/ FLEXBOX
calculations less complex. use flex-basis to set initial size of columns
Example #1, define row, create new rule .col (columns take up equal space within row).
.row { display: flex; }
.col { flex: 1; }
Example #2, set initial size, columns will shift down when it runs out of room, each taking up 50% of space
.col {flex: 1 50%; }
.row { flex-wrap: wrap; }
Example #3, want all 3 columns on same line
.col { flex-basis: 0; }
.primary { flex-grow: 1.4; }
Example #4, rearrange column order, primary displayed in center
.secondary { order: -1; }

ALIGN ITEMS TO BOTTOM OF COLUMN
align elements w/ bottom edge of container, regardless of amount of content inside container
Example #1, make flex items containers, both flex item and container
.col {flex: 1; flex-direction: column; }
Example #2, align buttons to bottom left
.button { margin-top: auto; align-self: flex-start; }

CREATE A STICKY FOOTER W/ FLEXBOX
footer that sticks to bottom of page, regardless of amount of content
Example #1, stacked vertically,
body { display: flex; flex-direction: column; min-height: 100vh; }
.row { flex: 1; }
Example #2,
body { display: flex; flex-direction: column; min-height: 100vh; }
.main-footer { margin-top: auto; }

SIMPLE NOTE ON FLEXBOX
display: flex; // turn on flex
flex-direction: row-reverse; // aim west
flex-direction: column; // aim south
flex-direction: column-reverse; // aim north
// east, west left, right

align-items: flex-start;
// aligned to the top aiming east or west
