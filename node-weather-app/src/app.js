const request = require('request')

// TODO: call forecast-api
const forecast = require('./utils/forecast')
forecast(-75.7088, 44.1545, (error, data) => {
    if (error) {
        console.log('Error:', error)
        return
    }

    console.log('Data:', data)
})

// const geocodingUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/XXXLos%20Angeles.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

// request( {url: geocodingUrl, json:true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to service.')
//         return;
//     }

//     if (response.body.features.length === 0) {
//         console.log('Unable to find location.')
//         return
//     }

//     const place_name = response.body.features[0].place_name
//     const longitude = response.body.features[0].center[0]
//     const latitude = response.body.features[0].center[1]

//     console.log(`${place_name}: ${longitude}/${latitude}`)
// })

