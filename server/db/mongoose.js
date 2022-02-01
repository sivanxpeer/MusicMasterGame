const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// const PASSWORD = process.env.PASSWORD;

// mongoose.connect(`mongodb+srv://psivi92:${PASSWORD}@cluster0.ltcww.mongodb.net/songsDB?retryWrites=true&w=majority`,()=>{
//     console.log("connected to db");
// })

mongoose.connect(`mongodb+srv://psivi92:G,Bsb48TKQ,DbY-@cluster0.ltcww.mongodb.net/songsDB?retryWrites=true&w=majority`,()=>{
    console.log("connected to db");
})