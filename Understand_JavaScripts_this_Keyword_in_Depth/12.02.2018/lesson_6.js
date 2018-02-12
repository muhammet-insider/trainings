const person = {
    firstName : "Test",
    sayHi() {
        console.log(`Hi, my name is ${this.firstName}!`);
    }
};

const greet = person.sayHi.bind(person);

const otherPerson = {
    firstName : " Tets 1"
};

greet.call(otherPerson);