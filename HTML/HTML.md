###ANCHOR Element
<a href=""></a>
href is hypertext reference

###BODY Element
<body></body>
contains main visual part of a web page
visible to user

###DIV Identifier
example, <div id=“wrapper">

###DocType Element
Always on first line
No closing tag

###FOOTER Element
<footer></footer>
example <a href=“http://twitter.com/nickrp”><img src=“img/twitter-wrap.png” alt=“Twitter Logo“></a>

###HEAD Element
contains elements and data about the site
not visible to user

###HTML Element
<html></html>
serves as root of doc structure

###IMAGE Elements
<img src=“img/numbers-01.jpg alt=“”>
image gallery content, example <img src=“omg/numbers-01.jpg” alt=“">

###Add Image Gallery Content 
example 
  <li>
    <a href=“img/numbers-01.jpg”>
      <img src=“img/numbers-01.jpg” alt=“"
        <p>Experimentation with color and texture.</p>
          </a>
            </li>

###Inline Styles
<h1 style={color: blue;}>Hello</h1>

###LINK types
**relative= describes location (preferred, bc it’s easily portable between domains)
example <link rel=“stylesheet” href=“css/normalize.css”>
absolute=direct path

###LIST Elements
<li></li>
single element, example <li>Home</li><li>About</li>

###LIST Type Elements
<ul></ul>
un-ordered lists example </a>
    <nav>  
      <ul>                
        <li>Portfolio</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav> 
        
###un-ordered lists, w/ links example  </a>        
  <header>
    <nav>  
      <ul>                
        <li><a href=“index.html”>Portfolio</a></li>
        <li><a href=“about.html”>About</a></li>
        <li><a href=“contact.html”>Contact</a></li>
      </ul>
    </nav>
  </header>

<ol></ol>
ordered lists

###NAV Element
<nav></nav>
used to include navigation elements like menus

### PARAGRAPH Element
<p></p>
example, contact.html
<h3>General Information< /h3>
<p>put about paragraph here</p>

### PHOTOGRAPH size
sizing 1024x768
SECTION Element
similar to a DIV, HTML 5 element that denotes related items joined together

### STYLING w/ css
example, <a href=“index.html” id=“logo”>

###TITLE Element
<title></title>
goes in HEAD section
Displays title in browser tab

###Typical Outline
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>

</body>
</html>

###WORD WRAP
keep on

###CONTACT/HTML
example #1, phone, email, & twitter
<h3>Contact Details</h3>
<ul> class=“contact-info”>
     <li class="phone”><a href=“tel: 555-8989”>555-8989</a></li>
     <li class=“mail”><a href=“mailto:nick@example.com”>.nick@example.com</a></li>
     <li class=“twitter”><a href=“http://twitter.com/intent/tweet? screen_name=nickrp”>@nickrp</a></li>
</ul>

### Link Tag
Navigate to a different route rendered by React Router

### A Tag
Navigate to a completely different HTML doc

### Class
We’ve got a mongoose model class
Const Survey = mongoose.model(‘surveys’);
So, we can create an instance of a survey
To save to a database, we have to call it
Use lowercase to show instance:
Const survey = ….
