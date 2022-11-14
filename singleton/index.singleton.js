var Marcador = require('./marcador.js');
var Player = require('./player.js');
var Game = require('./game.js');

var marcador = new Marcador
var walter = new Player('Walter', 200)
var martin = new Player('Martin', 400)
var luis = new Player('Luis', 330)

var bestPoint = new Game('Best Point Game', [walter,martin,luis])

bestPoint.start()
walter.addPoints (3000)
luis.subPoints (20)
bestPoint.start()
console.log(`${marcador.count} logs total`);
//marcador.logs.map(log => console.log(`   ${log.message}`));