CSS Reset with Normalize
A CSS reset removes the subtle browser inconsistencies in margins, padding, line-height and font sizes to ensure that your layout displays as consistently as possible across all browsers.
Resources
* Download normalize.css
* About normalize.css
Other CSS reset methods
* Eric Meyer’s Reset CSS
* Popular CSS resets, all in one place

Creating a Layout Wrapper
commonly used to center a layout on the page. The wrapper keeps a layout from looking too wide or too narrow depending on the device or viewport width. This video covers two common ways to create a wrapper in your layout.
* Giving the wrapper a width prevents the layout from stretching too wide.
* Setting the left and right margins to the value auto centers the wrapper in the browser.
* One advantage to using <body> as the wrapper is that you don’t have to add an extra <div> in your markup to contain your layout.
* If you want to give your page a full background color or image, you'll need to apply it to the <html> element, and you can't place any elements outside of the<body>.
* Using a wrapper <div> is more appropriate if your site has elements that need to be placed outside the wrapper

Example #1, add wrapper in body element w/ a div
<body>
     <div class=“wrapper”></div>
next, cut div and place under closing header tag

Why Vertical Margins Collapse
why vertical margins collapse and how to prevent them from collapsing.
Resources
* MDN - Mastering margin collapsing
Video review
* If there is no content, padding, or border area to interrupt two touching margins, the margins collapse to the largest of the two margin values.
* You may experience margins collapsing in adjacent elements like paragraphs and divs.
* If a div's bottom margin is larger than the top margin of the div below it, the margin area between the divs collapses to the largest of the two margin values.
Example #1, remove gap, set h1 margin to 0
h1 {margin-top: 0;}
Example #2, remove gap, give main-header any top heading value
.main-header {padding: 1em 0:}
Example #3, remove gap w/ name rule
.name {margin: 0;}

Centering Page Content and Creating a Full-width Header
A common layout structure in web design involves a centered content area with a header and footer that take up the full width of the page.
* Depending on your design, you may want the header and footer in your layout to stretch from edge to edge of the browser so the left and right sides won't appear cut off.
* This approach makes the layout feel open and less constrained.
* One approach is to create a wrapper the main content and an inner wrapper for the content inside the header and footer.
* You can leave 'outer' elements like the header and footer at their default 100% width.
* It's common to have more than one wrapper on a page and even to have containers inside of containers.

Example #1, Create a wrapper, in html, delete wrapper/ container div(opening and closing)
<div class=“container”.
Next, wrap the pages main content in a wrapper/ container div, above h2
Example #2,  
div class=“container”>
add closing div below opening footer tag
footer? center a line b/c it doesn’t have much content
in css, add
.container { }
Example #3, stretches, change wrapper div to container to center content in main header
Example #4, in css, center align footer content
.main-footer { text-align: center; }

Using a Mobile First Approach
When you use a mobile-first layout approach with CSS, you serve the basic layout styles and minimal amount of code to style a page for a small, mobile device first. Then, using media queries, you add breakpoints which adjust the layout for wider screens and devices.
Resources
* Mobile First - An adaptive, future-friendly solution for website design
* Brad Frost - Mobile First Responsive Web Design
* Box-Sizing: The Secret to Simple CSS Layouts
* Take Control of the Box Model with box-sizing
Video review
* It's easier to build a mobile layout when you're first starting out because you don't have to worry about any of the complex features of wider, desktop layouts.
* Mobile layouts are usually simple one column layouts
* When you use a mobile-first layout approach, you define all the common layout styles before adding any media queries.
* box-sizing: border-box; forces any padding and borders into the width and height of an element instead of expanding it.
Related videos
* Take a Mobile First Approach
* box-sizing and max-width
Example #1, code in css, media queries to build layout up from low to larger screen, also max-width so container doesn’t get larger than 1000px
@media (min-width: 769px) {
     .container {
          max-width: 1000px; } }
Example #2, add padding to base container rule: to separate margins on either side of page
.container {
     padding-left: 1em;
     padding-right: 1em; }
