module.exports.home = function(req,res)
{  //printing all the objects
    Collection.find({},function(err,data)
    {
        if(err){console.log('printing data not found');return;}
        console.log('All documents fetched');
        // console.log(data);
        return res.render('index',{documents:data});
    });
   
}
const Collection =  require('../models/todo');
module.exports.adding = function(req,res)
{   var date= req.body.date;
    //if no date mentioned then No deadline
    if(!req.body.date)date = 'NO DEADLINE';
    //adding to collection
    Collection.create({description:req.body.description,category:req.body.category,date:date},function(err){
    if(err){console.log('error occured');return;}
    console.log('Added to collection successfully');
    res.redirect('/');
 });
}
module.exports.deleting = function(req,res)
{   //no object to be deleted
    if(!req.body.Delete)
    res.redirect('/');
    var length = req.body.Delete.length;
    console.log(typeof req.body.Delete);
    // for single object to be deleted
    if(typeof req.body.Delete === 'string')
    {
        Collection.deleteOne({_id:req.body.Delete},function(err){
            if(err){console.log('error occured while deleting');return;}
            console.log('Deleted from collection successfully1');
            res.redirect('/');
             })
    }
    else{//array of objects to be deleted
    req.body.Delete.forEach(function(value){
        Collection.deleteOne({_id:value},function(err){
            if(err){console.log('error occured while deleting');return;}
            console.log('Deleted from collection successfully');
           
         });
      });
      res.redirect('/');
    }
      
}

