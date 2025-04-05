// Value is stored in the stack

const fullName = 'Sohag Mahmud';
const age = 25;

// Reference is stored in the heap
const person = {
    firstName: 'Nuhash',
    age: 27
};

let newName = fullName;
newName = 'MD SOHAG';

let newPerson = person;
newPerson.firstName = 'SOHEL';

console.log(`Old Name: ${fullName}\nNew Name: ${newName}`);
console.log(person);
console.log(newPerson);