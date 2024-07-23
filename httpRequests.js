// HTTP --- HyperText Transfer Protocol
// Transfer Protocol -- allows computers to talk to each other across the internet
// HyperText -- allows computers to talk to each other across the internet using text
// HTTP is a request/response protocol
// HTTP is a stateless protocol
// HTTP is a connectionless protocol

// HTTP Request : GET, POST, PUT, PATCH, DELETE
// GET -- used to request resource from sever
// POST -- used to send data to the server
// PUT -- used to update resource on the server -- replace a resource
// PATCH -- used to update resource on the server -- patch up a resource
// DELETE -- used to delete resource from the server

// To run the server, we can also use nodemon index.js.
// nodemon allows autosaving of code, which helps in preventing server restarting 
// everytime changes are made in the code.
// Install -- npm install -g nodemon
// Run -- nodemon index.js

import express from "express";
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    //console.log(res)
    //console.log(req.rawHeaders)
    // res.send('Hello World!'); --- sending back a response for request
    // We can also send fully formatted HTML as response
    res.send('<h1>Hello World!</h1>');
});
// Forward slash (/) goes to end of homepage
app.get('/about', (req,res)=>{
    res.send('<h1>About Pages</h1>'); // localhost:3000/about
});

app.get('/contact', (req,res)=>{
    res.send('<h1>Contact Page</h1>');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
