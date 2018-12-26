RESOURCES:
Mozilla Developer Network (MDN)
W3C

INLINE AND INTERNAL STYLES
example #1, Inline: write the CSS in the HTML file, inside element's tag using style attribute.
<body style="background-color: orange;">
example #2, Internal styles are embedded in the <head> section of the HTML document and are defined inside a <style> tag.
<style>
     p {
     font-size: 20px;
     font-weight: bold;
     }
</style>

EXTERNAL STYLES
example #1, Linking to an external style sheet
* The rel attribute specifies the relationship between the HTML document and the linked document
* The href attribute points to the location of the CSS file.
<link rel=“stylesheet" href="css/style.css">

IMPORTING STYLE SHEETS w/ @import
Their notes:
example #1, The @import statement must precede all other CSS rules in a style sheet in order for it to work properly.
@import 'reset-styles.css';

1. CSS is a stylesheet language that handles the presentation layer of a web page.
2. The most efficient way to add CSS to a page is w/ n external stylesheet
3. The .css file ext tells the browser that the file is a style sheet
4. Styles written in one style sheet are shared across multiple web pages

INTO TO SELECTORS
example #1, The universal selector targets every element on the page at once and applies the styles we set.
* {
     margin: 0;
     padding: 0;
}
 
TYPE SELECTORS
example #1, Using type selectors: To target the footer element and change its background color, we can write the following CSS rule:
footer { background-color: lightblue;
}

General notes:
example #2, paragraph rule w/ color
p {
     color: white;
     background-color: lightblue;
}
example #3, header rule w/color change
body {
     color: #878787;
     margin: 0;
}
header {
     background-color: orange;
}
example #4, headings rule
h1 {
     font-size: 90px;
     color: white;
}
h2 {
     font-size: 53px;
}
h3 {
     font-size: 20px;
     color: #48525c;
}
example #5, To target all paragraphs on the page, we can use a type selector:
p {
     color: slategrey;
     font-size: 18px;
}

ID SELECTORS
example #1, 
#primary-content {
     border: 3px solid red; 
}
example #2,
#main-footer {
     padding-top: 60px;
     padding-bottom: 60px;
     border-bottom: solid 10px orange;
}

CLASS SELECTORS
classifies more than 1 element, so more flexible
example #1, replace # w/ .
.primary-content {
     background: grey;
}
example #2, 
.main-header
example #3, center align text
.primary-content {
     text-align: center;
}
.secondary-content {
     border-top: 2px solid lightgrey;
}

REUSING CLASSES
example #1, adding T-border class
Space-separate each class name in the class attribute:

<div class="primary-content t-border rounded">


Then, target each class in the style sheet:
.primary-content {
     background: grey;
}
.t-border {
     border-top: 1 px solid;
    }
.rounded {
     border-radius: 10px;
}

DESCENDENT SELECTORS
example, #1 combine selectors to make them more specific
.main-header span {
     font-size: 26px;
}
ul li {
     margin-bottom: 12px;
}
Difficult CSS Challenge: all in .css file:
Create a descendant selector that targets the span inside the headerelement. Add a font-size property and set the value to 26px.
Next, target the paragraph that is a descendant of the main-content class. Add a font-weight property and set the value to bold.
Finally, target the paragraph that is a descendant of the footer element. Add a color property and set the value to slategrey.
header span { 
  font-size: 26px; 
}
.main-content p { 
  font-weight: bold; 
}

footer p { 
  color: slategrey; 
}

PSEUDO-CLASSES
example #1, :link history, put in style.css file:
a:link {
     color: orange;
}
example #2, target visited class
a:visited {
     color: lightblue;
}
example, #3 hover (curser) 
a:hover {
     color: forestgreen;
}
example #4, active
a:active {
     color: lightcoral;
}
example #5, focus
a:focus {
     color: white;
     background-color: orange;
}

