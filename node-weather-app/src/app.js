const { forecast } = require('./utils/forecast')
const { geocode } = require('./utils/geocode')

const location = process.argv[2]

if (!location) {
    console.log('Please provide a location.')
    return
}

geocode(location, (error, { latitude, longitude, place_name:foundLocation }) => {
    if (error) {
        console.log('Error:', error)
        return
    }

    forecast(latitude, longitude, (error, { summary, message }) => {
        if (error) {
            console.log('Error:', error)
            return
        }
    
    console.log('Ort:', foundLocation)
    console.log('Vorhersage:', summary)
    console.log('Nachricht:', message)
    })
})



