Selecting elements and adding elements
in the app.js file, assign the #greeting event handler to the click event on the sayButton.
var sayButton = document.getElementById("say");
var greeting = function() {
  alert("Hello World!”); }
sayButton.onclick = greeting;

Traversing Elements with children and
Traversing Elements with querySelector
#get anchor (the a element) from inside the listItem. Use a method to traverse and select the anchor.
var anchor = listItem.querySelector(“a”);

Creating Elements
Orignial code: 
var newDiv;
var newSpan;
#On line 1 of app.js, create a new div element and assign it to newDiv.
var newDiv = document.createElement("div");
var newSpan;
##On line 2 of app.js, create a new span element and assign it to newSpan.
var newDiv = document.createElement("div");
var newSpan = document.createElement ("span");

Appending and Removing Elements
Append/ add elements
#remove the pleaseEnableParagraph from the body
body.removeChild(pleaseEnableParagraph);
##append the newParagraph to the body
body.appendChild(newParagraph);

Modifying Elements
#inner text HTML
removing a paragraph and adding a new one to the body. The newParagraph has no text in it. On line 7 of app.js, modify the newParagraph element's text to say "JavaScript is enabled"
newParagraph.innerText = "JavaScript is enabled";

Changing Classes
#use the classList property on the anchor to add a new class of "selected" to it.
anchor.classList.add(“selected”);
##in app.js, use classList to toggle the "live" class on the anchorelement.
anchor.classList.toggle("live");
###both of the handlers trigger on "change" rather than just the last function assigned to onchange
Remove original code:
navigationSelect.onchange = navigateToValue;
navigationSelect.onchange = sendAnalytics;
Code: 
navigationSelect.addEventListener('change',  navigateToValue);
navigationSelect.addEventListener('change',  sendAnalytics);

# Javascript class
Anytime we use a class in JS, to create a new instance of a class, or to create an obj that represents 
## use the new keyword
ex. Const mailer = new Mailer();