**Open dev tools to check padding
Example #3, use box sizing property to prevent padding to breaking/ expanding into container. Create new rule: universal rule
* { box-sizing: border-box: }
Creating a Sticky Footer
a sticky footer is a footer that sticks to the bottom of the page regardless of the amount of content on the page.
Sticky footer tips

If you still see a gap below the footer in browsers like Firefox and IE, or when you change the browser's zoom, give .main-footer a height or min-height value of89px.
Resources
* CSS Tricks - Sticky Footer
* MDN - min-height
* MDN - calc()
* Sizing with vh units
Video review
If a page’s content is shorter than the height of the browser, the page may display a big, undesirable gap between the bottom of the viewport and the footer. In the markup, add a new <div> that wraps the header and main container elements.
Related videos
* The CSS calc() Function - workshop

Example #1, in html, wrap div
<body>
     <div class=“wrap”></div>
add closing div tag right below closing div tag under body
Example #2, in css, force footer to bottom of page “min-height"
.wrap {
     min-height: cal(100vh - 89px);
}
Example #2, in css, use calc function to fix footer height problem. The result will be the value for the min-height.
.wrap {
     min-height: calc(100vh - 89px);
}

Positioning Elements Side-By-Side with Inline Display
how changing element display values from block to inline affects surrounding elements and the space they take up on a page. For instance, you can make list items, which normally appear stacked on top of each other, appear side by side to form a navigation bar.
Resources
* MDN - display
Video review
* Inline elements, like images, links and span tags, do not create line breaks in a layout; they appear on the same line as the content and elements beside them.
* Block-level elements, like divs, paragraphs and headings, stack on top of each other and expand to fill their parent.
* The browser does not apply width and height properties, or top and bottom margin settings to inline elements.
* An inline element will only accept left/right margins and any padding value.
Example, #1 side by side, change from block to inline element, for it to be on same line, set nav items on same line as main
.name,
.main-nav,
.main-nav li {
     display: inline;
}
Example #2, targets class name, nothing changes because padding trumps from code above
.name {
     width: 240px;
     margin: 50px 0;
}
Example #3, pushes main nav, only horizontally, never vertically
.name {
     width: 240px;
     margin-right: 50px;
}
Example #4, in-line naturally flow next to each other & only take on left and right values, never top & bottom, padding doesn’t make it taller, just 15px wider on left and right sides
.name a,
.main-nav a {
     padding: 10px 15px ;
}
Removing Gaps Between Inline and Inline-Block Elements
usually see default whitespace between elements when you set their display value to inline or inline-block. If you don't want the spaces in your design, there are several ways you can remove them.
Other methods for removing the default white space
* Setfont-size: 0; on the parent element. The space is a character space, so setting the font-size to zero makes the size of the space zero as well. But, you'll need to set the font size of the inline-block child elements back to your desired size.
* Adding an HTML comment between the inline-block elements will also remove the space
Resources
* MDN - display
* Inline-block - The Secret to Designing Layouts without Floats
Video review
* The browser interprets the line breaks and spaces in the HTML as content.
* The browser adds spaces between elements displayed inline and inline-block, just like it adds spaces between words.
* You can remove the gaps by applying a small, negative right margin to the elements.
* The element's font-size value affects the size of the gaps between inline and inline-block elements. The larger the font size, the more you'll need to compensate with margins, so you'll need to experiment with negative margin values.
Example #1, change from block to inline, remove spaces
put li next to one another in html
Example #2, css, new rule to remove spaces (preferred way) closes gap in default gaps. works great for font size of 16px.
.main-nav li {
     margin-right: -4px;
}
Example #2, larger the font size, more you need to compensate, or add more margin to add separation between links for easy viewing
.main-nav{
     margin-right: 12px;
}
The Column Layout Challenge
 CSS display settings.
