import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Song from './Song';
import songsApi from '../api/api';
import Category from './Pages/Category';
// import Category from './Pages/Category';
import CountDown from '../assets/Audio/5sec.mp3'
import Answers from './answers/Answers';


//TODO: -- USERS AUTH 
// -- make sure im not repeating songs on the same round
// -- Categories
// -- timer 
// -- fail a question if timer ends with no response
// -- music for countdown, correct answer, wrong answer
// -- count points and save to users , calc time in points for
// -- leaders page 
// -- set number of questions to a round , update countQuestions
// -- reorganize my files
// -- relocate time and score 


const GamePage = () => {
    const [currentSongUrl, setCurrentSongUrl] = useState([]);
    const [songs, setSongs] = useState([]);
    const [index, setIndex] = useState(0);
    const [player, setPlayer] = useState(new Audio(CountDown));
    const [answers, setAnswers] = useState([]);
    const [kanyeSongs, setKanyeSongs] = useState([])
    const [timer, setTimer] = useState(10);
    const [score, setScore] = useState(0);
    const [countQuestions, setCountQuestions] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    // let song = new Audio(currentSongUrl);
    const history = useHistory();
    const getSongs = async () => {
        try {
            //  player.play();
            await play();
            const { data } = await songsApi.get("/songs");
            setSongs(await data);
            setCurrentSongUrl(data[0].songUrl); //get a random song
            // player.pause();
            console.log(currentSongUrl);
            setPlayer(currentSongUrl);
            setIndex(index + 1);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        wait();
        getSongs();
        startGame();

        pause();
    }, [player, score]);

    const getSongsByCategory = () => {
        const songsByCat = songs.filter((song) => {
            if (song.category === "Kanye") {
                setKanyeSongs(...kanyeSongs, song);
            }
            console.log(kanyeSongs)
            return songsByCat;
        })
    }


    const getRandom20 = () => {

    }

    const nextSong = async () => {
        // pause();
        console.log(index)
        if (countQuestions === 10) {
            return (<div>
                game over
            </div>)
        }
        // pause();
        setIndex(index + 1);
        setCurrentSongUrl(songs[index].songUrl)
        play();
        // player.src = currentSongUrl;
        setPlayer(songs[index + 1].songUrl);
        console.log("player.src", player.src)
        // player.play(currentSongUrl);
        console.log(currentSongUrl, songs[index].songUrl)
        // return new Audio(currentSongUrl);
    };

    const handleAnswers = (e) => {
        // pause();
        // console.log("e.target and songTitle", e.target.outerText, songs[index].songTitle);
        if (songs[index].songTitle.toLowerCase() === e.target.innerText.toLowerCase()) {
            rightAnswer();
        }
        else {
            wrongAnswer();
        }
    }

    const rightAnswer = () => {
        pause();
        setScore(score + 5);
        console.log("correct")
        // nextSong();
        setCountQuestions(countQuestions + 1);
        return window.location.reload();
    }

    const wrongAnswer = () => {
        pause();
        console.log("wrong")
        // nextSong();
        setCountQuestions(countQuestions + 1);
        return window.location.reload();
    }

    const getRandomAnswers = async () => {
        if (songs.length) {
            // console.log(songs)
            let ans = [];
            while (ans.length < 3) {
                const randIndex = Math.floor(Math.random() * songs.length);
                ans.push(songs[randIndex].songTitle);
                setAnswers(...ans);
            }
            //remove chosen idexes
            console.log(ans);
            return ans;
        }
        return;
    }

    const shuffle = (arr) => {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    const play = async () => {
        if (!isPlaying) {
            // console.log("play:", player)
            const play = new Audio(player.src);
            await play.play()
            setIsPlaying(true);
        }
        else {
            setIsPlaying(false);
            pause();
        }
    }

    const pause = () => {
        if (isPlaying) {
            console.log("paused", currentSongUrl);
            setIsPlaying(false);
            return () => player.pause();
        }
        else {
            setIsPlaying(true);
            play();
        }
    }

    const wait = () => {
        setTimeout(() => { console.log("timeout") }, 5000)
    }

    const startGame = async () => {
        console.log("history", history);
        play();
        wait();
        const randSongIndex = Math.floor(Math.random() * songs.length);
        setIndex(randSongIndex);
        // console.log(index,songs[index].songTitle);

        try {
            const randSong = songs[randSongIndex];
            // console.log(songs.splice(randSongIndex, 1));
            if (randSong) {
                setCurrentSongUrl(randSong.songUrl);
                let randAnswers = await getRandomAnswers();
                console.log(index, randSong.songTitle)

                randAnswers.push(String(randSong.songTitle));
                console.log(randAnswers);
                shuffle(randAnswers);
                setAnswers(randAnswers);
                let newPlayer = player;
                // player.volume = 0.35;
                { newPlayer.src = randSong.songUrl }
                setPlayer(newPlayer);
                // player.play(currentSongUrl);
                await play();
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return <div>
        <div className="clock-score-container">
            <div className="score">
                {score}
            </div>
            <div className="clk">{timer}</div>
        </div>
        {answers && <Answers
            // score={score}
            answers={answers}
            handleAnswers={handleAnswers}
        />}
        {/* {songs&& startGame} */}
    </div>
};

export default GamePage;
