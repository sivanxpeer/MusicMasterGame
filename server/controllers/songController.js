const Song = require("../models/Song");

const getSongs = async (req, res) => {
    try {
        const songs = await Song.find()
        res.status(200).send(songs);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
};
const getSong = async (req, res) => {
    console.log(req.params)
    try {
        const song = await Song.findOne(req.params)
        res.status(200).send(song);
        console.log(req.body)
    }
    catch (err) {
        res.status(400).send(err.message);
    }
};

const addAllSongs = async (req, res) => {
    const songsArr = req.body;
    // console.log("songsArr", req.body);
    try {
        Song.insertMany([...songsArr]);
        await songsArr.save();
        res.status(201).send("inserted");
    } catch (error) {
        res.status(400).send({ message: error });
    }
};

const addSong = async (req, res) => {
    const { title, songUrl, category } = req.body;
    const song = new Song({ title, songUrl, category });
    try {
        console.log(song)
        res.status(200).send(song);
        await song.save();
    }
    catch (err) {
        res.status(400).send(err.message);
    }

};

module.exports = {
    addSong,
    getSongs,
    addAllSongs,
    getSong,
};


