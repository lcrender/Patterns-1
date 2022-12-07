class Marcador {
    constructor() {
        this.logs = [];
    }
    get count() {return this.logs.length;}
    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({ message, timestamp });
        console.log(`
${message} - ${timestamp}
`);
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

module.exports = Singleton;