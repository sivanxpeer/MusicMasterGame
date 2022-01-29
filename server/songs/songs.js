const { getData, getPreview, getTracks } = require('spotify-url-info')


// getPreview('https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas')
//     .then(data => console.log(data))
// getPreview('https://open.spotify.com/track/3elOzp9X3B8vMGhJBWzbIF?si=be677e1e5c404202')
//     .then(data => console.log(data))

// getData('https://open.spotify.com/album/0MT5DWfACnCWbIqoClhI7k')
//     .then(data => console.log(data))
// getTracks('https://open.spotify.com/playlist/3Q4cPwMHY95ZHXtmcU2xvH')
//   .then(data => console.log(data))
getTracks('https://open.spotify.com/playlist/37i9dQZF1DXbSbnqxMTGx9')
  .then(data => console.log(data))