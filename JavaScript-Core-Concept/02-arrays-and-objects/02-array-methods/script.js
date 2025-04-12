let x;

let numbers = [10, 20, 30, 50, 70, 80, 90];
console.log(numbers);

// push() Push a Value to the end of the array

numbers.push(100);
console.log(numbers);

// pop() Take the last value Off
numbers = [10, 20, 30, 50, 70, 80, 90];
numbers.pop();
console.log(numbers);

// unshift() Add a Value to the begining of the array
numbers = [10, 20, 30, 50, 70, 80, 90];
numbers.unshift(5);
console.log(numbers);

// shift() Remove first value of the array
numbers = [10, 20, 30, 50, 70, 80, 90];
numbers.shift();
console.log(numbers);

// Reverse an Array
numbers = [10, 20, 30, 50, 70, 80, 90];
numbers.reverse();
console.log(numbers);

// at()
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.at(2);
console.log(x);

// Array Length
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.length
console.log(x);

// includes - To check if something is an array
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.includes(40);
console.log(x);

// indexOf() - Return the index of the first match
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.indexOf(30);
console.log(x);

// Return array as a string
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.toString();
x = numbers.join(' -> ');
console.log(x);

// slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.slice(1, 4);
console.log(x);

// splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.splice(1, 4);
console.log(x);

// Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
numbers = [10, 20, 30, 50, 70, 80, 90];
x = numbers.splice(4, 1);
console.log(x);

// Chaining methods - Some methods can be chained depending on the return value.
numbers = [10, 20, 30, 40, 50, 70, 80, 90];
x = numbers.slice(1, 4).reverse().toString().charAt(0);
console.log(x);

// concat()
let city = ['Dhaka', 'Berlin', 'Warsaw'],
    country = ['Bangladesh', 'German', 'Poland'];
cityCountry = country.concat(city);
console.log(cityCountry);

// JavaScript  Array Find
numbers = [10, 20, 30, 40, 50, 70];
let finds = numbers.find(fiftyPlus);

function fiftyPlus(value, index, array){
    return value > 50 ;
}

console.log(finds);

// JavaScript  Array FindIndex
numbers = [10, 20, 30, 40, 50, 70];
finds = numbers.findIndex(findIndexs);

function findIndexs(value, index, array){
    return value > 50 ;
}

console.log(finds);

// ForEach Array Method

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((value => {
    console.log(value);
}));

numbers.forEach((value) => {
    console.log(`Print Double Values of Array: ${value * 2}`);
});

numbers.forEach((values, index, arr) => {
    console.log(`Array Index [${index}] = Value: ${values}`);
});

// map method

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numberSquare = numbers.map(square);

function square(value, index, arr) {
    return value ** 2;        
};
console.log(numberSquare);


const products = [
    {
        name: 'MacBook Pro',
        price: 1449,
        unit: 17
    },
    {
        name: 'MacBook Air',
        price: 1099,
        unit: 21
    },
    {
        name: 'iPhone',
        price: 1249,
        unit: 34
    }
];

const totalPrice = products.map(item => item.price * item.unit);
const productsName = products.map(item => item.name);
console.log(`${productsName}\n${totalPrice}`);

// String to Number with Map

let str = ['1', '2', '3', '4', '5'];
let convertNumber = str.map(item => Number(item));
console.log(convertNumber);

// Filter

numbers = [1, 2, 3, 2, 4, 6, 6, 3, 1, 4, 8, 2, 4, 9, 8];
const removeDuplicateNumber = numbers.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(removeDuplicateNumber);