const express = require("express");
const songRouter = new express.Router();
const {getSongs,addSong, addAllSongs,getSong} = require("../controllers/songController");
// const song = require("../controllers/songController");



songRouter.get("/songs", getSongs);
songRouter.get("/songs/song/:id", getSong);
songRouter.post("/songs", addSong);
songRouter.patch("/songs", addAllSongs);
// router.get("/", get20CardsSet);

module.exports = songRouter;
