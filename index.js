const express = require('express');
const app= express();
const port = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index');
const mongoose = require('mongoose');
const db = require('./config/mongoose');
const Collection = require('./models/todo');

app.use(express.static(path.join(__dirname, 'assests')));
app.set("views","./views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use('/',router);



//set up server
app.listen(PORT,function(err)
{
    if(err){console.log('Error occured in setting up the server',err);return;}
    console.log('Server up and running on port',port);
});
