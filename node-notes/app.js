console.log('Starting app.js.');

const notes = require('./notes');


console.log(notes);

console.log('Age:', notes.age);

var result = notes.add(5, 7);

console.log('Result:', result);
console.log(`Result: ${result}`);
