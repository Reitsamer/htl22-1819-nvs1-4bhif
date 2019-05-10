
// http://localhost:8080/HelloWorld
// --> Response: "Hello World!"

// http://localhost:8080/HelloYou
// --> Response: "Hello <Username>!"

// http://localhost:8080/ServerTime
// -- >Response: "Server time is: xxx" 

const express = require('./expressMyself')

const port = 8080
const hostname = 'localhost'

const app = express()

console.log(app)

app.start(port, hostname)