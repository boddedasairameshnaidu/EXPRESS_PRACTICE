// POST request basically used with forms like signup,login... and that 
// request goes to our server via a POST request so that data is sent
// along with that request and perform required actions

// POSTMAN -- Postman is a popular API (Application Programming Interface) development tool
// that allows developers to build, test, and manage APIs

import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send("HELLO");
});

app.post("/register",(req,res)=>{
    res.sendStatus(201);
});

app.put("/user/profile",(req,res)=>{
    res.sendStatus(200);
});

app.patch("/user/profile",(req,res)=>{
    res.sendStatus(200);
});

app.delete("/user/profile",(req,res)=>{
    res.sendStatus(200);
});
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
