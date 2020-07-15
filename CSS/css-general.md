### CSS GENERAL RULES

#### rules, last one trumps

comma, short hand
class selector-selects html matching element
float= side by side

#### CHANGE TEXT ALIGNMENT

example, h1 { text-align: "left"; }

#### CHANGE TEXT COLOR

example, footer
{
color: green;
}
footer {
color: orange;
}

#### CHANGE BACKGROUND COLOR

example, <link rel=“stylesheet” href=“css/normalize.css”>
<link rel=“stylesheet” href=“css/main.css”>

#### USE ID SELECTORS, create div

example #1, adding styling adjustments, values: no underline/highlights (put in body html), centered inside div, width
a {
text-decoration: none;
}

# wrapper {

     max-width: 940px;
     margin: 0 auto;
     padding: 0 5%;
     background: orange;

}

# logo {

     text-align: center;
     margin: 0;

}

example #2, color background orange
body {
background-color: orange;
}

#### USE COLOR

example #1, hexadecimal:A-F=#s10-15
a {
color: #6ab47b;
}
example #2, w/ headline fixed to see links, navigation set, set color to white
header{
background: #6ab47b;
border-color: #599a68;
}

h1, h2 {
color: #fff;
}
nav {
background: #599a68;
}
nav a {
color: #fff;
}
example #3, add pseudo class to anchor element-visited, remains white even if visited
nav a, nav a: visited {
color: #fff;
}

#### USE CLASSES

example #1, apply pseudo and hover class
}
nav a.selected, nav a:hover {
color: #32673f;
}
example #2, apply background color in body
body {
background-color: #fff;
color: #999;
}

#### ORGANIZE CSS w/ COMMENTS

example #1, change color in parts of code
}
/_ site body _/
body {
}
/_ green header _/
header {
}
/_ nav background on mobile _/

/_ green header _/
nav a, nav a:visited {

/_ nav link _/

/_ selected nav link _/
nav a.selected, nav a:hover {

example #2, multi-line comments
/**********\***********
GENERAL
**********\*\***********/

add this to header:
leave 3 spaces before start of multi-line comments

/****\*****
HEADING
****\*****/

/**\*\*\*\***
COLORS
****\*****/

#### PICK FONTS & SET RELATIVE UNITS

Choose from google fonts
Choose multiple fonts, copy code, go to index.html , place under normalize.css,
but above custom css-Main.css, unbolds headline,
example #1,
h1 {
font-family: ‘Changa One’, sans-serif;
margin: 15px 0;
font-size: 1.75em;
font-weight: normal;
line-height: 0.8em;
}

#### RESIZE TEXT

example, #1
h2 {
font-size: 0.75em;
margin: -5px 0 0;
font-weight: normal;
}
example, #2, back up font, if 1st isn’t available
body {
font-family: ‘Open Sans”, sans-serif;
}
example, #3,
/**_
NAVIGATION
_**/
nav {
text align: center;
padding: 10px 0;
margin: 20px 0 0;
}
example, #4, padding property
/**_
FOOTER
_**/
footer {
font-size: 0.75em;
text-align: center;
padding-top: 50px;
color: #ccc;
}

#### STYLE the PORTFOLIO

example, fill parent element
img {
max-width: 100%;
}

example, #2 page specific, paste below footer
/\***\*
PAGE: PORTFOLIO
\*\***/
example, #3 Use Gallery ID selector; remove margin, padding & bullet pts.

# gallery {

     margin: 0;
     padding: 0;
     list-style: none;

}

example, #4, float, set width

# gallery li {

     float: left;
     width: 45%;
     margin: 2.5%;
     background-color: #f5f5f5;
     color: #bdc3c7

}

#### STYLE IMAGE CAPTIONS

example #1, set margin, change text, then background color
#gallery li a p {
margin: 0;
padding: 5%;
font-size: 0.75em;
color: #bdc3c7
}
example #2, under footer, between align and padding
allows footer to be clear of any floated elements
clear: both

#### BUILD NAVIGATION w/ UNORDERED LISTS

example #1, heading load to the left
header {
float: left;
margin: 0 0 30px 0;
padding: 5px 0 0 0;
width: 100%;
}
example #1, inline remove top & bottom margins
nav ul {
list-style: none;
margin: 0 10px;
padding 0;
}
example #2, block or inline law
nav li {
display: inline-block;
}
example, #3, remove bullet points & padding to ul
nav ul {
margin: 0 10px;
padding: 0;
list-style: none;
}

#### POLISH the NAV AND FOOTER