CSS COMMENTS
prevents browser from interpreting 
example #1, 
/* Class Selections */
.main-header {
     background: orange; /* Makes the header bg orange */
}

COMMON DATA TYPES
PIXEL UNITS
example #1, absolute unit, fixed size, consistency, density of viewing device
.main-header {
     width: 960px;
}

PERCENTAGES
example #1, 
.main-header {
     width: 75%;
}
example #2, selecting 2 classes primary & secondary
.primary-content,
.secondary-content {
     width: 60%;
}
example #3, font size
p {
     font-size: 150%;
}

EM UNITS
example #1, value of em is that must more rest of body
body {
     font-size:1em;
}
example #2, 1em=16px, looks like this:
body {
     font-size: 16px;
}
example #3, converting pixels to ems
To convert a px value to its equivalent em value, we can follow a simple formula: divide an element’s px value by the parent element's font-size value. For example,
.intro {
     font-size: 24px;
}
To convert the font-size value of intro to an em value, we'll need to divide 24by the parent element's font-size. In this case, the parent element is the body element, which has the font-size set to 1em, or 16px. (This can be done as a comment, too). 
24/6= 1.5      
a separate  example looks like:
.title {
     color: white;
     font-size: 1.65em;  /* 26px/16px  */
}

This gives us an em-based font-size value of:
.intro {
     font-size: 1.5em;  /* 24px/16px */
}

REM UNITS
example #1, font sizing, The rem unit is similar to the em unit. The difference is that rem is relative only to the root element of the page. This gets us around the compounding font size issue we experience with em units.
h1 {
     font-size: 5.625rem;
}

COLOR VALUES
example #1, Hexadecimal values
.main-header {
     background-color: #ff0033;
}
example #2, RGB Values
a.link {
     color: rgb(255, 169, 73);
}
example #3, RGBa Values
a:hover {
     color: rgba(255, 169, 73, .4);
}

TEXT STYLES
Quick Reference
text-align
Let's us control the horizontal alignment of text.
text-transform
Changes the case of text – whether it's uppercase, lowercase, or capitalized.
text-decoration
Sets the line decoration of elements. We'll commonly use this property to remove underlines in links.

font-weight
Sets how thick or thin the characters are displayed.
example #1, h1 rule make all caps in CSS
h1 {
     font-size: 5.625rem; /* 90px/16px  */
     color: rgba(255, 255, 255, 1);
     text-transform: uppercase;
}
example #2, de-underline
h1 {
     text-decoration: none;
}
example #3, underline
h2 {
     text-decoration: underline;
}
example #4, font weight; sets  thick/ thin characters
normal. copy & paste in h2 rule
h1 {
     font-weight: normal;
}
h2 {
     text-decoration: underline;
     font-weight: normal;
}
example #5, target all paragraphs, whole page has bold titles
p {
     font-weight: bold; 
}

FONT PROPERTIES
Quick Reference
CSS font stacks are prioritized lists of fonts that the browser will cycle through until it finds a font that is installed on the user’s system.
font-family
Defines a typeface for our text.
font-style
Allows italic or oblique faces to be selected within a font family.
http://www.cssfontstack.com/
example #1, in order of availability
body {
     font-family: Helvetica,  Arial,  sans-serif;
     font-style: normal;
}

LINE HEIGHT
With the line-height property, we can increase, or decrease, the vertical gaps between lines of text.
example #1, set overall line-height, browser multiplies element by 1.5 to determine height
body {
     line-height: 1.5;
}
font
example #2, shorthand, lets us write all the font properties in one value.
body {
     font: normal 1em/1.5 “Helvetica Neue”, Helvetica, Arial, sans-serif:
}

THE CSS BOX MODEL
reference:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model

The padding area creates space inside the box, while the margin area creates space outside and around the box.

