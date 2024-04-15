const express = require("express");
const rateLimit = require("express-rate-limit");
const status = require("express-status-monitor");
let fs = require('fs');

const app = express();

const limiter = rateLimit({
    max: 5,
    windowMs: 1 * 60 * 1000, // 1 minute start time consider first api throshold crossed
    message: "Too many request from this IP",
    Headers: true
});

app.use(status()); // monitor the app status
app.use(limiter); // It will apply the rate limit whole server 

// GET route to handle the request coming from user
app.get("/", (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello from the GeeksforGeeks express server"
    });
});

// Specific api rate limit
app.get("/route", limiter, (req, res) => {
    res.status(200).json({
        status: "success",
        message: "Hello from the Developer express server with specific api"
    });
});

/* stream the file */
app.get("/stream", (req, res) => {
    let stream = fs.createReadStream('data.json');
    stream.on("data", (chunk) => res.write(chunk));
    stream.on("end", () => res.end());
});

/* it will consume the more memory */
app.get("/non-stream", (req, res) => {
    fs.readFile('data.json', 'utf-8', (err, data) => {
        res.send(data)
    });
});

const port = 8000;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
