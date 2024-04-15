const ShortID = require('shortid');
const mongoose = require('mongoose');
const url = require('../model/url');
const shortid = require('shortid');

async function handleUrl(req,res){
 shortid = shortID();
 const body = req.body;
 if(!body.url) return res.status(400).json({error: 'Url is required!'});
 await url.create({
  shortID : shortid,
  redirecturl : body.url,
  visited :[],
 });
 return res.json({id : shortid});
}

module.exports= {
    handleUrl,
}