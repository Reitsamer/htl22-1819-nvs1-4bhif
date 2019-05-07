const Pulser = require('./pulser')

const pulser = new Pulser()

pulser.on('pulse', (arg1, arg2, ...theRest) => {
    console.log(`${new Date().toISOString()}: pulse received`)
    console.log('Arg 1:', arg1)
    console.log('Arg 2:', arg2)
    console.log('The Rest:', theRest)
})

pulser.start()