const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>Hello Express!</h1>')
})

app.use(express.static('public'))

app.get('/help', (req, res) => {
    res.send({
        name: 'Wolf',
        age: 18
    })
})

app.get('/about', (req, res) => {
    res.send(
        [
            { name: 'Kevin' },
            { name: 'Jennifer' }
        ])
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})