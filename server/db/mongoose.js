const mongoose = require('mongoose');
require('dotenv').config();

// const PASSWORD = process.env.PASSWORD;
// console.log(PASSWORD);
// mongoose.connect(`mongodb+srv://psivi92:${PASSWORD}@cluster0.ltcww.mongodb.net/songsDB?retryWrites=true&w=majority`).then(()=>{console.log("connected")}).catch((err)=>{console.log(err)})

// mongoose.connect(`mongodb+srv://psivi92:G,Bsb48TKQ,DbY-@cluster0.ltcww.mongodb.net/songsDB?retryWrites=true&w=majority`,()=>{
//     console.log("connected to db");
// })


const URI = process.env.URI;
mongoose.connect(`${URI}`).then(()=>{console.log("connected to db")}).catch((err)=>{console.log(err)});