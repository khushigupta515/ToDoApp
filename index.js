const express = require('express');
const app= express();
const PORT = 8000;
const ejs = require('ejs');
const path = require('path');
const router = require('./routes/index')

app.use(express.static(path.join(__dirname, 'assests')));
app.set("views","./views");
app.set("view engine","ejs");
app.use('/',router);


//set up server
app.listen(PORT,function(err)
{
    if(err){console.log('Error occured in setting up the server',err);return;}
    console.log('Server up and running on port',PORT);
});
