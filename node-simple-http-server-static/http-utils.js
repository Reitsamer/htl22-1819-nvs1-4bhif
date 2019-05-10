const fs = require('fs')

const publicDir = 'public'

const contentTypes = {
    'html': 'text/html',
    'js': 'application/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon'
}

const respondWithStaticFile = (req, res) => {
    var fileName = getFileName(req)
    var fileExtension = getFileExtension(fileName)
    var contentType = getContentType(fileExtension)

    if (contentType == null) {
        sendError(res, 400)
        return
    }

    if (!fs.existsSync(fileName)) {
        sendError(res, 404)
        return
    }

    sendFile(res, contentType, fileName)
}

const getFileName = (req) => {
    var filename = req.url
    if (filename === '/')
        filename = '/index.html'

    return publicDir + filename
}

const getFileExtension = (filename) => {
    var parts = filename.split('.')
    return parts[parts.length - 1]
}

const getContentType = (fileExtension) => {
    return contentTypes[fileExtension] === undefined ? null : contentTypes[fileExtension]
}

const sendError = (res, errorCode) => {
    res.statusCode = errorCode
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h1>Error: ${errorCode}</h1>`)
    res.end()
}

const sendFile = (res, contentType, fileName) => {
    var fileContent = fs.readFileSync(fileName)
    res.statusCode = 200
    res.setHeader('Content-Type', contentType)
    res.write(fileContent)
    res.end()
}

module.exports = {
    respondWithStaticFile
}