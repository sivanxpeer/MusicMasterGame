import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import songsApi from '../api/api';
import Answers from './answers/Answers';

import CountDown from '../assets/Audio/5sec.mp3'
import Correct from '../assets/Audio/correct.mp3'
import Buzzer from '../assets/Audio/buzzer.mp3'
import Leaders from './Pages/Leaders';

//TODO: 
// -- count points and save to users
// -- leaders page 
// -- Categories
// -- when exiting play page - stop music 
//--  and dont display a new q    
// -- make sure im not repeating songs on the same round
// -- reorganize my files


// -- USERS AUTH                                                     V
// -- timer                                                          V
// -- fail a question if timer ends with no response                 V
// -- music for countdown, correct answer, wrong answer              V
// -- calc time in points                                            V
// -- set number of questions to a round , update countQuestions     V
// -- relocate time and score                                        V
// -- after round end redirect to leaders                            V



const GamePage = () => {
    const [currentSongUrl, setCurrentSongUrl] = useState([]);
    const [songs, setSongs] = useState([]);
    const [index, setIndex] = useState(0);
    const [player, setPlayer] = useState(new Audio(CountDown));
    const [answers, setAnswers] = useState([]);
    const [kanyeSongs, setKanyeSongs] = useState([])
    const [timer, setTimer] = useState(5);
    const [score, setScore] = useState(0);
    const [countQuestions, setCountQuestions] = useState(0);

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
        getSongs();
        wait();
        startGame();
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

    useEffect(() => {
        if (timer === 0) {
            console.log("TIME LEFT IS 0");
            wrongAnswer();
        }
        // exit early when we reach 0
        if (!timer) return;
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimer(timer - 1);
        }, 1000);
        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId);
        // add timer as a dependency to re-rerun the effect
        // when we update it
    }, [timer]);

    const nextSong = async () => {
        // pause();
        console.log(index)
        if (countQuestions === 10) {
            return (<div>
                game over
            </div>)
        }
        setIndex(index + 1);
        setCurrentSongUrl(songs[index].songUrl)
        currentSongUrl.play();
        setPlayer(songs[index + 1].songUrl);
        console.log("player.src", player.src)
        console.log(currentSongUrl, songs[index].songUrl)
    };

    const handleAnswers = (e) => {
        if (songs[index].songTitle.toLowerCase() === e.target.innerText.toLowerCase()) {
            rightAnswer();
        }
        else if (timer === 0) {
            wrongAnswer();
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
        console.log("PLAYER", player);
        setTimeout(() => {
            setScore(score + 5 + timer);
            setCountQuestions(countQuestions + 1);
            if (countQuestions < 8) {
                startGame();
            }
            else window.location.replace("/leaders");
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

    const startGame = async () => {
        // setTimeout(() =>{
        // },5000)
        console.log(currentSongUrl, player)
        console.log("history", history);
        const randSongIndex = Math.floor(Math.random() * songs.length);
        setIndex(randSongIndex);
        try {
            const randSong = songs[randSongIndex];
            if (randSong) {

                setCurrentSongUrl(randSong.songUrl);
                let randAnswers = await getRandomAnswers();
                console.log(index, randSong.songTitle)
                randAnswers.push(String(randSong.songTitle));
                console.log(randAnswers);
                shuffle(randAnswers);
                setAnswers(randAnswers);
                setTimer(15);

                let newPlayer = player;
                player.volume = 0.7;
                newPlayer.src = randSong.songUrl
                setPlayer(newPlayer);
                player.play(currentSongUrl)
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    const wait = () => {
        setTimeout(() => {

        }, 2000)
    }
    return <div>
        <div className="clock-score-container">
            <div className="clock">
                <div className="clk-number" >{timer}</div>
            </div>
            <div className="score ">
                <div className="score-heading disp">SCORE:<br />
                    <div className="score-number disp">{score}</div>
                </div>
            </div>

        </div>

        {answers && <Answers
            // score={score}

            answers={answers}
            handleAnswers={handleAnswers}
        />}
        <Leaders score={score}></Leaders>
    </div>
};

export default GamePage;
