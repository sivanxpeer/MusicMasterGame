const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
    
    title: {
        required: true,
        type: String,
        unique: true
    },
    songUrl: {
        required: true,
        type: String,
        unique: true
    },
    category: {
        required: true,
        type: String
    }
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;