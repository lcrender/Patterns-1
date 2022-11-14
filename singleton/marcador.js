class Marcador {

    constructor() {
        this.logs = [];
    }

    getCount() {return this.logs.length;}

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`${timestamp} - ${message}`);
    }

}

class Singleton {

    constructor() {
        if (!Singleton.instance) {
            Singleton.instance = new Marcador();
        }
    }
  
    getInstance() {
        return Singleton.instance;
    }
  
  }

module.exports = Marcador;