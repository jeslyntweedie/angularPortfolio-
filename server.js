var config = require('./config.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.listen(config.port, function()
	   {console.log("YAY 3000")
    });
