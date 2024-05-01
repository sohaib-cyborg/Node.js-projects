const express = require('express');
const {handleUrl,handleGetAnalytics} = require("../controller/url");
const Router = express.Router();

Router.post('/',handleUrl);
Router.get('/analytics/:ShortID',handleGetAnalytics);

module.exports = Router;