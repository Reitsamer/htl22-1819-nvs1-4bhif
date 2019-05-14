const http = require('http')

const create = () => {
    const server = http.createServer()

    server.on('request', (req, res) => {
        const url = req.url
        const method = req.method

        console.log('Url:', url)
        console.log('Method:', method)
    })

    const start = (port, hostname) => {
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}`)
        })
    }

    const get = (url, eventHandler) => {

    }

    const post = (url, eventHandler) => {

    }

    const static = () => {

    }

    return {
        start,
        get,
        post,
        static
    }
}

module.exports = create;