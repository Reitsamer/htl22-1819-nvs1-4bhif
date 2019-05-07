const http = require('http')

const hostname = '127.0.0.1'
const port = 8080
const publicDir = 'public'

const contentType = {
    'html': 'text/html',
    'js': 'application/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon'
}

const server = http.createServer()

server.on('request', (req, res) => {
    var fileName = getFileName(req)
    var fileExtension = getFileExtension(fileName)
    var contentType = getContentType(fileExtension)

    if (contentType == null) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'text/html')
        res.write('<h1>Error: 400</h1><br>Extension: ' + fileExtension)
        res.end()
    }
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})

const getFileName = (req) => {
    var filename = req.url
    if (filename === '/')
        filename = '/index.html'

    return publicDir + filename
}

const getFileExtension = (filename) => {
    var parts = filename.split('.')
    return parts[parts.length-1]
}

const getContentType = (fileExtension) => {
    return contentType[fileExtension] === undefined ? null : contentType[fileExtension]
}
// res.statusCode = 200
// res.setHeader('Content-Type', 'text/html')
// res.write('<h1>Hello World!</h1>')
// res.end()
