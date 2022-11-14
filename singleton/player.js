var Marcador = require('./marcador.js');

var marcador = new Marcador

class Player {

    constructor(name, points=0) {
        this.name = name;
        this.points = points;
        marcador.log(`New Gamer: ${name} has ${points} in their account.`);
    }
    addPoints (addpoint) {
        //if (isNaN(addpoint)) {return console.log("Los puntos deben ser numeros")}
         {this.points = this.points + addpoint}
    } 
    subPoints (subpoints) {
        this.points = this.points - subpoints
    } 
}

module.exports = Player;