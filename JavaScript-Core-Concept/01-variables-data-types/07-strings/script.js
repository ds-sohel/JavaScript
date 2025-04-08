let name = 'Sohel';

console.log(name);

// Concatenation

let x;
x = 'Hi, My name is ' + name;

console.log(x);

// Template Literals

let school = 'Information Technology',
    degree = 'BSc';

x = `University of Hertfordshire offer 50% schoolarship on ${degree} degree in School of ${school}.`
console.log(x);

// String Length

let text = 'JavaScript';
let length = text.length;
console.log(length);

// String CharAt()

let char = text.charAt(0);
console.log(char);

// String CharCodeAt()

let charCode = text.charCodeAt(0)
console.log(charCode);

// String at() Get the 5th letter of the text

let att = text.at(4);
console.log(att);

// String Get the 3rd letter of the text

let third_letter = text[2];
console.log(third_letter);

// String slice() extracts a part of string and return the extracted partin a new string

text = 'Google, IBM, Apple';
let part = text.slice(8, 11); // output - IBM
console.log(part);

part = text.slice(8);
console.log(part);

part = text.slice(-5);
console.log(part);

// substring() is similar to slice()

text = 'Lenovo, Dell, Acer';
part = text.substring(0, 6);
console.log(part);

part = text.substring(8);
console.log(part);


// substr() is similar to slice()

text = 'Lenovo, Dell, Acer';
part = text.substr(8, 4);
console.log(part);

part = text.substr(14);
console.log(part);

// String Upper Case

let message = 'text email.';
let upperMessage = message.toUpperCase();
console.log(upperMessage);

// String Lower Case

message = 'UK, USA, UAE';
let lowerMessage = message.toLowerCase();
console.log(lowerMessage);

// trim() Remove white space

text = '          Hello JavaScript    ';
let removeSpace = text.trim();
console.log(removeSpace);

// trimStar() Remove white space from start of a string

text = '          Hello JavaScript     ';
let trimStart = text.trimStart();
console.log(trimStart);

// trimEnd() Remove white space from End of a string

text = '          Hello JavaScript      ';
let trimEnd = text.trimEnd();
console.log(trimEnd);

// JavaScript padStart() method pads a string from the start

text = '5';
let padded = text.padStart(5, "0.0");
console.log(padded);

text = '5';
padded = text.padStart(2, "X");
console.log(padded);

// JavaScript padEnd() method pads a string from the end

text = '5';
padded = text.padEnd(5, "0");
console.log(padded);

// String Repeat

text = 'JavaScript Java';
let repet = text.repeat(2);
console.log(repet);

// String Replace

text = 'Walk in the Evening!'
let newText = text.replace('Evening', "morning");
console.log(newText);

// ReplaceAll

text = 'Apple, Banana, apple, Orange, kiwi';
text = text.replaceAll("Apple", "Carrot");
text = text.replaceAll("apple", "carrot");
console.log(text);

text = 'Apple, Carrot, Banana, carrot, kiwi';
text = text.replaceAll(/Carrot/g, "Orange");
text = text.replaceAll(/carrot/g, "orange");
console.log(text);

// Split 

text = 'Apple Banana';
newText = text.split('');
console.log(newText);

// Includes()

text = 'Apple, Carrot, Banana, carrot, kiwi';
newText = text.includes('Carrot');
console.log(newText);

text = 'Apple, Carrot, Banana, carrot, kiwi';
newText = text.includes('Kiwi');
console.log(newText);