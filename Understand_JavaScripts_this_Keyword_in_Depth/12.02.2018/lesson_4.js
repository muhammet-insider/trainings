/*

Part 1

const person = {
    firstName : "Test",
    sayHi() {
        console.log(`Hi, my name is ${this.firstName}!`);
    }
};

person.sayHi();
*/

/*

Part 2

function sayHi() {
    console.log(`Hi, my name is ${this.firstName}!`);
}
const person = {
    firstName : "Test",   
};
person.sayHi = sayHi;
person.sayHi();
*/

/*

Part 3

const person = {
    firstName : "Test",
    sayHi() {
        console.log(`Hi, my name is ${this.firstName}!`);
    }
};
//invoked global scope

//setTimeout(() => { person.sayHi() }, 1000);


setTimeout(person.sayHi.bind(person), 1000);
*/