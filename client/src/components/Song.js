import React,{useState} from 'react';

const Song = ({ songUrl,songs,nextSong,index,setIndex }) => {
const [isPlaying,setisPlaying]=useState(true);


    const handleClick=()=>{ 
        setisPlaying(!isPlaying);
        if(isPlaying){
            console.log("data:",songs)
            // songUrl.play(songUrl.src)
            songUrl.play(songs[index].songUrl.src)
        }
        else{
            songUrl.pause(songUrl.src);
        }
    }

    // const handleNext=()=>{

    // }
    return <div>
        <div song={songUrl} className="btns-container">
            <button onClick={handleClick} className="btn">Play / Pause</button>
            <button onClick={nextSong} className="btn">Next Song</button>
        </div>
    </div>;
};

export default Song;
