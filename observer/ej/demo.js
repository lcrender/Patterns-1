var EventEmitter = require('events');
const emitter = new EventEmitter();

let msg1 = "hola"
let msg2 ="chau"
const mes = "mensaje1"
const callback = (mes) => {
    console.log(`${mes} someone connected!`);
  };
  const callback2 = (stream) => {
    console.log('someone disconnected!');
  };

  emitter.on('connection');
  emitter.on('connection');
  emitter.on('connection');
  emitter.off('connection');
emitter.emit("connection")
emitter.off('connection');
emitter.off('connection');
  


  emitter.emit("connection", mes)