PADDING
Padding Reference
We can define values for padding as any length or a percentage unit. There are two ways we can set the values for padding. The first way is setting each property individually:
example #1, add color, how much space an element takes up on page, shorthand on bottom
.wildlife {
     color: white; 
     background color: #434a52;
     padding: 18% 24%;

     padding-top: 100px;
     padding-right: 120px;
     padding-bottom: 100px;
     padding-left: 120px;

     padding: 100px 120px 50px 20px;
}
The order of the values is: Top, Right, Bottom, Left. Think clockwise.

BORDERS
border-width
Sets the width of a border.

border-style
Sets the style of the element’s borders.

border-color
Sets the color of a border.
Border
Shorthand property for setting the individual border property values in one place.
example #1, border style 
border-width: 10px;
border-style: solid dotted;
border-color: red  #ffa949 blue green;

border: 10px solid; #ffa949;
border-bottom-style: dashed;
border-left-color: green;
}

MARGINS
example #1, The same order of padding shorthand values applies to the margin property. Shorthand. 
.wildlife {
     margin: 105px 0 60px 0;
}

same as: 
.wildlife {
margin-top: 105px;
margin-right: 0;
margin-bottom: 60px;
margin-left: 0;
}
example #2, give margins top bottom
h2 {
     margin-bottom: .5em; /* 26px */
}
example #3, center content, margins set to be equal-auto
.secondary-content {
     margin: auto;
}

DISPLAY VALUES
example #1, inline block
a:link {
     display: block;
}
example #2, target all elements
li {
     display: inline-block;
     padding: 1 12px;
     border-right: solid 1px;
}
example #3, style links using padding margin & display items
in html, give class attribute
<a class=“callout” href=“#more”.Find out more</a>
copy & paste <a class=“callout” into wildlife too
go back to style sheet/css
above .main-footer, code:
.callout {
     font-size: 1.25em;
     border-bottom: 3px solid:
     padding: 0 9px 3px;
     margin-top: 20px;
     display: inline-block;
}

WIDTH & HEIGHT PROPERTIES
example #1, arrow rule, increase header height 
css:
.arrow {
     width: 50px;
}
.main-header {
     padding-top: 170px;
     height: 850px;
}
example #2, fixed width, add left & right padding to give separation. 
.secondary content{
    width: 960px;
    padding-left: 50px;
     padding-right: 50px;
     margin: auto;
}
Use dev tools to find final px of div. It is 1060px wide because browser adds 100px total 960px to width b/c top & bottom padding are added to div. 

BOX SIZING & MAX WIDTH
With the box-sizing property, we can alter the way the browser calculates an element's total width and height. We're also able to set the maximum width of an element with the max-width property.
Quick Reference
box-sizing
Alters the default CSS box model used to calculate widths and heights of elements.
max-width
Sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value set for max-width.
Related Articles
http://blog.teamtreehouse.com/take-control-of-the-box-model-with-box-sizing

example #1, css, compensate for padding border width values (box-sizing), give property & value forcing padding & border widths into its total width & height.
.secondary-content {
    width: 960px;
     box-sizing: border-box;
     padding-left: 50px;
     padding-right: 50px;
     margin: auto;
}
To do the same for header, just copy & paste box-sizing code under height in .main-header
example #2, Limit width of content w/ max-width
.secondary-content {
    width: 75%;
     padding-left: 50px;
     padding-right: 50px;
     margin: auto;
     max-width: 900px;
}
example #3, add margin bottom property to create separation
img {
     max-width: 100%;
     margin-bottom: 20px;
}

BACKGROUNDS: COLORAS & IMAGES
Quick Reference
background-image
Sets one or several background images for an element. background-size
Sets the size of a background image.
background-repeat
Controls whether or not the image is tiled and how it gets tiled both vertically and horizontally. The value repeat-y repeats the image vertically, while repeat-x repeats the background image horizontally.
example #1, give image
.main-header {
     background-image: url(‘../img/mountains.jpg’);
}

