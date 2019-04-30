const request = require('request')

const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/37.8267,-122.4233?units=si&lang=de'

// request( url, () => {
// })

request( { url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to service.')
        return;
    }

    if (response.body.error) {
        console.log('Unable to find location.')
        return;
    }

    // const body = JSON.parse(response.body)
    const body = response.body

    const temperature = body.currently.temperature;
    const precipProbability = body.currently.precipProbability;

    console.log(body.daily.data[0].summary)
    console.log(`Es hat zur Zeit ${temperature} Grad. Die Regenwahrscheinlichkeit liegt bei ${precipProbability}%.`)
    
}) 


// GOAL:
// 1. Print: "It's currently 52.79 degrees out. There is a 7% chance of rain."
// 2. Test your work!