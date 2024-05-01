const shortid = require('shortid');
const mongoose = require('mongoose');
const Url = require('../model/url');


async function handleUrl(req,res){
 const shortID = shortid();
 const body = req.body;
 if(!body.url) return res.status(400).json({error: 'Url is required!'});
 
 await Url.create({
  ShortID : shortID,
  redirect_url : body.url,
  visited :[],
 });
 return res.json({id : shortID});
}

async function handleGetAnalytics(req,res){
    const ShortID = req.params.ShortID;
    console.log(ShortID)
    const result = await Url.findOne({ShortID});
    console.log(result.redirect_url);
    return res.json({
        totalClicks : result.visited.length,
        analytics : result.visited,
    });

}

module.exports= {
    handleUrl,
    handleGetAnalytics,
}