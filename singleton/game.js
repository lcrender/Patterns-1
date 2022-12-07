var Marcador = require('./marcador.js');
var marcador = new Marcador().getInstance();
class Game {
    constructor(name, players=[]) {
        this.name = name;
        this.players = players;
        if (players.length >= 2) {
        console.log(`New Game: ${name} has ${players.length} players online. We are ready to play!`);
        }
        if (players.length === 1) {
          console.log(`New Game: ${name} has ${players.length} player online. Add at less one player more to play.`);
          }
        else { console.log(`New Game: ${name} has ${players.length} players. Add at less two players to play.`);}
    }
    addPlayer(name) {
      this.players.push(name)
        console.log(`One new player was added to ${this.name}.`)
        if (this.players.length >= 2) {
          console.log(`${this.name} has ${this.players.length} players online. We are ready to play!`);
        }
        if (this.players.length === 1) {
          console.log(`${this.name} has ${this.players.length} player online. Add at less one player more to play.`);
        }
    }
    start() {
      if (this.players.length < 2) {
        console.log(`${this.name} has ${this.players.length} player online. We need at less two players to play, come on go find your friends! `);
      }
      else {
        console.log(`
Starting new Best Point Game...

...
...
...

Results:`);
        console.table(this.players.sort(function (a, b) {
            if (a.points > b.points) {
              return -1;
            }
            if (a.points < b.points) {
              return 1;
            }
            return 0;
          }))
        return marcador.log(`And the winner is...: ${this.players[0].name} with ${this.players[0].points} points.`) 
    }
}
}
module.exports = Game;