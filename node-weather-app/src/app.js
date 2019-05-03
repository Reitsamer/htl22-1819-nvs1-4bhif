
const { forecast } = require('./utils/forecast')
const { geocode } = require('./utils/geocode')

forecast(-75.7088, 44.1545, (error, data) => {
    if (error) {
        console.log('Error:', error)
        return
    }

    console.log('Data:', data)
})

geocode('Vienna', (error, data) => {
    if (error) {
        console.log('Error:', error)
        return
    }

    console.log('Data:', data)
})