const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const mongoose = require('mongoose');
const Demo = require('./database/model/demo')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods',"GET,POST,PATCH,DELETE,OPTIONS");
    next();
});
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://arafimam:01762620790-Rafeen@cluster0.ur6uoez.mongodb.net/test_v001?retryWrites=true&w=majority").then(() => {
    console.log("Database connected.")
}).catch(()=> {
    console.log("Database connection failed.")
});

const portNum = process.env.PORT || 3000;

app.post("/api/demo",function(request,response){
    console.log(request.body)
    const demo = new Demo({
        name: request.body.name,
        data: request.body.data
    });
    demo.save().then(result => {
        response.status(200).json({
            message: "Passed"
        })
    })
    
});

app.listen(portNum,function(){
    console.log("Server running on port: " + portNum);
});