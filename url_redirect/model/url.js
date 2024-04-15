const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    
    ShortID      :{
        type     : String,
        required : true,
        unique   : true,
    },
    redirect_url :{
        type     : String,
        required : true, 
    },
    visited : [{timestamp: {type:Number}}],


},{timestamps:true});

const url = mongoose.model('url',urlSchema);

module.exports = url;