JSq, fly through. JavaScript is a powerful programming language that adds dynamic interactivity to millions of sites on the web. Before we start programming lets see what JavaScript can do. Visual flair, calculations, nodejs, 
JavaScript Examples
* LightBox
* Parallax
* Full Screen Form demo
* Phillippa Gregory
* Super Jetroid
* Node.js
* Adobe Photoshop Scripting
* Breach web browser
* Brackets text editor

INTRODUCING VARIABLES
Variables let you store, track and use information in a program. Learn how to create and use variables in JS.
var myName = "";
now, w/ my name: 
var myName = “Elle";

NAMING VARIABLES
naming rules, 
can only contain, letters, #s, $ and underscores
Camel case: laurelMeeHertingg
price$, use underscore: 2016_January 
**Use descriptive names, it’ll make coding easier. 
ex. var score = 0;
example #2, NOT a valid variable name? soccer player

STRINGS & NUMBERS
two basic types of data: what they are, how they work, and when to use them
backslash hides quote so no syntax error occurs.
Strings have quotes
A # inside quotes really isn’t a #
example #1, 
‘she\’s a great singer!’;
example #2, Create a player variable with the string 'Jasmine' in it.
var player=“Jasmine";
example #2, Use the document.write() function to print the contents of the player variable to the page.
document.write(player);


SPACE, TABS & NEW LINES 
when to use and when to avoid spaces, tabs and new line characters in JavaScript.
example #1, In many cases, JavaScript ignores space such as tabs, new lines and the space character. But not always. Which example below will cause a JavaScript error?
var days in week = 7

CAPTURING VISITOR INPUT
capture data from your visitors and store it in a variable.
The prompt() command
prompt() captures visitor input from a dialog box. You can store that input in a variable like this:

var answer = prompt('What color is the moon?');

The JavaScript Console
Chrome Console Keyboard Shortcuts
* Windows: Ctrl + Shift + J
* Mac: Cmd + Option + J
Firefox Console Keyboard Shortcuts
* Windows: Ctrl + Shift + K
* Mac: Cmd + Option + K
Internet Explorer Console Keyboard Shortcuts
* F12 key
Safari Console Keyboard Shortcuts
* Cmd + Option + C

COMBIINING STRINGS
Concatenation
Learn how to combine the values in a variable with strings to create messages.
Example #1, combining strings is called "concatenation". In JS, you combine strings with a + like this (MAKES STRING LONGER):

'one string ' + ' another string'

Example #2, If you have a variable that contains a string you can combine it with a literal string value to come up with a new string:
var name = “Dave”;
var message = “Hello” + name;
var name
WORKING W/ STRINGS TO GET HELP
Learn useful string methods and how to use the Mozilla Developer Network (MDN) to explore the JavaScript language.
String Properties and Methods
Example #1, .length returns the number of characters inside a string
var str = ‘9 letters’;
alert( str.length );
//opens an alert dialog w/ the number 9

Example #2,.toUpperCase() returns a copy of a string with all uppercase letters
var str = ‘upper’;
alert(  str.toUpperCase() );
//opens an alert dialog w/ the string “UPPER'

Example #3,.toLowerCase() returns a copy of a string with all lowercase letters
var str = “LOWER’;
alert( str.toLowerCase() );
//opens an alert dialog w/ the string “lower'

Example #4, Assign an all uppercase version of the id variable to the userName variable.
var userName = id.toUpperCase()+ "#" + lastName.toUpperCase();
Example #5, Complete the assignment to the userName variable by adding a # symbol followed by an all uppercase version of the lastName variable. In other words, using string concatenation so that the final value of userName is "23188XTR#SMITH”.
var id = "23188xtr"; var lastName = "Smith";
var userName = id.toUpperCase() + '#' + lastName.toUpperCase();

Resources
* The Mozilla Developer Network
* MDN: JavaScript Reference
* MDN: JavaScript strings
* MDN: .toUpperCase()
* MDN: .toLowerCase()
* MDN: .length

