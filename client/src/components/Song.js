import React from 'react';

const Song = ({ songUrl }) => {
    const handleClick=()=>{ 
        const s = new Audio(songUrl.src);
        console.log("song url: ",songUrl.src);
        // console.log("s: ",s);
        s.play(songUrl.src)
    }

    return <div>
        <div song={songUrl} className="songContainer">
            <button onClick={handleClick}>get Songs</button>
        </div>
    </div>;
};

export default Song;
