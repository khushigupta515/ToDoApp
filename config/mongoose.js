//create database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist',{useNewUrlParser:true,useUnifiedTopology:true});

//create connection
const db = mongoose.connection;
db.once('open',function(){
    console.log('Connection established succesfully');
});