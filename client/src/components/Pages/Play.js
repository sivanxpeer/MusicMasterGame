import React, { useState } from 'react';
import GamePage from '../GamePage';

const Play = () => {
  // const [clicked, setClicked] = useState(false);
  // const handleStart = () => { 
  //   setClicked(!clicked)
  // }
  return <div className="start">
    {/* <button className="btn" onClick={handleStart}>start</button> */}
    {/* {clicked&& */}
    <GamePage></GamePage>
    {/* } */}
  </div>;
};

export default Play;
