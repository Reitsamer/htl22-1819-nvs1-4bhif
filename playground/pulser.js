const EventEmitter = require('events');

class Pulser extends EventEmitter {
    start() {
        setInterval(() => {
            this.emit('pulse', 'hallo', 'welt', 'have', 'a', 'nice', 'day')
        }, 1000)
    }
}

module.exports = Pulser