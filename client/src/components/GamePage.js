import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import Song from './Song';
import songsApi from '../api/api';
// import Category from './Pages/Category';
// import Category from './Pages/Category';
import Answers from './answers/Answers';

import CountDown from '../assets/Audio/5sec.mp3'
import Correct from '../assets/Audio/correct.mp3'
import Buzzer from '../assets/Audio/buzzer.mp3'

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
// -- after round end redirect to leaders/ play again and dont display a new q



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
            player.play(player.src);
            const { data } = await songsApi.get("/songs");
            setSongs(await data);
            setCurrentSongUrl(player.src); //get a random song
            console.log("HERE", currentSongUrl, player);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        // wait();
        getSongs();
        if (countQuestions !== 5) {
            // pause();
            // player.play(currentSongUrl);
            startGame();
        }
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
        // setIndex(index);
        setCurrentSongUrl(songs[index].songUrl)
        currentSongUrl.play();
        // play();
        // player.src = currentSongUrl;
        setPlayer(songs[index + 1].songUrl);
        console.log("player.src", player.src)
        // player.play(currentSongUrl);
        console.log(currentSongUrl, songs[index].songUrl)
        // return new Audio(currentSongUrl);
    };

    const handleAnswers = (e) => {
        // console.log("e.target and songTitle", e.target.outerText, songs[index].songTitle);
        if (songs[index].songTitle.toLowerCase() === e.target.innerText.toLowerCase()) {
            rightAnswer();
        }
        else {
            wrongAnswer();
        }
    }

    const rightAnswer = () => {
        console.log("correct")
        const newPlayer = player;
		newPlayer.src = Correct;
		setPlayer(newPlayer);
		player.play();
        // setPlayer(Correct).play();
        // player.play(player.src);
        console.log("PLAYER", player);
        setTimeout(() => {
            setScore(score + 5);
            setCountQuestions(countQuestions + 1);
            if (countQuestions < 8) {
                startGame();
            }
            else window.location.replace("/");
        }, 2500)
    }

    const wrongAnswer = () => {
        console.log("wrong")
        const newPlayer = player;
		newPlayer.src = Buzzer;
		setPlayer(newPlayer);
		player.play();
        setTimeout(() => {
            setCountQuestions(countQuestions + 1);
            startGame();
        }, 2500)
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

    const wait = () => {
        setTimeout(() => { console.log("timeout") }, 5500)
    }

    const startGame = async () => {
        // wait();
        console.log(currentSongUrl, player)
        console.log("history", history);
        // while(timer>0){
        // play();
        // }
        const randSongIndex = Math.floor(Math.random() * songs.length);
        setIndex(randSongIndex);
        // console.log(index,songs[index].songTitle);
        try {
            const randSong = songs[randSongIndex];
            // console.log(songs.splice(randSongIndex, 1));
            if (randSong) {
                setCurrentSongUrl(randSong.songUrl);
                // player.play();//
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
                // player.play();
                // await play();
                player.play(currentSongUrl)
                // currentSongUrl.play();
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
    </div>
};

export default GamePage;
