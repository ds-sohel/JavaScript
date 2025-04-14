let x;

// Creating an object
const person = {
  name: 'Mohammad Sohel',
  age: 30,
  isAdmin: true,
  address: {
    street: 'Ferensica Ulica 46B',
    city: 'Zagreb',
    country: 'Croatia',
  },
  hobbies: ['music', 'sports', 'travel'],
};

// Accessing object properties
xName = person.name; // Dot notation
xAge = person['age']; // Bracket notation
xAddress = person.address.city;
xHobbies = person.hobbies[0];
console.log(`Name: ${xName}\nAge: ${xAge}\nAddress: ${xAddress}\nHobbies: ${xHobbies}`);


// Updating properties
person.name = 'Sohag Mahmud';
person['isAdmin'] = false;
console.log(person);

// Deleting properties
delete person.age;
console.log(person);

// Create new properties
person.hasChildren = true;
console.log(person);

// Add functions
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// Keys with multiple words
const person2 = {
  'first name': 'Kamrul',
  'last name': 'Islam',
};

x = person2['first name'];

console.log(x);