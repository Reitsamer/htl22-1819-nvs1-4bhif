const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/' + latitude +',' + longitude + '?units=si&lang=de'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service.')
            return;
        }

        if (response.body.error) {
            callback('Unable to find location.')
            return;
        }

        // const body = JSON.parse(response.body)
        const body = response.body

        const temperature = body.currently.temperature;
        const precipProbability = body.currently.precipProbability;

        callback(undefined, {
            summary: body.daily.data[0].summary,
            message: `Es hat zur Zeit ${temperature} Grad. Die Regenwahrscheinlichkeit liegt bei ${precipProbability}%.`
        })
    })
}

module.exports = {
    forecast
}