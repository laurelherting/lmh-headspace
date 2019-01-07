#Object literals
Create an object literal with no properties and assign it to the variable contact.
var contact = {};
##Assign your name to the fullName property on the contact object literal.
var contact = { 
  fullName: “Lana Lee" 
};
Add a method to an object 
#Challenge 1/2 Create a method on the contact object called fullName, use the programming from the printFullName function.
var contact = {
  fullName: function printFullName() {
  var firstName = “Lana";
  var lastName = “Lee";
  console.log(firstName + " " + lastName);
  } 
}
Challenge Task 2/2
If you haven't done so already, make the fullName method an anonymous function. If you've done this step already you can "Check Work”. (delete name to make it anon “printFullName"
var contact = {
  fullName: function() {
  var firstName = “Lana";
  var lastName = “Lee";
  console.log(firstName + " " + lastName);
  } 
}
‘This’ Function
#Modify this object so it uses two properties firstName and lastName and remove their variable declarations from the fullName method. Don't do anything to theconsole.log() call right now.  finish off the code to correctly access the properties on the contact with thethis keyword.
var contact = {
  firstName: "Andrew",
  lastName: "Chalkley",
  fullName: function() {
    console.log(this.firstName + " " + this.lastName);
  } }

Return a String
#  return this.firstName + " " + this.lastName;
subtract method
# this.sum -= value;

multiply method
# this.sum *= value;
Divide method
# this.sum /= value;
Constructor Function
#Create a constructor function for monster
function Monster() {}
##Modify the Monster constructor to take one parameter of name. Inside the constructor function, when it creates a new instance assign the parameter name to the property ofname on the new instance.
function Monster(name) {
  this.name = name; }
###Finally, Monsters have a health property. When they take damage from the player, their health will reduce. All new Monster instances should have 100 health by default. It should be a number not a string.
function Monster (name, health){
this.name=name;
this.health= 100;
this.takeDamage = function (){
this.health--; } ; }
Prototypes - methods
#We're adding a new method to every instance when a Monster is created. Use a prototype instead for the takeDamage method.
function Monster(name) {
  this.name = name;
  this.health = 100; }
Monster.prototype.takeDamage = function(){
  this.health—; }

#Challenge Task 1/2 You're going to modify the Teacher code to inherit from the Person. First, in theTeacher constructor function, call the Person constructor, using the call method and pass in the common attributes.
function Teacher(firstName, lastName, roomNumber) {
  Person.call(this,firstName,lastName);
  this.room = roomNumber;
}
##2/2Now set up the prototype chain for the Teacher prototype to inherit from thePerson prototype.
Teacher.prototype = Object.create(Person.prototype);
