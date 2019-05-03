const request = require('request')

const geocode = (location, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
            encodeURIComponent(location) +
            '.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to service.')
            return;
        }

        if (body.features.length === 0) {
            callback('Unable to find location.')
            return
        }

        const place_name = body.features[0].place_name
        const longitude = body.features[0].center[0]
        const latitude = body.features[0].center[1]

        callback(undefined, {
            longitude,
            latitude,
            place_name
        })
    })
}

module.exports = {
    geocode
}