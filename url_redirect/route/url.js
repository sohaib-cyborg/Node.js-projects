const express = require('express');
const {handleUrl} = require("../controller/url");
const Router = express.Router();

Router.post('/',handleUrl);

module.exports = Router;