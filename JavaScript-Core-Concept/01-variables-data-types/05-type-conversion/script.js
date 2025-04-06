// Convert Number to String

let amount = 299;

console.log(amount, typeof amount);

amount = amount.toString();
amount = String(amount);

console.log(amount, typeof amount);

// Convert  String to Number

let hi = 'Hello';

console.log(hi, typeof hi);

hi = parseInt(hi);
hi = +hi;
hi = Number(hi);

console.log(hi, typeof hi);

// convert string to decimal

let pi = "three";
console.log(pi, typeof pi);

pi = parseFloat(pi);
console.log(pi, typeof pi);

// Convert number to boolean

let binary = 1;
console.log(binary, typeof binary);

binary = Boolean(binary);

console.log(binary, typeof binary);

let binary_0 = 0;
console.log(binary_0, typeof binary_0);

binary_0 = Boolean(binary_0);

console.log(binary_0, typeof binary_0);

// Ways to get NaN

console.log(Math.sqrt(-1));

console.log(1 + NaN);

console.log(NaN + undefined);

console.log(undefined + undefined);

console.log(undefined + 0);

console.log('n' / 3);