const Player = require('../models/player.model');

module.exports = {

    allPlayers: (req,res) =>{
        Player.find({})
            .then(data=> res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },
    onePlayer: (req,res) =>{
        Player.findOne({ _id: req.params.id})
            .then(data=> res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },

    createPlayer: (req,res) =>{
        Player.create(req.body)
            .then(data=> res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },

    deletePlayer: (req,res) =>{
        Player.findOneAndDelete({ _id: req.params.id })
            .then(data=> res.json({ message: "success", results: data}))
            .catch(err => res.json({ message: "error", results: err}))
    },
    
}