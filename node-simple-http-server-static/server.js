const http = require('http')

const { respondWithStaticFile } = require('./http-utils')

const hostname = '127.0.0.1'
const port = 8080

const server = http.createServer()

server.on('request', (req, res) => {
    respondWithStaticFile(req, res)
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})

