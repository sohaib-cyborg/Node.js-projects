const express = require('express');
const {handleUrl} = require("../controller/url");
const router = express.Router();

router.post('/',handleUrl);