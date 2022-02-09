const express = require('express');
const path = require("path");
const cors = require("cors");
// const cookieParser = require("cookie-parser");
const songRouter = require("./routers/songRouter");
require("./db/mongoose");
require("./models/Song");
const userRouter = require("./routers/userRouter");
const authRouter = require("./routers/authRouter");
require('dotenv').config();


const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, "build");
app.use(express.static(publicPath));


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", songRouter);

app.use("/api/users",userRouter);
app.use("/api/auth",authRouter);


app.get("/", (req, res) => {console.log("getiing") })


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(publicPath, "index.html"));
});


app.listen(port, () => { console.log('listening on port', port) })