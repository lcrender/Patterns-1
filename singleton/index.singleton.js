var Marcador = require('./marcador.js');
var Player = require('./player.js');
var Game = require('./game.js');

var marcador = new Marcador
var walter = new Player('Walter', 200)
var martin = new Player('Martin', 400)
var luis = new Player('Luis', 330)

var bestpoint = new Game('Best Point Game', [walter,martin,luis])

bestpoint.start()
marcador.log('Starting Game...');

console.log(`${marcador.count} logs total`);
//marcador.logs.map(log => console.log(`   ${log.message}`));