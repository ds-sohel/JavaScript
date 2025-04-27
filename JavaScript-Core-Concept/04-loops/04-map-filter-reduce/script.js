// Map

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);
console.log("Double Numbers : " + doubledNumbers);

// Same with forEach
const square = [];
numbers.forEach((number) => {
  square.push(number * number);
});

console.log("Square Numbers : " + square);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Create an array of company category
const companyCategory = companies.map((company) => company.category);
companyCategory.map((category) => console.log(category));

// Create an array with just company category and start
const companyInfo = companies.map((company) => {
  return {
    Category: company.category,
    Start: company.start,
  };
});

console.log(companyInfo);

// Create an array of objects with the name and the length of each company in years
const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + " years",
  };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble2);

// Chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);

// Filter

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = number.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

// Short version
const evenNumbers2 = number.filter((number) => number % 2 === 0);

console.log(evenNumbers2);

// Same with forEach
const evenNumbers3 = [];
number.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers3.push(number);
  }
});

console.log(evenNumbers3);

const companie = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Get only retail companies
const retailCompanies = companie.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompanies);

// Get companies that started in or after 1980 and ended in or before 2005
const earlyCompanies = companie.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlyCompanies);

// Get companies that lasted 10 years or more
const longCompanies = companie.filter(
  (company) => company.end - company.start >= 10
);

console.log(longCompanies);

//  Reduce

const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Add all numbers together
const sum = numberss.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

const sum2 = numberss.reduce((acc, cur) => acc + cur, 0);

console.log(sum2);

// Using a for loop
const sum3 = () => {
  let acc = 0;
  for (const cur of numberss) {
    acc += cur;
  }
  return acc;
};

console.log(sum3);

// Shopping cart example (objects)
const cart = [
  { id: 1, name: "Product 1", price: 130 },
  { id: 2, name: "Product 2", price: 150 },
  { id: 3, name: "Product 3", price: 200 },
];

// FIBONACCI

acc = 0;
const total = cart.reduce(function (acc, product) {
  return acc + product.price;
}, 0);

console.log(total);