Resources
* MDN - display
* vertical-align content
Challenge instructions
1. Target the two columns inside the main container to display two equal-width columns.
2. Display both columns horizontally so that they appear side by side on the same line.
3. You're building the column layout using a mobile first approach, so the layout styles should apply to large screens only.
Example #1,  negative  margin pulls columns together to close gap
.col {
     display: inline-block;
     width: 50%;
margin-right: -4px;
background: reba(217,228,234, .5); }
Example #2, to adjust alignment of an inline adjust element- use the vertical align property 
.col {vertical-align: top;}
Example #3, Gutters-spaces between columns to make content easier to read
.col {padding-left: 1em; padding right: 1em;}
How Floats Work
taken out of flow
Floats are similar to the inline-block method you learned in the previous section. You can layout elements side by side to create horizontal navigation menus and columns. The biggest difference between floats and inline-block is that floated elements are taken out of the normal document flow and content flows, or wraps, alongside them.
Resources
* CSS Floats 101 - A List Apart
* MDN - float
Video review
* By default, browsers display elements in the order they appear in the HTML source code. This order is called the normal document flow.
* Elements in the normal document flow are either block or inline; they appear stacked on top of each other or on the same line as the content and elements beside them.
* When you apply a float to an element, the element gets taken out of the normal document flow and shifted to the left or right side of its container.
* Any content next to the float flows -- or wraps -- around its left or right side.
Related videos
* CSS Basics - Floats
Wrapping Text Around Images with Floats
One of the easiest ways to use floats is with an image. Text will wrap around an image with the float property applied to it, like in a magazine layout.
Resources
* MDN - float
* Nine rules for float behavior
* The float property accepts the values left, right, and none.
* A floated element is technically a block-level element (it accepts any width, height, padding or margins values), but it behaves like an inline element because it doesn't exist on a line of its own, and surrounding content flows around it.
* If you’re ever curious about how your floated layout actually works, apply a dark border or background to the elements to see what’s going on behind the scenes.
Related videos
* CSS Basics - Floats
Example #1, float right, omg pushed to right edge of container,taking up remaining space on line
.feat-img { width: 300px; float: right: }
tip: if I want to see what’s going on more clearly, add dark border
Example #2, create space between img and text, apply margin rule
.feat-img { margin-top: 5px; margin-right: 25px; margin-bottom: 25px}
Example #2, add more separation to feature img by padding and dk grey border
padding: 10px; border: solid 1px #d9e4e;}
Creating a Horizontal Navigation with Floats
Manipulate border w/ floats
Besides wrapping text around images, you can use floats to create entire web layouts. For example, you can float the links in a navigation, or content columns in a container.
Resources
* MDN - float
* Nine rules for float behavior
Video review
* With floats, we don't have to worry about the the extra whitespace that can appear when using inline or inline-block display.
* Floated elements will sit adjacent to each other regardless of the HTML whitespace between them.
* If a block-level element contains floated elements, its height collapses.
Related videos
* CSS Basics - Floats
Example #1, targets class name, add float property element floats to left side of header. It’s technically a block element, but is behaving like an inline element 
.name { float: left;}
Example #2, put more than 1 float on same line
.main-nav { float: right; }
Example #3, floats in header caused nastiness, height collapsed, didn’t expand enough to show title on page
.main-nav li { float: left; margin-left: 12px; }
Clearing and Containing Floats
The floats in the header caused a common, undesirable layout behavior you'll likely face when using floats. When you float elements, the parent container no longer honors the space of the floated elements inside it, so its height collapses.
Resources
* Float clearfix
* The clear property
* The overflow property
* ::after pseudo-element
* display: table;
* A parent container with floated elements may not always collapse to no height at all; if the container includes a padding or height value, it'll have some visible height.
* There are a two common ways to force a collapsed element to expand to the full height of its floated child elements:
    1. Setting the parent element's overflow value to hidden or auto
    2. Clearing the floats with a CSS pseudo-element
* A clearfix fixes the collapsing issue by forcing a container to expand and contain the floated elements.
Related videos
* CSS Basics - Clearing Floats
* Pseudo-element Selectors
Example #1, if it had no padding, header would collapse to 0 height
Example #2, open up collapsed space around header element
Clearing and Containing Floats
The floats in the header caused a common, undesirable layout behavior you'll likely face when using floats. When you float elements, the parent container no longer honors the space of the floated elements inside it, so its height collapses.
Resources
* Float clearfix
* The clear property
* The overflow property
* ::after pseudo-element
* display: table;
* A parent container with floated elements may not always collapse to no height at all; if the container includes a padding or height value, it'll have some visible height.
* There are a two common ways to force a collapsed element to expand to the full height of its floated child elements:
    1. Setting the parent element's overflow value to hidden or auto
    2. Clearing the floats with a CSS pseudo-element
