// String
const firstName = "Sohel";
console.log(firstName, typeof firstName);

// Number

const age = 28;
const pi = 3.1416;

console.log(age, typeof age);
console.log(pi, typeof pi);

// Boolean

const hasLaptop = true;

console.log(hasLaptop, typeof hasLaptop);

// Null

const vagetablesPrice = null;

console.log(vagetablesPrice, typeof vagetablesPrice);


// undefined

let scores;
console.log(scores, typeof scores);

// Symbol

const id = Symbol('id');
console.log(id, typeof id);

// BigInt

const n = 9800267843985561n;

console.log(n, typeof n);


// Reference Types
const numbers = [1,2,3,4]

console.log(numbers, typeof numbers);

const person = {
    lastName:'Sohag',
    age: 24,
}

console.log(person, typeof person);

function printHello(){
    console.log("Hello");
}

console.log(typeof printHello);

const outPut = printHello;

console.log(outPut, typeof outPut);