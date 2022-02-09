// ✨ custom event

const EventEmitter = require('events');
const emitter = new EventEmitter();
const callback1 = (args) => {
    console.log('first callback - ', args);
};

emitter.on('customEvent', callback1);

emitter.on('customEvent', (args) => {
    console.log('second callback - ', args);
});

emitter.emit('customEvent', { message: 1 });
emitter.emit('customEvent', { message: 2 });

// ✨ remove listener
emitter.removeListener('customEvent', callback1);
// emitter.removeAllListeners('customEvent');

emitter.emit('customEvent', { message: 3 });
