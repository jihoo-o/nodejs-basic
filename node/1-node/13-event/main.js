const logger = require('./logger.js');

// 💩 Don't create a new EventEmitter object for listening event 'log' -> nothing happen
/* 
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('log', (args) => {
    console.log(args);
});
*/

// ✨ import class
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log(event);
});

emitter.log(() => {
    console.log('.....doing something');
});
