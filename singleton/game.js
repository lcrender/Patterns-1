var Marcador = require('./Marcador');

var marcador = new Marcador

class Game {

    constructor(name, players=[]) {
        this.name = name;
        this.players = players;
        marcador.log(`New Game: ${name} has ${players.length} players online.`);

        
        

    }

    start() {
        marcador.log('Starting Game...');

        console.table(this.players.sort(function (a, b) {
            if (a.points > b.points) {
              return -1;
            }
            if (a.points < b.points) {
              return 1;
            }
            // a must be equal to b
            return 0;
          }))

        return marcador.log(`And the winner is...: ${this.players[0].name} with ${this.players[0].points} points.`)
          
    }
 
}

module.exports = Game;