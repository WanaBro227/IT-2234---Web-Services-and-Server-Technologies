const express = require('express');
const req = require("express/lib/request");
const app = express();
const port = 3001;

//import modules
const student = require("./DB/ImportModule")

//Info of all student
app.get('/',(req,res)=>{
    res.send(student);
});

//Info of 3rd student
app.get('/',(req,res)=>{
    res.send(student.at(3));
});

//Find a student based on the reg number
//Run "localhost:3001\stu\2021ICT36" on Postman software to get the output
app.get('/stu/:id', (req, res) => {
    const id = req.params.id;
    const result = student.find(student => student.RegNo == id);
    if(result){
        res.send(result);
    }else {
        res.status(404).send("Student Not Found");
    }
});

//Filter student by gender
//To run nodemon " npx nodemon .\Example.js"
app.get('/stu/gender/:gen', (req, res) => {
    const gender = req.params.gen;
    const result2 = student.filter(student => student.Gender == gender);
    res.send(result2);
});



app.listen(port,()=>{
    console.log(`Server is running on:${port}`);
});

