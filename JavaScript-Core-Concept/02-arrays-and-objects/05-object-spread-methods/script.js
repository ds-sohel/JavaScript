let x;

// Create object using the object constructor
const todo = new Object();

todo.id = 101;
todo.name = 'Buy Car';
todo.completed = false;
console.log(todo);

x = todo;
console.log(x);

// Object Nesting
const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Spread operator
const obj3 = { ...obj1, ...obj2 };

// Same as using ...
const obj4 = Object.assign({}, obj1, obj2);

// Array of objects
const todos = [
  { id: 1, task: 'Buy Milk' },
  { id: 2, task: 'Pickup kids from school' },
  { id: 3, task: 'Take out trash' },
];

x = todos[1].task;
console.log(x);

// Get array of object keys
x = Object.keys(todo);
console.log(x);

// Get length of an object
x = Object.keys(todo).length;
console.log(x);

// Get array of object values
x = Object.values(todo);
console.log(x);

// Get array of object key/value pairs
x = Object.entries(todo);
console.log(x);

// Check if object has a property
x = todo.hasOwnProperty('age');
console.log(x);