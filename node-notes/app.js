console.log('Starting app.js.');

const notes = require('./notes');


console.log(notes);

console.log('Age:', notes.age);

var result = notes.add(5, 7);

console.log('Result:', result);
console.log(`Result: ${result}`);

console.log('Der Vorname lautet:', notes.person.firstname);

var result2 = notes.multiply(3, 5);
console.log(`3 * 5 = ${result2}`);
