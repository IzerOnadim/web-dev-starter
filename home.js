"use strict";

console.log("Hello World!");

let name = "World";
let title = `Hello ${name}!`;

let person = {
    name: "Izer",
    age: 32,
};

function incrementAge(p) {
    p.age++;
}

changeDiscount(25);

incrementAge(person);
showMessage(`Hello ${person.name}`);