WORKING W/ NUMBERS
Understand the types of numbers JavaScript can work with; how to store numbers in variables; and why numbers in web forms aren't really numbers.
Assign a # to a variable using =

DOING MATH
Learn basic mathematical procedures using JavaScript: add, subtract, multiple and divide numbers.
shorthands
+=10
example #1, doing math in js
var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write(‘There are ‘ + secondsPerDay + ‘ seconds in  a day’);
var yearsAlive = 

NUMBERS & STRINGS
convert strings to numbers
Example #1, parseInt()
var str = ’49 steps’;
var num = parseInt(str);
// num now hold the number 49
Example #2, parseFloat()
var str = ‘102.99%’;
var num = parseFloat)str);
// num now holds the number 102.99
Documentation
* parseInt() at the Mozilla Developer Network
* parseFloat() at the Mozilla Developer Network


MAD LIBS ACTIVITY
sandwiching questions, can insert #s intro stings using +
Example #1, sandwiching q’s
var questions  = 3;
‘[3 questions left]'
var questionsLeft = ‘ [‘ + questions + ‘ questions left]’;
Example #2, after each prompt, decrease remaining answers by 1, countdown, and add to string
var adj….
questions -= 1;
questionsLeft = ‘ [‘ + questions + ‘ questions left]’;
var verb = prompt(‘Please type a verb’ + questionsLeft );
etc (do before each of the 3 prompts)

Dry programming=don’t repeat same code (functions, loops)

**THE MATH OBJECT**
special "object" called the "Math Object" which lets you perform advanced mathematical operations like creating random numbers and performing trigonometric functions.
ex. used to calculate square root
The Math Object
* Mozilla Developer Network page on the Math object
* Math.round() on the MDN 
This was tricky. 
Example #1,js Math methods. Open an alert dialog and display the temperature variable rounded to the nearest integer.
alert(Math.round(temperature));
Example #2, Open an alert dialog a second time and display the temperature variable rounded downward to the nearest integer. You'll need to check the Mozilla Developer Network to find the proper Math method for this (hint: down is toward the "floor".)
alert(Math.floor(temperature));

CREATE A RANDOM NUMBER
use random numbers to add variety and surprise to your programs
Math.random() at the Mozilla Developer Network
Example #1, create it
var dieRoll = Math.floor( Math.random() * 6 ) + 1;
alert(‘You rolled a ‘ + dieRoll);
review:
* prompt() dialogue to collect user input
* parseInt() function to convert the input to an integer
* Math.random() method to create a random number
REMEMBER:
 The parseFloat() method returns a number, not a string.

INTRODUCING CONDITIONAL STATEMENTS
make your JavaScript programs react intelligently, changing how they behave based on input provided by users or conditions within the program itself. Start w/ “if”, don’t end w/ ;
Example 1, test === code evaluator
var answer = prompt(‘What programming language is the name of a gem?’);
if ( answer === ‘Ruby’ ) {
     document.write(“<p>That’s right!</p>");
}
Example #2, else clause, condition is not true, no ;
} else {
     document.write(‘<p>Sorry, that’s wrong. </p>’);
}
Door analogy, door #1 and 2 

COMPARISION OPERATORS
compare 2 values, <, >, CASE SENSITIVE
Example #1, (‘apple’<‘bear”) True
Example #2, double =signs, browser converts string to a #
(“3” ==3 )
Example #3, triple = sign, used more often than double to prevent weird situations
(‘ ‘==0) True ?? Not really true though, empty string is equal to zero? Not so
(‘ ‘===0) result is false, what you’d expect
Example #3, false bc 2#s aren’t equal
( 165 ===165.9)
Example #4, TRUE bc those strings are the same
(‘JavaScript’===‘JavaScript’) 
Example $5, not equal to
!=
! is a not operator
Example #6, strict not equals to (best, better than ex 4). TRUE, bc different
(‘Ruby’!==‘ruby’)
TRICKY Challenge:
"Add a conditional statement that tests if the value in the variable a is greater than the value in variable b. If it is, pop up an alert with the message 'a is greater than b'; also add an else clause that pops up the message 'a is not greater than b'."
if ( a > b ) {
  alert('a is greater than b') ;
}
else {
    alert('a is NOT greater than b');
  }