* A clearfix fixes the collapsing issue by forcing a container to expand and contain the floated elements.
Related videos
* CSS Basics - Clearing Floats
* Pseudo-element Selectors
Example #1, open up collapsed space around header elements, forces header to expand, but this can interfere with scrollbar
.main-header { overflow: hidden; }
Example #2, best method to contain float: clear fix, forces container to clear, a pseudo element
.clearfix:: after  {
     content: “”;
      display: table;
      clear: both; } 
** When you apply this clear fix to a non floating element, it moves the element below all floated elements, this movement prevents the container from collapsing 
The Float Challenge
You've learned a lot about CSS floats in this section of course. Now it's your turn to lay out parts of the design using floats.
Resources
* MDN - float
* Float clearfix
* Nine rules for float behavior
1. Give each column inside the main container a fluid width.
2. The 'primary' column can be 60% wide and the 'secondary' column can be 40% -- it's up to you.
3. Use floats to display both columns horizontally so that they appear on the same line.
4. You're building the column layout using a mobile first approach, so the horizontal layout should apply to large screens only.
5. Be aware of collapsing containers caused by floats.
Column layout tips
To add a left gutter to all but the first column, you can use this:
.col + .col { padding-left: 1em; }
To remove the right gutter from the column closest to the right edge of the page, use :last-child
.col:last-child { padding: right: 0;}
Bringing it all together
This snippet floats all columns left and applies a right gutter. It applies a left gutter to all but the first column, so the first column will be flush with the left margin of the page. Then it removes the right gutter from last column, so that it's flush with the right margin of the page.
.col { float: left;
padding-right: 1em;}
.col + .col { padding-left: 1em;}
.col:last-child { padding-right: 0;}
You can also apply a gutter using just a left padding or margin value, like this:
.col { float: left;}
.col + .col { padding-left: 1.52m;}
The Float Challenge Solution
This video covers the solution to the Float Challenge. See notes from “Float Challenge” for details.
Video review
* Use inline-block to lay out navigation items side by side or create a simple two-column layout
* Use inline-block when you need control over center and vertical alignment
* Use floats to flow content along the left or right side of an element
* Floats do not create default horizontal white space between elements
* Be aware of collapsing containers

Column Layout with Media Queries
.primary,
.secondary {
50%; }
How Absolute Positioning Works
gives you precise control over your page layout. CSS positioning makes it easy to place elements, like a menu or an icon, anywhere on the page. This video covers a simple example of how absolute positioning works.
Resources
* MDN - position
* CSS Positioning 101 - A List Apart
* CSS Tricks - position

* Elements with absolute positioning are neither affected by or do not affect other elements in the normal flow of the page.
* They are like layers in Photoshop or Illustrator; you're free to place them anywhere you wish on the page.
* Positioned elements rely on you telling the browser where to place them, using values called positioning offsets, for the element's top, right, bottom or left position.
* When you use absolute positioning, you place the absolutely positioned elements in relation to a parent container; the parent container is the positioning context.
* You can change the positioning context to other containing elements; this lets us position elements precisely where we want them.
Create an Image Caption with Absolute Positioning
example #1,
sits above text
position: absolute;
example #2, place caption in relation to parent element
position: relative;
example #3, place fake caption at bottom edge of img
bottom: 0;
width: 100%;
example #4, in HTML file, places icon away from figurative element, negative value, place small icon above img
<img class=“icon-location” src=”img/location.svg” alt=location>
in CSS file: 
@media (min-width: 769px) 
.icon-location {
width: 35px;
postion: absolute;
top: -50px;
left: -50px; }

FIXED POSITIONING
Stays fixed to size of page, on one spot, no matter size of browser window
Example #1, 
.main-header { position: fixed; }
Example #2, fixed heading
@media { body padding-top: 68px; }

Z-INDEX
Elements sit on top of each other, adds a 3rd element, moves content to front/ back of page, # higher than 0, will only work on fixed value, 
Example #1, fix overlapped header
.main-header { z-index: 1}
