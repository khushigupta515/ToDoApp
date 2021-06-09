//create database
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todoapplicationusingmern',{useNewUrlParser:true,useUnifiedTopology:true});

//create connection
const db = mongoose.connection;
db.once('open',function(){
    console.log('Connection established succesfully');
});
