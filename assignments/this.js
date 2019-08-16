/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The "Window" binding is when the "this" keyword is invoked in the global scope or not used in the object.
* 2. The "Implicit" binding is when the "this" keyword is called inside of the object this is the most common use of the "this" keyword.
* 3. The "New Binding" is when the "this" keyword is used in a constructor to create an object and its properties.
* 4. The "Explicit Binding"
is when we can override what the constructor objects get set to by calling them using the .call and the .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const myObj = {
  greeting: 'Hello',
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
    console.log(this);
  }
};
myObj.sayHello('Mike');

// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function () {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}

const jerry = new CordialPerson('Newman');
const newman = new CordialPerson('Jerry');

jerry.speak();
newman.speak();

// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);