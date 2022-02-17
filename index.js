//importing libraries/dependencies
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//creating express app instance
const app = express();

//initalizing middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));


//creating the backend express server
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {console.log(`Server has started at PORT ${PORT}`)});

app.get('/', (req, res) => {
    res.send("Hello world!");
})

