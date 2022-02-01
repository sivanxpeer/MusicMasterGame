const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.URI;
mongoose.connect(`${URI}`).then(()=>{console.log("connected to db")}).catch((err)=>{console.log(err)});