BACKGROUNDS: SIZE & PORTION
background-position
Controls the background position of a background image. By default, a background image’s initial position is the top-left corner of the containing element. background
Shorthand for setting the individual background values in one place.
cover
The cover value adjusts the background area so that it's completely covered by the background image, while maintaining its width and height proportions:
example #1, horizontal, vertical
horizontal=repeat-x,repeat-y=vertical
. main-header {
     background-position: center bottom;
}
example #2, percentages
. main-header {
     background-position: 20% 50%;
}
example #3, cover-scale to size, often used for full-size background images 
. main-header {
     background-size: cover;
     background-position: center;
}
example #4, short-hand, define all values in one declaration, cut & paste values
.main-header {
     background: #ffa949 url(‘../img/mountains.jpg’) no-repeat center;
     background-size: cover;
}
example #5,prevents background img from repeating in any direction background-repeat: no-repeat;

FLOATS
Floats are one of the most commonly used methods for laying out a page with CSS. When an element is floated, the element is taken out of the normal flow of the page and placed along the left or right side of its container.
The following will float an element over to the right side of its container:
example #1, right or left
.tips {
     float: right
}
example #2, each of 2 divs takes up 46% of parent container
.resorts,
.tips {
     width: 46.5%;
}
.resorts {
     float: left;
}
CLEARING FLOATS
example #1, create overflow, but it may mess w/ scroll bar, -2nd border is at bottom, so we know it’s fixed 
.secondary-content {
     overflow: auto;
}
example #2, “clear fix” (preferred method)-css, ‘group’ is from html.  In html, just add float class (‘group’) to div. ‘clear; both’ fixes collapse on both sides of container
/* Float Clearfix ***/
.group: after {
     content: “”;
     clear: both;
}

LISTS
different ways we can use list properties to control the appearance of our lists.
Quick Reference
list-style-type
Sets the appearance of a list item.
list-style-position
Sets the position of a list marker in a list item. By default, the browser displays the list markers outside the list items.
list-style
The shorthand property for setting list-style-type, list-style-image and list-style-position.
ordered=#, unordered=
example #1, ul see square values
ul {
    list-style-type: square;
}
example #2, turn list markers off
 list-style-type: none;
example #3, ordered list markers
ol {
     list-style-type: decimal-leading-zero;
}
example #4, target all list rules on page (outside content flow)
li {
     border: 1px solid #000;
}
example #5, target both elements (ul, ol), now list markers are inside, left aligned. remove indentation. include margin left value of 0
ul,
ol {
     list-style-position: inside;
     padding-left: 0;
     margin-left: 0;
}
example #6, increase gaps, bottom margin
li {
     margin-bottom: 10px;
}
example #7, short-hand, top&bottom margin
ol {
     margin: 30px 0;
}

TEXT SHADOWS
The text-shadow property accepts three length unit values followed by a color value:
example #1, add drop shadows to text, order: horizontal, vertical, blur, color.
h1 {
     text-shadow: 2px 2px 1px #222;
}
The first value sets the horizontal offset of the shadow. The second valuesets the vertical offset. The third is an optional value that sets the blur radius of the shadow. The fourth value is the color value. Tools
* 3D text example - by Mark Otto
example #2, lighter text shadow behind heading text
h1 {
     text-shadow: 0 1px 1px reba(0,0,0 .8);
}

BOX SHADOWS
cast shadows off elements
example #1, The order of values for box-shadow is exactly like the order of values for the text-shadow property:
.wildlife {
     box-shadow: 15px 15px 10px 20px rgba(0, 0, 0, .8);
}
The first value sets the horizontal offset of the shadow. The second value sets the vertical offset. The last value sets the color of the box shadow.
The optional third value defines the blur radius in a box shadow. Theoptional fourth value defines the spread distance of a box shadow.
example #2, Inner shadows
By default, box shadows are created as drop shadows outside of the element. To create an inner shadow, we can add the keyword value inset:
.wildlife {
     box-shadow: inset 0 0 50px rgba(0, 0, 0, 1);
}
example #3, Multiple values
Just like the text-shadow property you can use multiple box-shadow values separated with a comma like so:
.wildlife {
     box-shadow: 15px 15px 10px 20px rgba(0, 0, 0, .8),
                                        inset 0 0 50px 10px rgba(0, 0, 0, 1);
}

