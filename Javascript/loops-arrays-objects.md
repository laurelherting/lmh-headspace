LOOPS
Save time to run repetitive tasks 
Example #1, 
While ( ) { 
// this is the loop }
Example #2, loop that runs 10x
var counter = 1;
while ( counter <=10 ) {
     console.log(counter);
     counter +=1; }

LOOP CONDITIONS
Use dif test conditions to run & exit a loop, avoid unless loops, put on top of file
Example #1, #s up to 10000
var upper = 10000;
var randomNumber = get RandomNumber(upper);
Example #2, guess, & puter attempts before getting it right
var guess;
var attempt = 0;
Example #3, compare puter’s guess to random#
while ( guess !== randomNumber ) {
guess = getRandomNumber( upper );
attempts += 1; }
Example #4, doc write
document.write(“<p>The random number was: “ + randomNumber + “<p>”);
document.write(“<p>”It took the computer “ + attempts + “attempts to get it right.</p>”);

‘DO … WHILE’ LOOPS
Another JS loop, it prompts a user to insert info, for user response 
Example #1, will always execute the code block at least 1x
do { // code for loop goes here
// it runs AT least one time} ()
Example #2, 
var secret; // declare the secret var so you can use it inside the loop
do { // always do the following code block at least once
     secret = prompt(“what is the secret password?’)
 } while (secret !== “sesame”); // and THEN evaluate if secret is equal to ‘sesame’ - if not, run the block again until it is
document.write(“You know the secret password. Welcome.”); // once secret = sesame, write to the doc

FOR LOOPS
common w/ arrays, use single letter for var name(i)
Example #1, must be <=10 in order to run
for (var i = 1; i <=10; i += 1 ) {
document.write(i); }
Example #2, 
var html = ‘';
for (var i = 1; i <= 10; i += 1 ) {
  html += ‘<div>’ + ‘</div>’;
document.write(html);
Example #3, 
Create a for loop that logs the numbers 4 to 156 to the console. To log a value to the console use the console.log( ) method.
for (var num = 4; num <= 156; num++){
console.log(num);
}
EXITING LOOPS
exit loops using break statement, ‘!’= not evaluator 
Example #1, 
while (true) {
// this is an endless loop break;
// but break, lets you ‘break out’ of the loop }
Example #2, change ‘do’ to ‘while’, program keeps asking user to input a # that works
while ( true ) {
     guess = prompt();
     guessCount += 1;
     if (parseInt(guess) === randomNumber) {
     correctGuess = true;
     break; }
}
Example #3, change ‘true' to ‘guessCount’, now loop will either run 10x or ends bc of the break statement
while ( guessCount  < 10 ) {
     guess = prompt();
     guessCount += 1;
     if (parseInt(guess) === randomNumber) {
     correctGuess = true;
     break; }
}
Example #4, conditional statement, did player correctly guess #
   break;
} }
if ( correctGuess ) {
document.write(‘<h1>You guessed the number!</h1>;
document.write(‘It took you ‘ + guessCount + ‘ tries to guess the number ‘ + randomNumber);
} else {
     document.write(‘<h1>Sorry. You did not guess the number.</h1>; }

ARRAYS
track multiple items 
Example #1, array named data w/ 3 numbers in it
var data = [1,2,3];
Example #2, data array in place, another line of code that creates a second array named assorted. Assigned one string value, a number and a Boolean value (like trueor false) to array. The complete assorted array has 3 values total.
var data = [1,2,3]; var assorted = ['item', 2, true];

ACCESS ITEMS IN ARRAY
index values to access data at spec locations in array
Example #1, add index 3, which doesn’t exist (last item is “undefined” js way of saying it doesn’t exist
var shopping = [ ‘carrots’, ‘milk’, ‘eggs’];
console.log(shopping[0]);
console.log(shopping[1]);
console.log(shopping[2]);
console.log(shopping[3]);

ADDING DATA TO ARRAYS
3 common ways
Example #1, .length() add #s
var numbers = [1, 2, 3, 4, 5, 6, ];
numbers[ numbers.length ] = 7;
[1, 2, 3, 4, 5, 6, 7  ];
Example #2, .push() add 3s to end of array (songs)
In index.html:
<script src=“js/helpers.js”></script>
<script src=“js/playlist.js”></script>
in playlist.js: 
var playlist = [];
playlist.push(‘I did It My Way’);
playlist.push(‘Respect’, ‘Imagine');
printList( PlayList );
Example #3, .unshift() add item to top
playList.unshift( ‘Born to Run’);

REMOVE ITEMS FROM ARRAY
Array = [ ],
Example #1, remove item from end of array
nums.pop()
6
nums
[1, 2, 3, 4, 5]
nums.unshift(0);
6
nums
[0, 1, 2, 3, 4, 5]
Example #2, use .shift() method to get rid of 1st item
nums.shift()
0
nums
[1, 2, 3, 4, 5]
nums.shift()
2

USING FOR LOOPS W/ ARRAYS
access items in array by using for loops
Example #1, 
var students = [‘Sasha’, ‘Lynn’, ‘Jennifer’, ‘Paul’];
for (var i = 0; i < 4; i +=1) 
Example #2, replace ‘4’ w/ ‘students.length’, lock name to js console
for (var i = 0; i < students.length; i +=1) 
     console.log()
Example #3, access proper student
Example #4, print, create ordered list in html & match, add loop, increase value by 1 in each, close tag, use print function, call function,
function print.List( list ) {
     var listHTML = ‘<ol>’;
     for( var i = 0; i < list.length; i += 1 ) {
     listHTML += ‘<li>’ + list[i] + ‘</li>’;
}
listHTML += ‘</ol>’;
print(listHTML);
}
printList(playList);
Example #5, for loop to  show values in temps array from the first item -- 100 -- to the last -- 10. Inside the loop,  current array value  to the console shown.
for (var i = 0; i < temperatures.length; i++) {
  console.log(temperatures[i]);
}

USEFUL ARRAY METHODS
methods used to modify, search and combine arrays.
Example #1, open prompt box for info, use break to see if user typed ‘quit’, if user typed something else, print, if user doesn’t type if or list, then this final code will run.
while (true) {
     search = prompt(“Search for product. Type ‘list’ to show products and ‘quit’ to exit”);
     if ( search === ‘quit’) {
     break;
} else if (search === ‘list’ ) {
 print( inStock.join(‘, ‘) ); 
}else {
 if ( ) {
     print( ‘Yes, we have ‘ + search + ‘ in the store.’);
} else {
     print(‘ search + ‘ is not in stock. ‘);  } }

2-D ARRAYS
List containing other lists: spreadsheet-like data structure by storing arrays in arrays. Need 2 sets of brackets. 
Example #1, 2 items in array playlist, 
var playlist playlist = [
     [‘I Did It My Way’,  ‘Frank Sinatra’],
     [‘Respect’, ‘Aretha Franklin’],
     [‘imagine’, ‘John Lennon’],
];
function printSongs( list ){
     listHTML += ‘li>’ + songs[ i ] [ 0 ] + ‘</li>’; }
printSongs(PlayList);
Example #2, challenge 
TASK 1 var coordinates=[[2,1]];
Add three more arrays to the coordinates array. The coordinates array should have 4 arrays in it -- each of those arrays should have 2 items in it.
var coordinates = [[1,2],[1,2],[1,2],[1,2];

OBJECT LITERAL
for creating a variable that stores data as property/value pairs.
Example #1, create a JS object; put name in array
var person = {
     name : ‘Sarah'
     country: ‘US’,
     age: 35,
     treehouseStudent : true,
     skills: [‘JavaScript’ , HTML’, ‘CSS’]
};

ACESSING OBJECT PROPERTIES
Object = { }
store multiple objects in a variable 
Example #1, 
var person = {
     name: ‘Tony’,
     age: 24
};
alert(person[‘name’]) ;
Example #2, easier version, add dot after name, create new properties same way.
};
person.name = ‘Tony’;
person.country = ‘Brazil’;
Example #3, combine string w/ a property from object
var message = ‘<p>Hello. My name is ‘’ + person.name + ‘</p>;
print(message);

USING ‘FOR IN’ TO LOOP THROUGH OBJECT’S PROPERTIES
access each property name and property value by looping through an object's keys.
Example #1, for in loop to log each of the property names of the shanghai object to the console.
for (var prop in shanghai) {
  console.log(prop);
}
Example #2, include the property values. log out 4 lines that include both the property name and value. For example: "population: 14.35e6"
for (var prop in shanghai) {
    console.log(prop,':', shanghai[prop]); }

MIXING & MATCHING ARRAYS & OBJECTS
combine these two data-structures to create even more powerful ways to store and retrieve information.
Example #1, add {, property name, & a colon. Repeat-convert from array to object.
Create an array literal named objects
var objects = [];
Example #2, 
Inside the array literal, add three object literals. In other words, the objects array should have three values. Each object should have 2 property/value pairs.
var objects = [
  {
    name: 'John',
    age: 17   
  }, // Here
  {
    name: 'Rich',
    age: 21
  }, // Here
  {
    name: 'James',
    age: 33
  } // Not here since it's the last one.
];

JS OBJECT NOTATION
JavaScript objects are used to transfer information between browsers, servers, databases and other online services.
Example #1, defines an employees object, with an array of 3 employee records:
{"employees":[
    {"firstName":"John", "lastName":"Doe"},
    {"firstName":"Anna", "lastName":"Smith"},
    {"firstName":"Peter", "lastName":"Jones"}
