/*
This Binding: Functions in JavaScript
with a specific context (this value).
*/

// bind() Method

const faculty = {
  universityName: "University of Bolton.",
  department: function () {
    console.log("School of IT, " + this.universityName);
  },
};

const department = faculty.department;
const boundDepartment = department.bind(faculty);

boundDepartment();

/*
This code defines a faculty object with a
department method, binds it to the faculty
object using bind(), and then call the 
bound function to correctly reference 
the faculty name when executed.
*/

// call() Method

/*
The call method immediately invokes a function, 
allowing you to set the value of this and 
pass arguments to the function.
*/

const mobile = {
  brand: "Apple",
  info: function (names) {
    console.log("This is " + names + " brand of " + this.brand);
  },
};
mobile.info("iPhone 16");

const apple13 = mobile.info;
apple13.call(mobile, "iPhone 16 Pro");

// apply() Method
/*
Similar to call(), the apply() method
invokes a function and allows you to set
the value of this, but the difference is that
the arguments are passed as an array (or an array like object)
*/

const person = {
  name: "SOHEL",
  greet: function (city, country) {
    console.log("Hello, I'm " + this.name + ", from " + city + ", " + country);
  },
};
person.greet("Dhaka", "Bangladesh.");
const greet = person.greet;
greet.apply(person, ["Warsaw", "Poland"]);