BORDER RADIUS
CSS has properties that let us create rounded corners on elements without the need for any images or extra markup. With border-radius, we can define exactly how rounded the borders appear.
example #1, border-radius property is the shorthand property
.box {
     border-top-left-radius: 20px;
     border-top-right-radius: 10px;
     border-bottom-right-radius: 20px;
     border-bottom-left-radius: 10px;
}
example #2, instead of writing each declaration, we can simply use the border-radius property to define the curve of each corner:
.box {
     border-radius: 20px 10px 20px 10px
}
example #3, to set an even border-radius for each side, we'll simply need to define one value:
.box {
     border-radius: 20px;
}
example #4, circle 
border-radius: 50%;
width: 500px;
height: 500px;

GRADIENTS
create smooth and gradual transitions between two or more colors. Common in website backgrounds.
using gradients css:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients
linear-gradient: 
https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
radial gradient:
https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient
example #1, gradient direction control, clockwise
.main-header {
     background-image: linear-gradient(to top, #ffa949, firebrick);
}
example #2, radial-gradient, nice radial shaped, centered in header, shape of elipse
     background-image: radial-gradient(#ffa949, firebrick);
example #3, circle shape
     background-image: radial-gradient(circle, #ffa949, firebrick);

GRADIENT: COLOR STOPS
add color stops to control the progression of colors in a linear and radial gradient. Color stops are stopping points in a gradient that show a specific color at the exact location we set.
quick reference: 
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients#Linear_gradients-Color_stops
example #1, red to dodger blue is wider
background-image: radial-gradient(circle at top right, #ffa949 0%, firebrick 60%, dodgerblue 120%);

TRANSPARENT GRADIENTS & MULTIPLE BACKGROUNDS
CSS lets us layer multiple backgrounds and create gradients where a color value transitions into a transparent value. In this video, we're going to create transparent gradients that overlay our main header's background image.
references:
transparency & gradients:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients#Transparency_and_gradients
CSS & multiple gradients:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Background_and_Borders/Using_CSS_multiple_backgrounds
example #1, 2 gradients to layer background, add to original background, w/ overlay blending
.main-header {
     background: linear-gradient(#ffa949, transparent 90%),
                          linear-gradient(0deg, #fff, transparent),
}

WEB FONTS W/ @FONT-FACE
special types of fonts for screen display, linked to web pages from an external source. Web fonts eliminate the need to depend on the limited number of fonts installed on a user's computers.
Related Videos

* How to Choose and Use Webfonts
Quick Reference

* @font-face
* letter-spacing
Resources

* Font Squirrel – Free web fonts
example #1, 
@font-face{
     font-face: ‘Abolition Regular’;
}
example #2, see abolition in webpage, add top margin value
h1,
     margin: 12px 0 0;
h2 {
     font-family: ‘Abolition Regular’, Helvetica, Arial, sans-serif;
}
example #3, letter spacing, bottom border
.title {
     letter-spacing: .065em; 
     font-weight: 200;
     border-bottom: 2px solid;
     padding-bottom: 10px;     
}
example #4, add arrow to header
.arrow {
     margin-top: 150%;
}

MEDIA QUARIES
With media queries, we're able to enhance the browsing experience of websites on multiple devices and viewport sizes. This allows us to tailor our content to a wide range of devices without having to change anything in the HTML.
Quick Reference
* CSS media queries - MDN
* @media
* Media features
* Probably Use initial-scale=1
Tools
* Window Resizer - Resize browser window to emulate various screen resolutions
example #1,  style block, all type is default, don’t include a semi-colon
@media ( max-width: 960px) {
     body {
          background: royalblue;
     }
     p {
          color: white;
     }
}
example #2,
@media ( max-width: 480px) {
     body {
          background: darkred;
     }
}
example #3, and rule viewport
@media (min-width: 481px) and (max-width: 700px) {
     body {
          background: seagreen;
     }
     p {
     color: white;
     }
}

ADJUSTING THE LAYOUT W/ MEDIA QUERIES
final step in our Lake Tahoe website project, we'll need to add media query breakpoints to adjust the layout for mobile devices and narrow viewport sizes.

Quick Reference
* Using the viewport meta tag to control layout on mobile browsers
Tools
* Device Mode & Mobile Emulation
* Window Resizer - Resize browser window to emulate various screen resolutions
example #1, check to see if device is 1024px or lower, width effects layout, content is barely readable, font sizes too big (header). Adjust w/ media queries. Now it expands to 90% of screen
@media (max-width: 1024px) {
     .primary-content,
     .secondary-content {
     width: 90%;
     }
}
example #2, fix height and columns
@media (max-width: 768px) {
     .primary-content,
     .secondary-content {
     width: 100%;
     padding: 20px;
     border: none;
     } 
}
example #3, adjust header height, remove bottom right border, font size decreased
.main-header {
     max-height: 380px;
     padding: 50px 25px 0;
   }
.title
     font-size: 1.3rem;
     border: none;
   }
}
example #4, header shorter, make line height smaller, hide arrow
h1 {
     font-size: 5rem;
     line-height: 1.1;
}
.arrow {
     display: none;
}
example #5, adjust into text size back to root, bc text too big for smaller screens, use rem unit
.intro {
     font-size: 1rem;
}
example #6, too much padding, code rule between media quaries
.wildlife {
     padding: 10% 12%;
     margin: 50px 0 20px;
}
example #7, adjust column layout (remove floats), reduce top and bottom padding
.resorts, 
    .tips {
     float: none;
     width: 100%;
}
.main-footer {
     padding: 20px 0;
}
example #8, adjust to smaller screens, ex iPhone6
html file, code under head:
<meta name=“viewpoint” content=“width=device-width">

THE CASCADE: IMPORTANCE
Assigns weight to a declaration; resolves conflict between 2 or more declarations & are applied by the browser via the cascade. In CSS, the cascade is what determines which styles are assigned to an HTML element.
Quick Reference
* Cascade - MDN

order of three parts: importance, specificity, source order

1.  Importance: user agent styles-user styles (ex special needs), author styles (preference, style css)
2. Specificity: what actually resolves conflict, it decides which styles are applied by the browser. More specific, it trumps.
3. Source Order: check based on order they appear

INHERITANCE
Inheritance in CSS means that an element’s style values are copied from its parent element. Inheritance allows us to keep styles consistent throughout a website without having to repeat them in our code. Remove color properties. Give main-header a color property.
Quick Reference
* Cascading and inheritance - MDN
* inherit value
* initial value

example #1, give color property
(code under background-size: cover;)
color: white;
example #2, display initial color, ignores inheritance value
(code under line-height)
color: initial;

LEARNING TIPS & TOOLS
In this video, we'll cover tips and tools to help you practice and retain what you’re learning.
Project Ideas
* Create new subpages for the Lake Tahoe website
* Build a single-page website for your favorite city
* Build a small website component, like a header, navigation, or form
* Redesign the website of your favorite local restaurant or band
* Design a website for a local non-profit organization
* Learn how to refactor the Lake Tahoe website with Sass in our new course CSS to Sass
More CSS Courses
* CSS Selectors (new)
* CSS Layout Techniques
* CSS - Beyond the Basics
* Web Typography
* Framework Basics
Tools
* Workspaces
* CodePen

#remove bullets
ul{
 list-style-type: none;
}
