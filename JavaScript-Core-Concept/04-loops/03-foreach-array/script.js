const tech = ["Twitter", "LinkedIn", "Facebook", "Instagram"];

// View prototype chain
console.log(tech.__proto__);

// Long form
tech.forEach(function (item) {
  console.log(item);
});

// Short form
tech.forEach((item) => console.log(item));

// We can also pass in the index and original array
tech.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Using a named function
function logSocials(social) {
  console.log(social);
}

tech.forEach(logSocials);

// Array of objects
const socialObjs = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Linkedin", url: "https://linkedin.com" },
  { name: "Instagram", url: "https://instagram.com" },
];

socialObjs.forEach((item) => console.log(item.url));
