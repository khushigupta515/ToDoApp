const mongoose = require('mongoose');
//defining schema
const schema = new mongoose.Schema(
    {
        description:{type:String, required:true},
        date:{type:String, required:true},
        category:{type:String, required:true} 
    },{timestamps:true}
);
//making a collection
const Collection = mongoose.model('collection', schema);
module.exports = Collection;

