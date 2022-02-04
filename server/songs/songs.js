const { getData, getPreview, getTracks } = require('spotify-url-info')


// getPreview('https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas')
//     .then(data => console.log(data))
// getPreview('https://open.spotify.com/track/3elOzp9X3B8vMGhJBWzbIF?si=be677e1e5c404202')
//     .then(data => console.log(data))

const getIsraeliSongsData = async () => {
    const israelisongsData = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DWSYF6geMtQMW');
    const israelifilteredSongs = israelisongsData.filter((song) => { return song.preview_url !== null });
    israelifilteredSongs.forEach((song) => {
        // let name =song.name.reverse().toString();
        // console.log(JSON.jsonify(song.jsonify()));
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Israli Hits" });
    })
}
const get90sRockSongsData = async () => {
    const rock90s = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DX1rVvRgjX59F');
    const rock90sfilteredSongs = rock90s.filter((song) => { return song.preview_url !== null });
    rock90sfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "90's Rock Anthems" });
    })
}
const getFolkSongsData = async () => {
    const folk = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DWVmps5U8gHNv');
    const folkfilteredSongs = folk.filter((song) => { return song.preview_url !== null });
    folkfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Folk" });
    })
}
const getJazzSongsData = async () => {
    const jazz = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt');
    const jazzfilteredSongs = jazz.filter((song) => { return song.preview_url !== null });
    jazzfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Jazz" });
    })
}
const getPunkSongsData = async () => {
    const punk = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DX3LDIBRoaCDQ');
    const punkfilteredSongs = punk.filter((song) => { return song.preview_url !== null });
    punkfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Punk" });
    })
}
const getCountrySongsData = async () => {
    const country = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DWZBCPUIUs2iR');
    const countryfilteredSongs = country.filter((song) => { return song.preview_url !== null });
    countryfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Country" });
    })
}
const get00RnBSongsData = async () => {
    const rnb = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DWZBCPUIUs2iR');
    const rnbfilteredSongs = rnb.filter((song) => { return song.preview_url !== null });
    rnbfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "00's RnB" });
    })
}
const getKanyeSongsData = async () => {
    const kanye = await getTracks('https://open.spotify.com/playlist/0ZPj9yk9u6cH1ZS2vVg1uy');
    const kanyefilteredSongs = kanye.filter((song) => { return song.preview_url !== null });
    kanyefilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Kanye" });
    })
}
const getMetalSongsData = async () => {
    const metal = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DX2LTcinqsO68');
    const metalfilteredSongs = metal.filter((song) => { return song.preview_url !== null });
    metalfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Metal" });
    })
}

const getDisneySongsData = async () => {
    const disney = await getTracks('https://open.spotify.com/playlist/37i9dQZF1DX8C9xQcOrE6T');
    const disneyfilteredSongs = disney.filter((song) => { return song.preview_url !== null });
    disneyfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Disney" });
    })
}

const getPopSongsData = async () => {
    const pop = await getTracks('https://open.spotify.com/playlist/37i9dQZF1EQncLwOalG3K7');
    const popfilteredSongs = pop.filter((song) => { return song.preview_url !== null });
    popfilteredSongs.forEach((song) => {
        console.log({ "songTitle": song.name, "songUrl": song.preview_url, "category": "Pop" });
    })
}



// ----in db-----
// getIsraeliSongsData();
// get90sRockSongsData();
// getKanyeSongsData();

// ---not yet-----
// getDisneySongsData();
// get00RnBSongsData();
// getPopSongsData();


// getFolkSongsData();
// getJazzSongsData();
// getPunkSongsData();
// getMetalSongsData();
// getCountrySongsData();
