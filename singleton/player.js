var Marcador = require('./marcador.js');

var marcador = new Marcador

class Player {

    constructor(name, points=0) {
        this.name = name;
        this.points = points;
        marcador.log(`New Gamer: ${name} has ${points} in their account.`);
    }

}

module.exports = Player;