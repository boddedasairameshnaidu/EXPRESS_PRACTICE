import express from 'express';
import bodyparser from 'body-parser';
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/public/secethome.html');
});

app.post('/check',(req,res)=>{
    if(req.body.password === "ILoveProgramming"){
        res.sendFile(__dirname + '/public/secret.html');
    }
    else{
        res.status(401).send('Wrong password'); 
    }
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});