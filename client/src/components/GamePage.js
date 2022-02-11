import React, { useState, useEffect } from 'react';
import Song from './Song';
import songsApi from '../api/api';
import Category from './Pages/Category';
// import Category from './Pages/Category';
import CountDown from '../assets/Audio/5sec.mp3'
import Answers from './answers/Answers';

const GamePage = () => {
    const [currentSongUrl, setCurrentSongUrl] = useState({});
    const [songs, setSongs] = useState({});
    const [index, setIndex] = useState(0);
    const [player, setPlayer] = useState(new Audio(CountDown));
    const [answers, setAnswers] = useState([]);
    // const [countDown,setCountDown] = useState(new Audio(CountDown));
    // const categories =["Kanye", "90's Rock Anthems", "Israli Hits"];
    const [kanyeSongs, setKanyeSongs] = useState([])
    let song = new Audio(currentSongUrl);

    const getSongs = async () => {
        // player.play();

        try {
            const { data } = await songsApi.get("/songs");
            setSongs(data);
            setCurrentSongUrl(data[0].songUrl);
            console.log(currentSongUrl);
            setPlayer(currentSongUrl);
            setIndex(index + 1);
        } catch (e) {
            console.log(e);
        }
    };

    const getSongsByCategory=()=>{
        const songsByCat = [...songs].filter((song)=>{
            if(song.category==="Kanye"){
                setKanyeSongs(...kanyeSongs,song);
            }
            console.log(kanyeSongs)
            return songsByCat;
        })
    }


    const getRandom20 = () => {

    }

    const nextSong = () => {
        // player.play();
        console.log(index)
        if (!songs[index]) {
            return (<div>
                game over
            </div>)
        }
        setIndex(index + 1);
        setCurrentSongUrl(songs[index].songUrl)
        console.log(currentSongUrl, songs[index].songUrl)
        // player.pause();
        // return new Audio(currentSongUrl);
    };


    useEffect(() => {
        getSongs();
        // getSongsByCategory();
        // player.pause();
    }, []);


    const handleAnswers = (e) => {
        player.pause();
        console.log(e.target);
        if(currentSongUrl.songTitle===e.target.value){
            rightAnswer();
        }
        else{
            wrongAnswer();
        }
    }

    
    const rightAnswer = () => {}

    const wrongAnswer = () =>{}

    return <div>
        {/* {countDown&&countDown} */}
        {songs &&
            (<Song
                songs={songs}
                nextSong={nextSong}
                index={index}
                setIndex={setIndex}
                songUrl={song}>
                {song}
            </Song>)}

        {answers && <Answers
            answers={answers}
            handleAnswers={handleAnswers}
        />}

    </div>;
};

export default GamePage;
