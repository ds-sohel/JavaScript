// for ([initialExpression]; [conditionExpression]; [incrementExpression]) {
//   statement;
// // }

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  // Nested loops
  for (let i = 8; i <= 10; i++) {
    console.log("Number " + i);
  
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
  
  // Loop through an array
  const names = ["Sohel", "Abdullah", "Nuhash", "Sohag", "Kamrul", "Karim"];
  
  for (let i = 0; i < names.length; i++) {
    if (names[i] === "Karim") {
      console.log(names[i] + " is the best");
    } else {
      console.log(names[i]);
    }
  }
  
  // For-in Loops
  
  // Loop through objects
  const colorObj = {
    color1: "red",
    color2: "blue",
    color3: "orange",
    color4: "green",
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }
  
  // Loop through arrays
  const colorArr = ["red", "green", "blue", "yellow"];
  
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }
  
  // For-of Loops
  
  // Loop through arrays
  const cities = ["Dhaka", "Foridpor", "Gazipor", "Jessor", "Sylhet", "Saidpor"];
  const users = [
    {
      name: "Sohag",
      Job: "Restaurants Manager",
    },
    {
      name: "Sohel",
      Job: "IT",
    },
    {
      name: "Kamrul",
      Job: "Business",
    },
  ];
  
  for (const city of cities) {
    if (city === "Dhaka") {
      console.log(`${city} is a capital city of Bangladesh.`);
    } else {
      console.log(city);
    }
  }
  
  for (const user of users) {
    console.log(user.name);
  }
  
  // Loop over strings
  const str = "Hello Sohel";
  
  for (const letter of str) {
    console.log(letter);
  }
  
  // Loop over Maps
  const map = new Map();
  map.set("name", "Sohel");
  map.set("age", 25);
  
  for (const [key, value] of map) {
    console.log(key, value);
  }
  
  // Break and Continue
  
  // Break
  for (let i = 0; i <= 10; i++) {
    if (i === 6) {
      console.log("Breaking...");
      break;
    }
    console.log(i);
  }
  
  // Continue
  for (let i = 0; i < 10; i++) {
    if (i === 7) {
      console.log("Skipping 7...");
      continue;
    }
    console.log(i);
  }