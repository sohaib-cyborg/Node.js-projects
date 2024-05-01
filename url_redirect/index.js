const { default: mongoose } = require("mongoose")
const express = require('express');
const router = require("./route/url");
const {connectMongoose}     = require('./connection')
const port = 8001;
const app = express();
const URL = require('./model/url');

app.listen(port, ()=>console.log(`server started at port: ${port}`));
app.use(express.json());
app.use("/url",router);
require('dotenv').config();
const uri = process.env.MONGODB_URI;

connectMongoose(uri).then(console.log("SuccessFully Connected!"));

app.get('/:ShortID',async(req,res)=>{
    const ShortID = req.params.ShortID;
    const entry = await URL.findOneAndUpdate({
      ShortID
    },{
        $push:
        {
        visited: {
        timestamp: Date.now(),}

    },})

    console.log(entry.redirect_url);
    return res.redirect(entry.redirect_url);
})