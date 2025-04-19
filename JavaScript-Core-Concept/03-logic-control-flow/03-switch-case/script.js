// const d = new Date(2022, 11, 10, 19, 0, 0);
// const d = new Date();
const month = new Date().getMonth();
const hour = new Date().getHours();
let dates = new Date().getDate();
let thisMonth;

// Immediate value evaluation
switch (month) {
  case 0:
    thisMonth = "January";
    break;
  case 1:
    thisMonth = "February";
    break;
  case 2:
    thisMonth = "March";
    break;
  case 3:
    thisMonth = "April";
    break;
  case 4:
    "May";
    break;
  case 5:
    thisMonth = "June";
    break;
  case 6:
    thisMonth = "July";
    break;
  case 7:
    thisMonth = "August";
    break;
  case 8:
    thisMonth = "September";
    break;
  case 9:
    thisMonth = "October";
    break;
  case 10:
    thisMonth = "November";
    break;
  default:
    thisMonth = "December";
}

console.log(`This is ${dates} ${thisMonth} month.`);

// Range evaluation
switch (true) {
  case hour < 12:
    console.log(`${hour} hour\nGood Morning`);
    break;
  case hour < 18:
    console.log(`${hour} hour\nGood Afternoon`);
    break;
  case hour < 24:
    console.log(`${hour} hour\nGood Evening`);
    break;
  default:
    console.log(`${hour} hour\nGood Night`);
}