const EventEmitter = require("events")

class Mensaje extends EventEmitter {
    newMessage(user, tema, message) {
    console.log(`/nNew Message from: ${user.name}/nTheme: ${tema.name}/nMessage: ${message}`)
    user.messages.push(message);
    this.emit(tema, message);
}
}

module.exports = Mensaje;