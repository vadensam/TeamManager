const Controller = require('../controller/player.controller');

module.exports = function(app){
    app.get('/api/players', Controller.allPlayers)
    app.get('/api/players/:id', Controller.onePlayer)
    app.post('/api/players', Controller.createPlayer)
    app.delete('/api/players/:id', Controller.deletePlayer)
}