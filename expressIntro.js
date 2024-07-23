// A framework on top of node that's going to help us create 
// our backends with ease
// Node --- runtime environment , not a framework
// Express --- JavaScript framework that allow us to create backends
//             for our websites with the powers of Node and Express
//             combined is how most professional developers built their website backends

// Creating our first server with express

// STEPS ------------
// Initialise NPM - npm init -y
// Install the Express package -- npm i express
// Write server application in expressIntro.js
// Start server -- node filename.js

import express from "express";
const app = express();
const port = 3000;

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// In the browser, opem https://localhost:3000
// You should see a blank page










