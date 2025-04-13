const city = ['Dhaka', 'Berlin', 'Auckland'];
const country = ['Bangladesh', 'German', 'New Zealand'];

// Nesting Arrays
// Nesting bangladeshPapers inside of bangladeshTv
country.push(city);
console.log(country);

// Access bangladeshPaper
console.log(country[3][0]); //Prothom Alo

// Create a newe variable and nest both arrays
let cityCountry = [country, city];
console.log(cityCountry);
console.log(cityCountry[0]);

// concatenate arrays
const laptop = ['Macbook', 'Macbook Air', 'Macbook Pro', 'Lenovo', 'Acer', 'Dell'];
const mobile = ['iPhone 16 Pro', 'Samsung Galaxy S25', 'Redmi Note 14C', 'Realme C55', 'Honor'];
laptopMobile = laptop.concat(mobile);
console.log(laptopMobile);

// splread operator (.....) concatenate with
laptop_Mobile = [...laptop, ...mobile];

//  flat() flatten an array
let num = [[1,2], 3, 4, [5, 6, 7], 8, 9];
flateen = num.flat();
console.log(flateen);

// Static Method pf Array Object
x = Array.isArray(city);
console.log(x);

// from() Create an array from an array like value
x = Array.from('123456');
console.log(x);

// of() Create an array from a set of value
const a = 'SOHEL';
const b = 'Sohag';
const c = 'Kamrul';

x = Array.of(a, b, c);
console.log(x);