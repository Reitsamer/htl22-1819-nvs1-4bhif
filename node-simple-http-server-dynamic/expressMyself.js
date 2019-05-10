const http = require('http')

const create = () => {
    const server = http.createServer()

    const start = (port, hostname) => {
        server.listen(port, hostname, () => {
            console.log(`Server running at http://${hostname}:${port}`)
        })
    }

    const get = () => {

    }

    const post = () => {

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