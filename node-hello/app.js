const fs = require('fs');
const os = require('os');

//console.log('Hello!');
// console.log(fs);

const user = os.userInfo();

console.log(user);

const userName = user.username;

console.log(userName);

// Interpolated strings
// Console.WriteLine($"Hallo {username}!");

// Template strings
fs.appendFileSync('grettings.txt', `Hello ${userName}!`);
