let i = 0;

while (i <= 10) {
  console.log("Number : " + i);
  i++;
}

// Loop over arrays
const arr = [10, 20, 30, 40, 50];
let a = 0;
while (a < arr.length) {
  console.log(arr[a]);
  a++;
}

// Nesting while loops
let b = 5;
while (b <= 6) {
  console.log("Number " + b);

  let c = 1;
  while (c <= 5) {
    console.log(`${b} * ${c} = ${b * c}`);
    c++;
  }
  b++;
}

// Do While Loop - Always runs once
let m = 0;
do {
  console.log("Do-Print Number " + m);
  m++;
} while (m <= 10);
