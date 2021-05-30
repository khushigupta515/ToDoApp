const express = require('express');
const app= express();
const PORT = 8000;
var ejs = require('ejs');

app.use(express.static('assets'));
app.set("view","./views");
app.set("view engine","ejs");

app.get('/',function(req,res)
{
 return res.render('index');
});

//set up server
app.listen(PORT,function(err)
{
    if(err){console.log('Error occured in setting up the server',err);return;}
    console.log('Server up and running on port',PORT);
});
