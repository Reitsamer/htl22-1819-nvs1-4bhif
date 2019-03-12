const fs = require('fs');
const os = require('os');

//console.log('Hello!');
// console.log(fs);

const user = os.userInfo();

console.log(user);

const userName = user.username;

console.log(userName);

fs.appendFileSync('grettings.txt', 'Hello!');