example #1, link spacing
nav a {
font-weight: 800;
padding: 15px 10px;
}
example #2, inside footer
.social-icon {
width: 20px;
height: 20px;
margin: 0 5px;
}

#### ADD a NEW PAGE( In about html

example #1, add img, then add 3rd level headline “about”, then add paragraph (p) text

<div id=“wrapper”>
     <section>
          <img src=“img/nick.jpg” alt=“photograph of Nick Pettit” class=“profile-photo”>
          <h3>About</h3>
          <p>Hi, I’m Nick Pettit! This is my design portfolio where I share all of my favorite work. When I’m not designing things, I enjoy exercising, playing video games, drinking good coffee, and more. </p>
          <p>If you’d like to follow me on Twitter, my username is @nickrp</p>
     <section>
example #2, hyperlink name to Twitter page:copy link & put in “"
my username is <a href=“”>@nickrp</a>

#### STYLE NEW PAGE

example #1, customize photo, border radius allows you to add rounded corners to an element (circle)
/**_
PAGE ABOUT
_**/
.profile-photo {
display: block;
max-width: 150px;
margin: 0 auto 30px;
border-radius: 100%;
}
example #2, less rounded corners
border-radius: 20px;
}
example #3, code before heading, zero margins
h3 {
margin: 0 0 1em 0;
}

#### ADD ICONOGRAPHY

example #1, background image, size, repeat
/**_
PAGE: CONTACT
_**/
.contact-info {
list-style: none;
padding: 0;
margin: 0;
font-size: 0.9em;
}
example #2, add background images to list items
.contact-info li.phone a {
background-image: url(‘../img/phone.png');
}
.contact-info li.mail a {
background-image: url(‘../img/mail.png');
}
.contact-info li.twitter a {
background-image: url(‘../img/twitter.png');
}
example #3, Add spacing
code before .contact-info li
.contact-info a {
display: block;
min-height: 20px;
background-repeat: no-repeat;
background-size: 20px 20px;
padding: 0 0 0 30px;
margin: 0 0 10px;
}

#### RESPONSIVE WEB DESIGN

example, #1 media queries w/ dif screen resolutions; create a fluid design

#### ADDING BREAKPOINTS for DEVICES-media queries

example #1, adjust layout based on width of pg. tablet and reg size monitor screen
@media screen and (min-width: 480px) {
body {
background: navy;
}
}
@media screen and (min-width: 660px) {
body{
background: dark green;
}
}

#### BUILD A THREE COLUMN LAYOUT

example #1, float elements side by side, take out 1/2 column
#primary {
width: 50%;
float: left;
}
#secondary {
width: 40%
float: right;
}
example #2, do math to figure out exact 3 column size
/**_
3 _ 5 = 15
100% - 15% = 85%
85 / 3 = 28.33333333333 \***/
/**_PAGE PORTFOLIO
_**/
#gallery li {
width: 28.3333%;
}
example #3, when browser has less space, line wraps, pushing images out of the way, clear only 4th items to correct.
#gallery li:nth-child(4n) {
clear: left;
}

#### ADJUST the PROFILE PAGE & HEADER

example #1, 2 column layout
.profile-photo {
float: left;
margin: 0 5% 80px 0;
}
example, #2 media query
nav {
background: none;
float: right;
font-size: 1.125em;
margin-right: 5%
text-align: right;
width: 45%;
}
example #3, float header to left
#logo {
float: left;
margin-left: 5%;
text-align: left;
width: 45%
}
h1 {
font-size: 2.5em;
}
h2 {
font-size: 0.825em;
margin-bottom: 20px;
}
header {
border-bottom: 5px solid #599a68;
margin-bottom: 60px;
}

#### WEBSITE TESTING

example #1, test a website-html
go to: validator.w3.org
Then, paste in html code into “validate by direct input"

example #2, test css code in website
go to: jigsaw.w3.org/css-validator
Then, paste in CSS code into “validate by direct input”

<div> class starts with a .
Id gets a # in front
Anything w/ document has the Dom, whole document

#### Prevent box collapse when clicked

When radio button clicked, do this to prevent box from collapsing after it's clicked
Uses flex box

- add box height
- add box width
- add both & lines of code, see below code:

/\*_ Box _/
.form-control-radio-indicator { display: inline-block;
margin-right: 0.5em;
background: #FFF;
border: 1px solid \$chambray;
box-sizing: border-box;
border-radius: 2px;
padding: 1px 4px;

width: 24px;
height: 25px;
text-align: center;
vertical-align: middle;

& > svg { vertical-align: middle; }

& + span { vertical-align: middle; }
}
 play around with vertical-align if flex box is causing problems
