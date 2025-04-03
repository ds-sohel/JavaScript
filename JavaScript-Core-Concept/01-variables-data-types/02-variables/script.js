// 3 Ways to declare variables in JavaScript
// 'var', 'let' & 'const'

var lastName = 'Sohel';
let firstName = 'MD';
const nationality = 'Bangladesh';

console.log(firstName + ' ' + lastName + ' ' + nationality);

// Naming Conventions
// - Only Letters, Numbers, underscores and doller signs - $
// - Can't start with a Number

// Multi-Word Formatting
// firstName = camelCase
// first_name = underscore
// FirstName = PascalCase
// firstname = lowercase
// $lastName = Dollar Signs

// we can re-assign 'let' variables. But we cannot change values for `const`. it will show an error message!

let weather = 'Sunny';

weather = 'Foggy!'

console.log(weather);

// with 'let', we can declare a variables without assigning values!

let school;

school = 'Business';

console.log(school);

// with 'var', we can access value from block codes. but 'let' and 'const' are not possible!

var device = 'Apple';
let co_founder = 'Steve Jobs';
const year = 1976;

if (true){
    console.log(`${device}`);   
}

// Declare multiple values at once

let mobileName = 'iPhone16 Pro',
    color = 'Black Titanium'
    price = 1099;

console.log(`Phone: ${mobileName}\nColor: ${color}\nPrice: ${price}`);