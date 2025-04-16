// Setting object properties with the same name as a variable
const firstName = 'Sohel';
const lastName = 'Arman';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.firstName);

// Destructuring object properties

const todo = {
  id: 50,
  title: 'Build single page web app.',
  user: {
    name: 'Md Sohel',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;
console.log(todoId);
console.log(name);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];
const [first, second, ...rest] = numbers;
console.log(`First: ${first}\nSecond: ${second}\nRest: ${rest}`);