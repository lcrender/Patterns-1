const EventEmitter = require("events")
const emitter = new EventEmitter();

emitter.on("messageLogged", (arg) => {
    console.log("listener called", arg);
});

emitter.emit("messageLogged", {});

