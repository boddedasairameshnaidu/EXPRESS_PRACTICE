// Body-Parser --- used for pre-processing
// Morgan --- used for logging requests
// login.html -- we consider username and password then after submitting
// we need to display "Hello"+ {username}

import express from 'express';
import bodyparser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// import morgan from "morgan";

const app = express();
const port = 3000;

// custom middleware -- duplicate of morgan 
// function logger(req ,res, next){
//     console.log(req.method, req.url);
//     next();
// }
// app.use(morgan('tiny'));
// app.use(logger);
app.use(bodyparser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/login.html');
});

app.post('/loginaction',(req,res)=>{
    res.send("Hello"+ req.body.username); // req.body -- body-parser
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});