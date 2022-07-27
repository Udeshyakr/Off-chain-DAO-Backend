
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();
const dotenv = require('dotenv');
const connectDB = require('./database/connect');
const mongoose = require("mongoose");
const cors = require("cors");
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());// middleware
app.use(express.urlencoded({ extended: true}));
const proposalRoutes = require('./routes/proposal');
app.use(cors());

app.use(express.static(__dirname + "public"));
app.use(express.static(path.resolve(__dirname, "../public/index.html")))
app.use('/Api/v1', proposalRoutes);

app.use((req, res, next) =>{
    console.log('in a middleware');
})



const PORT = process.env.PORT || 4000;
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server is listening to port ${PORT}...`))
    } 
    catch (error) {
        console.log(error)
    }
}

start()



