const http = require('http')

const { sendError, respondWithStaticFile } = require('./http-utils')

const create = () => {
    var handlers = {}

    const server = http.createServer()

    server.on('request', (req, res) => {
        const url = req.url
        const method = req.method

        console.log('Url:', url)
        console.log('Method:', method)

        var handlersUrl = handlers[url]
        if (handlersUrl === undefined) {
            respondWithStaticFile(req, res)
            return;
        }

        var handlersToExecute = handlersUrl[method]
        if (handlersToExecute === undefined) {
            sendError(res, 404)
            return;
        }

        var singleCall = handlersToExecute[0]
        singleCall(req, res)
    })

    const start = (port, hostname) => {
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}`)
        })
    }

    const get = (url, eventHandler) => {
        register('GET', url, eventHandler)
    }

    const post = (url, eventHandler) => {
        register('POST', url, eventHandler)
    }

    const static = () => {

    }

    const register = (method, url, eventHandler) => {
        if (handlers[url] === undefined) {
            handlers[url] = {}
        }

        if (handlers[url][method] === undefined) {
            handlers[url][method] = []
        }

        handlers[url][method].push(eventHandler)
    }

    return {
        start,
        get,
        post,
        static
    }
}

module.exports = create;