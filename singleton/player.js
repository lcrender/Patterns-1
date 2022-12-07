var Marcador = require('./marcador.js');
var marcador = new Marcador().getInstance();

class Player {
    constructor(name, points=0) {
        this.name = name;
        this.points = points;
        console.log(`New Player: ${name} has ${points} in their account.`);
    }
    addPoints (addpoint) {
        //if (isNaN(addpoint)) {return console.log("Los puntos deben ser numeros")}
         this.points = this.points + addpoint
         console.log(`We add ${addpoint} points to the user ${this.name}`)
    } 
    subPoints (subpoints) {
        this.points = this.points - subpoints
        console.log(`We substract ${subpoints} points to the user ${this.name}`)
    } 
}

module.exports = Player;