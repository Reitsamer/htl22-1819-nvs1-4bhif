
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

app.get('/HelloWorld', (req, res) => {
    sendMessage(res, 'Hello World!')
})

app.get('/HelloYou', (req, res) => {
    sendMessage(res, 'Hello you!')
})

app.get('/ServerTime', (req, res) => {
    sendMessage(res, 'Server time is: ' + Date())
})

const sendMessage = (res, message) => {
    res.statusCode = 200
    res.setHeader('Content-Type', "text/plain")
    res.write(message)
    res.end()
}

app.start(port, hostname)