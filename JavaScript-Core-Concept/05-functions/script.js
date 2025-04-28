// Function

function helloMessage() {
  console.log("Hello World");
}

helloMessage();

// Function Copy
let copyMessage = helloMessage;
copyMessage();

// Function with param
let user = "MD SOHEL";
function userName(user_name) {
  console.log(`Hi ${user_name}`);
}

userName(user); // MD SOHEL
userName("Nuhash");

// Function with return

function sum(a, b) {
  return a + b;
}

let abSum = sum(10, 20);
console.log(`Print Sum: ${abSum}`);
console.log(`Sum: 20 + 30 : ${sum(20, 30)}`);
console.log(sum(20, abSum));

function checkAge(age) {
  if (age >= 18 && age < 100) {
    return true;
  } else {
    return false;
  }
}

let age = 13;

console.log(checkAge(age));

if (checkAge(age)) {
  console.log("Access Granted!");
} else {
  if (age > 0) {
    console.log(`Age: ${age} is not allowed`);
  } else {
    console.log("Unusual Age!");
  }
}

// Function is a value

let textMessage = function () {
  console.log("This is Functions!");
};
textMessage();

let addTax = function (params) {
  param = (params * 25) / 100;
  let message = `Bill: ${params}\nTotal Tax: ${param}\nTotal Cost: ${
    params + param
  }`;
  console.log(message);
};
addTax(20);

// Arrow Functions

let double = (n) => n * 2;
console.log(`Double: ${double(5)}`);

let square = (n) => n * n;
console.log(`Square: ${square(5)}`);

// Multi Line Arrow Functions

let fullName = (a, b) => {
  full_Name = a + " " + b;
  return full_Name;
};

console.log(fullName("MD", "SOHEL"));

// IIFE - Immediately Invoked Function Expression

// Standard IIFE
(function () {
  console.log("Standard IIFE");
})();

// arrow functions variant
(() => {
  console.log("Single Line Arrow IIFE Functions!");
})();

(() => {
  let x = "Multi Line Arrow IIFE Function!";
  console.log(x);
})();

// async IIFE
(async () => {
  console.log("Async IIFE Functions!");
})();
