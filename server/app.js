require('dotenv').config();
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/', require('./routes/tweets'));

http.listen(process.env.PORT, function() {
  console.log(`app is running on ${process.env.PORT}`);
});



  

