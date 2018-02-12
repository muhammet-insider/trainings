
/**
 * 
 * Part 1
 

//Without use strict

function withoutUseStrict() {
    console.log(this === global);
}


//With use strict

function withUseStrict() {
    "use strict";
    console.log(this === global);
}
*/

/**
 * 
 * Part 2
 * 
 * 
 */
"use strict";

function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const person = new Person("Test", "ASDF");
console.log(person);
console.log(global.firstName);
console.log(global.lastName);