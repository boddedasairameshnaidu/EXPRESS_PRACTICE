// When request comes into the server and before it gets processed
// by all of the route handlers(get,post,put,...) , there is something
// in between, namely the middleware that can work with these requests
// before they get processed and reach their final destinations

// Middleware --- 
    // 1. Pre-processing
    // 2. logging information
    // 3. Authentication
    // 4. Process Errors

// Commonly used one is "body-parser"
// It is used to parse the incoming request body in the form of JSON or URL encoded data

// Static files like html should be placed in a public folder

import express from "express";
// To specify path,we use path and url 
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// Body-parser
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// Mount the middleware
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.get("/",(req,res)=>{
    // To render a file,  we use res.sendFile()
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/login',(req,res)=>{
    console.log(req.body); // { username: 'ramesh', password: '1234' }
    // console.log(req.body.username) -- ramesh
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
