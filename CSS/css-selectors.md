#ATTRIBUTE SELECTORS
Target element w/ class selector
Ex #1, 
[class] {border: solid 1px #ccc;}
Ex #2, target input element w/ type value of submit
input[type=“submit”] {background-color: green;}
Ex #3, target element w/ value of _blank:
a[target=“_blank”] {color: tomato;}

#STYLING FORM BUTTONS & LINKS W/ ATTRIBUTE SELECTORS
ways to select form buttons & links
Example #1, target input element w/ type value of email
input[type=“email”] { background: yellow; }
Example #1/3, attribute selector targets img elements w/  title attribute value "avatar". elements - border radius of 50%.
img[title="avatar"] {
    border-radius: 50%; }
Example 2/3, Next, create a new attribute selector that targets input elements with a typeattribute value of password. Then, set the color to #ccc.
input[type='password'] {
  color:#ccc;   }
Example #3/3, Finally, write a new attribute selector that targets input elements with a typeattribute value of submit. Then, set the background color to #52bab3.
input[type="submit"] {
  background-color: #52bab3;  }

#DRY CSS
DRY (don’t repeat yourself), works best w/ classes
Ex #1, CSS
.btn { cursor: pointer; font-size: .875em; color: #fff; padding-left: 20px;
padding-right: 20px; text-transform: uppercase;}
.default-theme { background-color: coral;}
 HTML 
<input class=“bin default-theme” type=“submit” value=“submit”>
Ex #2,
.br { border-radius: 5em; }
.avatar { display: block; margin: 0 auto 2em; }
Example #3, rounded avatar 
.rounded { border-radius: 50%; }

CHILD, ADJACENT, & GENERAL SIBLINGS COMBINATORS
>, +, ~ to target more specifically 
Example #1, > child
form > a { font-size: .7em; }
Example #2, + sibling element
.btn + .btn { margin-left: 20px; }
Example #3,  ~ target all sibling label elements 
h1 ~ label { background: tomato; color: white; padding: 5px; }
Ex #4, 1/2 challenge: Create a child selector that targets li elements that are direct children of .main-nav. Set the display to inline-block and the left margin to 20px.
.main-nav > li {
  display: inline-block;
  margin-left: 20px; }
Ex #4 2/2 decrease the space between h2 elements and the paragraph that immediately follows. Create a new selector that targets pelements that are adjacent siblings of an h2. Then, set the top margin to .5em.
.main-nav > li {
  display:inline-block;
  margin-left: 20px; }

:FIRST CHILD & LAST CHILD
target 1st & last child elements w/ pseudo classes
Example #1, 
li:first-child { background: #52bab3; color: white; }
Example #2, target 1st child div element inside parent
div:first-child { margin-left: 0; }
Example #3, target li element in list
li:last-child { float: right; }

:ONLY CHILD & :EMPTY
target an element only if it’s an only child of an element
Ex #1, target a span that is the only child element in a parent div, no siblings
div span:only-child { font-size: .5em; }
Ex #2, target all elements that have no child content
:empty { background: red; }

SUBSTRING MATCHING ATTRIBUTE SELECTORS
Substrings. “Begins with” & “Ends with”  target specific pieces of an attribute's value, like certain letters and words.
* $ matches a piece at the end of an attribute's value.
* * matches any part of an attribute's value
Example #1, 
a[href^=“http://“] { color: #52ab3; text-decoration: none; }
Example #2, match substring at end, doc
a[href$=“.pdf”] { background-image: url(‘../img/icn-pdf.svg’)}
Example #3, match substring at end, picture
a[href$=“.jpg”] { background-image: url(‘../img/icn-picture.svg’)}
Example #4, same, as above, but for .zip file
a[href$=“.zip”] { background-image: url(‘../img/icn-zip.svg’)}

#begins with
## a[href^=“http://“] {}
#ends with 
##a[href$=“.pdf”] {}
#contains
targets an element containing the piece of code we define anywhere in an attribute's value.
##a[href*=“downloads”] {
     background-repeat: no-repeat;
     background-size: 18px 18px;
     padding-left: 25px; }
img[src*=“thumb”] {
     margin: 4px;
     border: solid 2px;
     width: 180px;
     height: 140px; }
Challenge: 
1/3 Create a selector that targets an img element if its title value begins with "product-". Set the border color to lightblue.
img[title^="product-"] {
  border-color: light blue; }
2/3 new selector that targets an a element if its href value ends with ".html". Set its text-decoration to none. 
a[href$=".html"] {
  text-decoration: none; }
3/3 Finally, create a new selector that targets an img element if its src value contains the word "preview". Then, set its width to 100%.
img[src*="preview"] {
  width: 1005; }

Element states Pseudo-Classes 
 target elements based on user interaction states.
#input:focus,
texture:focus { border-color: #52bab3; }
input:disabled { background: #ddd; }
input[type=“checkbox”]:checked + label {
     font-weight: bold; }

:nth child
targets child elements based on any position inside a parent.
#li:nth-child(2n+3) { background: #52bab3; color: white; }
##targets each item that proceeds it
li:nth-child(-n+3)

:nth-of-type
targets an element based on its position within a parent, but only if it’s a specific type of element.
#div:nth-of-type(4) {}
##selects last element, targets last child el
div:nth-last-of-type(1) {}

:root & :target 
:root selects the highest-level parent element in a document, and :target selects an element when it's the target of a link.
#:root { background: #e3effb; }
:target { background: #384047; color: white;}
#    #col-c:target{ background: #eff1f2; color: initial; box-shadow: 0 0 6px rgba(0,0,0, .2); }

:not()-The Negation Pseudo-Class
 it selects everything except the element we specify in the selector. targets all input elements that do not have a type value of button:
#input:not([type=“button”]) { border-color: blue; }
           
Pseudo-Elements-::first-line and ::first-letter
target the first line of text and the first character in a line of text.
#intro:first-line {}
intro:first-letter {}

Pseudo-Elements- ::before and ::after
let us insert virtual elements before and after an element’s content. These virtual elements are visible to the user and are style-able with CSS, but they do not appear in the source code. Do same for .zip.
#.jpg::before { content: url(../img/icn-picture.svg); margin-right: 8px ; }
##h1::before,
h1::after { content: “”; display: inline-block; width: 24px; height 24px; border-radius: 50%; background: chloral; margin: 0 10px; }

The attire() CSS Function
inserts an element's attribute value as page content. 
.d-loads a::after { content: attire(title); display: inline-block; color: initial; font-size: .65em; margin-left: 5px; }

Interactive Pseudo-Classes Selectors :link :visited :hover :active
order specific: they will overwrite each other

#set this first
`a { text-decoration: none; }`

#change every <a href> link  to color blue
`a:link { color: blue; }`

#change color applies to every visited link
`a:visited { color: purple; }`

#hover over link and see it underlined
`a:hover { text-decoration: underline; }`

#click on interactive element to show border
`a:active { border: 1px solid; }`
