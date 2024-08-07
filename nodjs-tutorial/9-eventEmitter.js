const EventEmitter = require('events');

const customEvent = new EventEmitter();

customEvent.on('console', () => {
  console.log("I'm consoling");
})

customEvent.on('console', () => {
  console.log("I'm consoling");
})

customEvent.on('console', () => {
  console.log("I'm consoling");
})

customEvent.emit('console');
