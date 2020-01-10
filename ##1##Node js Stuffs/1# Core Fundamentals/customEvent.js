// Node.js allows us to create and handle custom events easily by using events module.
// Event module includes EventEmitter class which can be used to raise and handle custom events.

const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("newEvent", message => {
  console.log(message);
});

emitter.emit("newEvent", "Hello World!");
