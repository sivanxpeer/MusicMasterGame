import React, { useState, useEffect } from 'react';
import Song from './Song';
import songsApi from '../api/api';

const GamePage = () => {
    const [currentSongUrl, setCurrentSongUrl] = useState({});
    const [songs, setSongs] = useState({});
    const [index, setIndex] = useState(0);


    const getSongs = async () => {
        try {
            const { data } = await songsApi.get("/songs");
            setSongs(data);
            setCurrentSongUrl(data[0].songUrl);
            console.log(currentSongUrl)
            setIndex(index+1);
        } catch (e) {
            console.log(e);
        }
    };
    
    const getSongsByCategory=()=>{
        
    }

    const getRandom20=()=>{
        
    }

    // const mappedSongs = async () => {}

    const nextSong = () => {
        console.log(index)
        if (!songs[index]) {
            return (<div>
                game over
            </div>)
        }
        setIndex(index+1);
        setCurrentSongUrl(songs[index].songUrl)
        console.log(currentSongUrl,songs[index].songUrl)
        // return new Audio(currentSongUrl);
    };
    
    let song = new Audio(currentSongUrl);

    useEffect(() => {
        getSongs();
    }, []);


    return <div>
        {songs &&
            (<Song
                songs={songs}
                nextSong={nextSong}
                index={index}
                setIndex={setIndex}
                songUrl={song}>
                {song}
            </Song>)}
            {/* <div> */}
                {/* <button onClick={()=>nextSong()}>next song</button> */}
            {/* </div> */}
    </div>;
};

export default GamePage;
