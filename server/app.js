require('dotenv').config();
var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var sequelize = require('./db.js')

sequelize.sync();

// sequelize.sync({ force: true}) THIS WILL DROP THE TABLES


app.use(bodyParser.json());
// saying to require the addition of headers from this file to have additional information sent along 

app.use(require('./middleware/headers'))
app.use('/', require('./routes/tweets'));

// sending the string "hello world" to the api/test location for the client to pull through a header
app.use('/api/test', function(req,res){
  res.send("Hello World")
})

http.listen(process.env.PORT, function() {
  console.log(`app is running on ${process.env.PORT}`);
});



  

