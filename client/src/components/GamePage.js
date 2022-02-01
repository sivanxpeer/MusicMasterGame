import React, { useState, useEffect } from 'react';
import Song from './Song';
import songsApi from '../api/api';

const GamePage = () => {
    const [currentSong, setCurrentSong] = useState({});
    const [songs, setSongs] = useState({});

    const getSongs = async () => {
        try {
            const { data } = await songsApi.get("/songs");
            setSongs(data);
            setCurrentSong(data[0].songUrl);
        } catch (e) {
            console.log(e);
        }
    };

    const nextSong = () => {
        let index = songs.indexOf(currentSong);
        // if (index >= songs.length - 1) {
        //   setIsGameOver(true);
        //   console.log("game over");
        //   return;
        // }
        setCurrentSong(songs[++index]);
      };

    useEffect(() => {
        getSongs();
    }, []);


    return <div>
        {currentSong && (nextSong) &&(
            <Song
                songUrl={currentSong}>
            </Song>
        )}
    </div>;
};

export default GamePage;
