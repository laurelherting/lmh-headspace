Asynchronous JavaScript and XML
A more user friendly way to jump to new webpage. Browsers/Clients send Requests to servers and web servers send Responses back. 
#variable named request and assign it a new XMLHttpRequestobject.
var request = new XMLHttpRequest();
##Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.
request.open("GET", "footer.html");
###Add the code to send the AJAX request.
request.send();

How it Works
1. Create an XMLHTTP Request Object
2. Create a callback function
3. Open a request
4. Send the request

Callbacks 
#add an onreadystatechange event handler. Add an anonymous function, but don't put any code inside it.
xhr.onreadystatechange = function (){ xhr.open('GET', 'sidebar.html'); }                          
##Add a conditional statement inside the onreadystatechange event handler that tests to make sure the server has sent back its complete response.
if (xhr.readyState === 4 && xhr.status === 200) { };
##test to make sure the return status from the server is OK, put inside if statement:
document.getElementById('sidebar').innerHTML = xhr.responseText;
###Now that the server has responded with the data, you need to add it to the page. First select the div with the ID of 'sidebar'. You can select page elements with IDs like this: document.getElementById('idName');
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      document.getElementById('sidebar');
    }
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
####use a DOM element's innerHTML property to set the HTML inside the sidebardiv to the server's response. (In app.js, you may want to change xhr.sidebar to xhr.responseText)
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4){
  xhr.status = 200
  document.getElementById('sidebar').innerHTML = xhr.responseText; // changed from xhr.sidebar to xhr.responseText
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
JSON
Front End only - JS
#create empty array [   ]    
##in empty add JS object, to hold song
[{}]
###Add a "title" property to this object. Set the property's value to any song name.
[ { "title": "Believe" } ]
####Add an "artist" property to this object. Use a musician or musical group name for the property's value.
[ { "title": “Believe”, “artist”: “sting" } ]
##### Add 3 more song objects to this JSON file, each with "title" and "artist" attributes.
[ { "title" : "My Way", "artist" : "Frank Sinatra"},
{"title" : "Boom",
"artist" : "Bum"},
{"title" : "Club",
"artist" : "Bub"},
{"title" : "Snub",
"artist" : "Tub”} ]

Parsing JSON Data
Even though it looks like JS, it isn’t, it’s just plain text. JSON is transmitted over the web as plain text. To make it useful for a JavaScript program, you need to parse it, or convert it from a string to JavaScript.

