var Marcador = require('./marcador.js');
var Player = require('./player.js');
var Game = require('./game.js');
//var marcador = new Marcador().getInstance();

//creo 3 jugadores y les adjudico puntos
var walter = new Player('Walter White')
var martin = new Player('San Martin', 400)
var luis = new Player('Luis Ponzi', 330)

//creo un nuevo juego
var bestPoint = new Game('Best Point Game'/*, [walter,martin,luis]*/)
//agrego jugadores al juego
bestPoint.addPlayer(walter)
//Intento iniciar el juego con un solo jugador para que me indique el error.
bestPoint.start()
bestPoint.addPlayer(martin)
bestPoint.addPlayer(luis)

//inicio el juego
bestPoint.start()
//la revancha! en 2 segundos
setTimeout ( ()=> {
//agrego puntos a Walter
walter.addPoints (3000)
//saco puntos a Luis
luis.subPoints (20)
//comienzo un nuevo juego
bestPoint.start()

console.log(`Number of games played ${bestPoint.marcador.count}`);
}, 2000)