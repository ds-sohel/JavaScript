// Exponential

let x = 2 ** 3;
console.log(x);

// Increment

let num = 5;
num++
console.log(num);

// Decrement

num = 5;
num--
console.log(num);

// Number() Converts a value to a Number

let str = '10';
num = Number(str);
console.log(num, typeof num);

// parseInt() converts a string to a integer

str = '20px';
num = parseInt(str);
console.log(num, typeof num);

// parseFloat() converts a string to a float

str = '25px';
num = parseFloat(str);
console.log(num, typeof num);

// toFixed() Formats specified decimal places.

let pi = 3.1416;
let fixed = pi.toFixed(2); // 3.14
console.log(fixed);

// Exponential

num = 2;
let exn = num.toExponential(2);
console.log(exn);

// isNaN
num = NaN;
let check = isNaN(num);
console.log(check);

// isFinite

num = 10;
check = isFinite(num);
console.log(check);

// math.abs

num = -9;
let absoluteValue = Math.abs(num);
console.log(absoluteValue);

// Math.ceil

num = 9.15;
ceil = Math.ceil(num);
console.log(ceil);

// Math.floor

num = 5.99;
ceil = Math.floor(num);
console.log(ceil);

// Math.round

num = 10.49;
ceil = Math.round(num);
console.log(ceil);

num = 10.51;
ceil = Math.round(num);
console.log(ceil);

// MAth Max

let max = Math.max(3,2,5,7,9,1,4,6,8) // 9
console.log(max);

// MAth min

let min = Math.min(3,2,5,7,9,4,6,8) // 2
console.log(min);

// Random 

let random = Math.random();
let roundRandom = (random * 100).toFixed(0); 
console.log("Random Number", random);


// Math.pow() the Exonent power
let pow = Math.pow(2, 3);
console.log(pow);

// Math.sqrt Square Root 
let sqrt = Math.sqrt(25);
console.log(sqrt);

// Get a random number from 1 to 100

x = Math.floor(Math.random() * 100 + 1);
console.log("Random Number 0-100 :",x);