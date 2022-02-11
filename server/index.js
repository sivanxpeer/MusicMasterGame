const express = require('express');
const path = require("path");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const songRouter = require("./routers/songRouter");
require("./db/mongoose");
require("./models/Song");
require("./models/User");

const {userRouter} = require("./routers/userRouter");
const  {authRouter}  = require("./routers/authRouter");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());


const port = process.env.PORT || 5000;


const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));




app.use("/", songRouter);
app.use("/", userRouter);
app.use("/", authRouter);


// app.get("/", (req, res) => {console.log("getiing") })


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(publicPath, "index.html"));
});


app.listen(port, () => { console.log('listening on port', port) })