BUILD A RANDOM # GUESSING GAME
program that reacts to user input.

BOOLEAN VALUES
represents a 3rd kind of value in js, true or false test
Example #1, 2 conditional statements
}
if (correctGuess===true) {
     document.write(‘<p>You guessed the number!</p>’);
} else {
     document.write(‘<p>Sorry. The number was ‘ + randomNumber + ‘.</p>’);
}
More info, visit https://teamtreehouse.com/library/javascript-basics/making-decisions-with-conditional-statements/boolean-values
Tricky challenge:
Place a Boolean value between the parenthesis for the condition in this conditional statement. Use the boolean value that will result in the message "This is true" appearing in an alert box.
if (true) { alert('This is true'); } else { alert('This is false'); }

PROGRAMMING MULTIPLE OUTCOMES
 more variety to your programs by using else if statements to provide multiple program paths with multiple conditions. Conditions/ doors.
Example #1, 
if () {
} else if () {
} else if () {
} else if () {
} else {
}
Bad yucky Challenge, but I got it correct
Add a conditional statement that test to see if the isAdmin variable is true. If it is then open an alert with the message "Welcome administrator".
var isAdmin = true;
var isStudent = false;
if ( isAdmin ) {
  alert("Welcome administrator." );
}
Another tricky challenge:
Add a final else clause to this conditional statement so that if the isAdminvariable and isStudent variables are both false an alert opens with the message "Who are you?"
var isAdmin = false;
var isStudent = false;
if ( isAdmin ) {
    alert('Welcome administrator');
} else if (isStudent) {
    alert('Welcome student');
} else {
    alert("Who are you?"); 
}

IMPROVING GHE RANDOM NUMBER GUESSING GAME
use else if statements to provide multiple conditions and multiple outcomes, let's make the random number guessing game more fun. 'correct guess = true’. Allows player to guess a 2nd time.
Example #1, nest conditional statement: when guess is < or > random number
} else if (present(guess) < randomNumber ) {
         var guessMore = prompt(‘Try again. The number I am thinking of is more than ‘ + guess);
     if (parseInt(guessMore) === randomNumber) {
          correctGuess = true;
     }
} else if ( pareInt(guess) > randomNumber ) {
     var guessLess = prompt(‘Try again. The number I am thinking of is greater than ‘ + guess);
}

DOCUMENT YOUR CODE W/ COMMENTS
leave comments in your code to explain to others how your programs work. Useful for you, too. Use it for copyright notices, contact info, misc about program.
Example #1, 
/*
     This is a multiple-line comment.
     Everything here is ignored.
*/

COMBINING MULTIPLE TESTS INTO A SINGLE CONDITION
Sometimes you want to test if two things are true -- is it Friday and after 5 p.m., for example. Logical operators let you combine two or more tests into a single condition.
**If one condition is false, than the whole thing is false**
Example #1, and operator &&
( 20 < age && age < 30 )
Example #2, or operator ||, only 1 of the conditions needs to be true
( agree === ‘yes’ || agree === ‘y’ )

THE CONDITIONAL CHALLENGE
Challenge Instructions
1. 
Ask at least five questions
2. 
Keep track of the number of questions the user answered correctly
3. 
Provide a final message after the quiz letting the user know the number of questions he or she got right.
4. 
Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

