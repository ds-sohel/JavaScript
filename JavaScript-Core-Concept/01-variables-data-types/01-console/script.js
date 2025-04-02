// Log Number
console.log(100);

// Log String
console.log("Hello Sohel!");

// Log Booleans
console.log(true);

// Log Multiple Values
console.log(100, "Hello JavaScript", false);

// Log a Variables

const x = 10;
console.log(x);

// Console Error & Warning

console.error('This is an error message!');

console.warn("It's an warning message!");

// Log objects as table

console.table({ Name: "MD SOHEL", Nationaliy: "Bangladesh", Age: 25, Email: 'sohel@email.com', Interested_in_IT: true })

// Group Console Commands

console.group('Console-Group');
console.log(x);
console.warn('Warning Message!');
console.error('Type Error!');
console.groupEnd();

// Add CSS to Logs
const style = 'padding: 10px; background-color: white; color: green; font-size: 18px';
console.log("%cJavaScript CSS Log!", style);