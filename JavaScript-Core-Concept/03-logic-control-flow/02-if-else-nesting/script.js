// const d = new Date(3, 26, 2025, 12, 0, 0);
const d = new Date();
const hour = d.getHours();
const day = d.getDay();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If
if (hour < 12) {
  console.log('Good Morning');
  if (hour === 5) {
    console.log('Its Fazr Prayer Time. Wake Up!');
  } else if (hour === 6){
    console.log('Walk 30 minutes!');
  } else if (hour === 9) {
    console.log('Go to Work!');    
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
  if (hour === 12) {
    if (day === 5) {
      console.log("It's Jumma Prayer Times");
    } else {
      console.log("It's Juhr Prayer Times");
    }
  } else if (hour === 16){
    console.log("It's Asor Prayer Times");
  }
} else if(hour === 18){
  console.log('Good Evening!');
  if (hour === 18){ 
    console.log('It\'s Magrib Prayer Times');
  } else if (hour === 20){
    console.log('It\'s Esha Prayer Times');
  }
  
} else {
  console.log('Good Night');

  if (hour >= 21) {
    console.log('zzzzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('It is work time!');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}