const express = require('express');
const path = require("path");
const cors = require("cors");
const songRouter = require("./routers/songRouter");
require("./db/mongoose");
require("./models/Song");


const port = process.env.PORT || 5000;
const publicPath = path.join(__dirname, "client/build");


const app = express();

app.use(express.json());
app.use(cors());

app.use("/", songRouter);
app.use(express.static(publicPath));

// app.get("/", (req, res) => { res.send("hello") })


app.get("/*", (req, res) => {
    res.sendFile(path.resolve(publicPath, "index.html"));
});


app.listen(port, () => { console.log('listening on port', port) })