INTRODUCING FUNCTIONS
write code that you can quickly use again and again.
rules:
1. can only be made up of letters, numbers, the _, and $ characters
2. They can’t start w/ a #
3. Can’t include any spaces or other punctuation
Example #1, Basic structure of a function:
function() {
     // do a bunch of stuff here
}
Example #2, Calling a function
MyFunction();
Example #3, A function expression
var myFunction = function () {
     //do stuff here
};
Challenge:

Call the new sayHi function you just created.
function sayHi() {
  alert("Hi");
}
Then, you just have to call your function : sayHi();

FUNCTIONS CAN CHANGE THE FLOW OF A PROGRAM
functions change the way your program runs. It breaks that top to bottom flow.

GETTING INFO FROM A FUNCTION
can also return values that you can use elsewhere in a program.
Use RETURN keyword
Related Treehouse Courses
* Interactive Web Pages with JavaScript
Returning a value from a function
function giveMeFive() {
     return 5;
}
// prints 5 to the console
console.log( giveMeFive() );
Example #1, access elements in an email. Checking to see: Is the field empty? also known as: Is the string empty?
function isEmailEmpty() {
     var field = document.getElementById(‘email’);
     if (field.value === ‘’) {
          return true;
}
}

GIVING INFO TO FUNCTIONS
CALL THE FUNCTION=ALERT
Modify how functions work by sending information to functions when you call them.
parameter works like a variable put in ()
Example #1, Adding parameters to a function:
function calculateArea( width, length ) {
     return width * length;
}
calculateArea( 5, 4 ); // 20
calculateArea( 30, 4 ); // 120

Challenge: Create a new function named max which accepts two numbers as arguments (you can name the arguments, whatever you would like). The function should returnthe larger of the two numbers.
function  max( num1, num2) {
  return num1, num2
}
Challenge Task 2 of 2 Call the function and display the results in an alert dialog. You can pass the results of a function directly to the alert() method. For example, to display the results of the Math.random() method in an alert dialog you could type this:
alert( Math.random( ) );
function max(a, b) {
// "a" and "b" are parameters (think placeholders) for this function
  if(a > b) {
    return a;
  } else {
    return b;
  }
}
//When you call the function, you need to replace those "placeholders" with actual numbers, in this case.
alert(max(1,2));
//The returned value of the alert call should be the number 2, since 1 is not greater-than 2.

The JavaScript Console
Chrome Console Keyboard Shortcuts
* Windows: Ctrl + Shift + J
* Mac: Cmd + Option + J

VARIABLE SCOPE
****1. always use the var keyword when creating a variable inside a function
****2. Otherwise, your function is reaching out to the global scope
****3. You can create same name with var and non-var, as long as one has var in it. 
How JavaScript protects variables from writing over each other.
* Everything you wanted to know about JavaScript scope
Example #1, person Lilah-function scope
function greeting() {
     var person = ‘Lilah’;
     alert(person);
}
Example #2, person George-gloab scope, 
var person = ‘George’;
greeting();
alert(person);
greeting();
*******bad idea to access global variables in your functions, it makes tracking down errors harder. 

RANDOM # CHALLENGE
Example #1,programmed the solution to the random number challenge.
function getRandomNumber( lower, upper ) {
     var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log( getRandomNumber ( 1, 6) );
console.log( getRandomNumber ( 1, 100) );
console.log( getRandomNumber ( 200, 500) );
console.log( getRandomNumber ( 1000, 2000) );
console.log( getRandomNumber ( 50, 100) );

RANDOM # CHALLENGE, Pt2
Proactively deal with problems with the random number function. 
Example #1, Use || to test if a #
if ( || ) {
     throw new Error(‘error message’);}
Test if a JavaScript value is a number
isNan(9) // false
isNan(‘nine’) // true
Example #2, needs 2 #s, not a string, add a conditional statement, if either is an error, it will raise an error
function getRandomNumber( lower, upper ) {
     if ( isNan(lower) || isNan(upper)  ) {
          throw new Error(‘Both arguments must be numbers’);
}
