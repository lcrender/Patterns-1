var Marcador = require('./Marcador');

var marcador = new Marcador

class Game {

    constructor(name, players=[]) {
        this.name = name;
        this.players = players;
        marcador.log(`New Game: ${name} has ${players.length} players online.`);

        
        

    }

    start() {return console.table(this.players)}
   
}

module.exports = Game;