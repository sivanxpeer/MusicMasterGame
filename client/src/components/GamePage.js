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
            console.log(currentSong)
        } catch (e) {
            console.log(e);
        }
    };

    // const mappedSongs = async () => {}

    // const nextSong = () => {};

    let song = new Audio(currentSong);

    useEffect(() => {
        getSongs();
    }, []);


    return <div
        data={songs}>
        {songs &&
            (<Song
                songUrl={song}>
                {song}
            </Song>)}
    </div>;
};

export default GamePage;
