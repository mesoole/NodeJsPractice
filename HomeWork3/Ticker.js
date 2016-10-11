'use strict'
const EventEmitter = require('events');

class Ticker extends EventEmitter {
    constructor(){
        super();
        setInterval(()=>{
            console.log(this.listenerCount("tick"));
        }, 1000);
    }
    addEvent() {
        this.on("tick", function () {
            console.log("TICK");
        });
    }
}
module.exports = Ticker;

// myEmitter.on('event', () => {
//   console.log('an event occurred!');
// });
// myEmitter.emit('event');
