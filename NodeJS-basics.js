4Ps
1. Preparation - problems solve
2. Plan - plan out solution
3. Perform - perform work needed for solution

Handling Errors in Node
ex.1/3 Create variable request that stores result of get method -
var http = require("http");
var request = http.get("http://teamtreehouse.com/chalkers.json", function(response){
console.log(response.statusCode); });
ex 2/3 use on method to listen for error event. Pass in callback function with one parameter of error -
var http = require("http");
// this is where you create/assign the 'request' variable the result of your get request
var request = http.get("http://teamtreehouse.com/chalkers.json", function(response){
console.log(response.statusCode); });
request.on('error', function(error){});
ex 3/3, in error callback, use error method on console to print out error message - request.on('error', function(error){ console.error(error.message); });

Get the Response Body- A Stream
Ex 1/2 Without renaming any of the variables, modify the data callback to concatenate the stream of data to theresponseBody -
var http = require("http");
var request = http.get("http://teamtreehouse.com/chalkers.json", function(response){
    var responseBody = "";
    response.on("data", function(dataChunk) {
      //This code line should work:   responseBody += dataChunk;
      //but I also passed with the line below:
      responseBody = responseBody + dataChunk;
    });

    response.on("", function(){
        console.log(responseBody);
    });

});
request.on("error", function(error){
    console.error(error.message);
});
Ex 2/2 See the console.log(responseBody); in that callback around line 10? Fix the listener so that the callback gets executed when the response has fully finished - change: response.on(“”, function(){
to: response.on("end", function(){

Parsing JSON
* JSON Documentation on MDN
Ex Create a new variable jsonObject, then use the native JSON object to parse jsonString and assign it to jsonObject -
var jsonObject = JSON.parse(jsonString);
Parsing and StatusCode Errors
Ex 1/2 Something bad is going to happen. Use a try block in the appropriate place to catch an error. Include a catchblock with error as the parameter.
try {
 var jsonString = 'This is not a JSON String';
var jsonObject = JSON.parse(jsonString);
} catch (error) {}
Ex 2/2, In catch block, call console.error to print out error's message property.
 {console.error(error.message); };

# Update Node
`nvm install node`

# then,  do a new global install of eslint. Bc each version of node with nvm has its own npm packages global folder
`npm install -g eslint`

# **Node comes installed with npm**

# Node
JS Runtime used to execute code outside of the browser

# Express
Library that runs in the Node runtime. Has helpers to make dealing w/ HTTP traffic easier

# Request wants to
Get = get info
Post = send info
App put = update all the properties of something
Patch = update one or two properties of something

# HTTP is stateless

# Update Node
If doesn’t automatically begin using updated version do:
`nvm use (version)`
