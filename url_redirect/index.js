const { default: mongoose } = require("mongoose")
const express = require('express');

const port = 8001;
const app = express();

app.listen(port, ()=>console.log(`server started at port: ${port}`));