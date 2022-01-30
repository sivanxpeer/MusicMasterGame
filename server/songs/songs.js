const { getData, getPreview, getTracks } = require('spotify-url-info')


// getPreview('https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas')
//     .then(data => console.log(data))
// getPreview('https://open.spotify.com/track/3elOzp9X3B8vMGhJBWzbIF?si=be677e1e5c404202')
//     .then(data => console.log(data))

const getIsraeliSongsData = async()=>{
    const israelisongsData= await getTracks('https://open.spotify.com/playlist/37i9dQZF1DWSYF6geMtQMW');
    const israelifilteredSongs = israelisongsData.filter((song)=>{return song.preview_url!==null});
    israelifilteredSongs.forEach((song)=>{
        // let name =song.name.reverse().toString();
        console.log(song.name,song.preview_url);
    })
}
const get90sRockSongsData = async()=>{
    const rock90s= await getTracks('https://open.spotify.com/playlist/37i9dQZF1DX1rVvRgjX59F');
    const rock90sfilteredSongs = rock90s.filter((song)=>{return song.preview_url!==null});
    rock90sfilteredSongs.forEach((song)=>{
        console.log(song.name,song.preview_url);
    })
}

// getIsraeliSongsData();
get90sRockSongsData();
