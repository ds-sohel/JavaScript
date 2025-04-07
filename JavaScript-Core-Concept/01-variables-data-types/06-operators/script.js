// Arithmetic Operator

let sum = 4 + 3,
    sub = 4 - 3,
    mul = 4 * 3,
    div = 6 / 3;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);

let x = 10,
    y = 5;

let sumx = x + y;
let subx = x - y;
let mulx = x * y;
let divx = x / y;

console.log(sumx);
console.log(subx);
console.log(mulx);
console.log(divx);

// Concatenation

x = 'Hello ' + 'World!';

console.log(x);

// Exponent

x = 2 ** 3;

y = 2 ** 4;

console.log(`2^3 - ${x}\n2^4 - ${y}`);

// Increment

let i = 5;
i = i + 1;

console.log(i);

i = 5;
i += 1;

console.log(i);

i = 5;
i++

console.log(i);

// Decrement


i = 5;
i = i - 1;

console.log(i);

i = 5;
i -= 1;

console.log(i);

i = 5;
i--

console.log(i);

// Assignment Operator

let j = 10;

console.log("j =", j);

j += 5;
console.log("j += 5: ", j);

j = 10;
j -= 5;
console.log("j -= 5: ", j);

j = 10;
j *= 5;
console.log("j *= 5: ", j);

j = 10;
j /= 5;
console.log("j /= 5: ", j);

j = 10;
j %= 5;
console.log("j %= 5: ", j);

j = 10;
j **= 5;
console.log("j **= 5: ", j);

// Comparison Operator

// Equal to (Just teh value, not the data type)

x = 2 == '2';

// Equal to (type and value)

x = 2 === '2';

// Greater than and Less than

x = 10 > 5; // True
x = 10 < 5; // False
x = 10 >= 5; // True
x = 10 <= 5; // False

console.log(x);