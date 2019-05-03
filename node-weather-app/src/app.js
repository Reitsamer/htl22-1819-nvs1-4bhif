const { forecast } = require('./utils/forecast')
const { geocode } = require('./utils/geocode')

const location = process.argv[2]

if (!location) {
    console.log('Please provide a location.')
    return
}

geocode(location, (error, data) => {
    if (error) {
        console.log('Error:', error)
        return
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            console.log('Error:', error)
            return
        }
    
    console.log('Ort:', data.place_name)
    console.log('Vorhersage:', forecastData.summary)
    console.log('Nachricht:', forecastData.message)
    })
})



