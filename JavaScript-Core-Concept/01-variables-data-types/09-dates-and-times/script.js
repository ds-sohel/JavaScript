let d;

// Get todays date and time
d = new Date();
console.log(d);

// Get a specific Date
// The month is 0-based, so 0 is January and 11 is December
d = new Date(2021, 9, 17, 19, 30, 0);
console.log(d);

// Pass in a String
let d1 = new Date('2024-12-06T12:30:00');
let d2 = new Date('2024/10/27 12:30:00');
let d3 = new Date('2024-10-29');
let d4 = new Date('12-10-2024');

console.log(`${d1}\n${d2}\n${d3}\n${d4}`);

// Get current timestamp
d = Date.now();
console.log(d);


// Get the timestamp of a specific date
d = new Date();

let hours = d.getHours();
let day = d.getDay();
let date = d.getDate();
let month = d.getMonth();
let time = d.getTime();
let utcMonth = d.getUTCMonth();
let year = d.getFullYear();
let valu = d.valueOf()

console.log(`Hours: ${hours}\nDay: ${day}\nDate: ${date}\nMonth: ${month}\nTime: ${time}\nUTC-Month: ${utcMonth}\nYear: ${year}\nValue: ${valu}`);

// Create a Date from Timestamp
dateCreate = new Date(1743781325990);
console.log(dateCreate);