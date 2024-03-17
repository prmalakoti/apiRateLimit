const express = require("express");
const rateLimit = require("express-rate-limit");

const app = express();

const limiter = rateLimit({
    max: 5,
    windowMs: 1 * 60 * 1000, // 1 minute start time consifder first api throshold crossed
    message: "Too many request from this IP",
    Headers: true
});

app.use(limiter); // It will apply the aoi rate limit whole server 

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

const port = 8000;
app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});
