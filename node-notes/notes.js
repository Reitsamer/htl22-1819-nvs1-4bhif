console.log('Starting notes.js.');

var age = 20;

// Arrow-functions
// var add = (x, y) => x + y;

var person = {
  firstname: "Wolf",
  lastname: "Reitsamer",
  age: 20
}

// module.exports.age = age;
// module.exports.add = add;
// module.exports.person = person;

module.exports = {
  age,    // age: age,
  add: (x, y) => x + y,    // add: add,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,    
  person  // person: person
}
