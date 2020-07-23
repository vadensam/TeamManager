const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field is required"],
        minlength: [3, "Name must be at least 2 characters long."]
    },
    position: {
        type: String,
        required: false
    }
}, {timestamps: true})

const Player = new mongoose.model("Player", PlayerSchema);

module.exports = Player;