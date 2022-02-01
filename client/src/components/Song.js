import React from 'react';

const Song = ({songUrl}) => {
  return <div>
    <div song={songUrl} className="songContainer"> {songUrl}</div>
  </div>;
};

export default Song;
