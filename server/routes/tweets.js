var router = require('express').Router();
var sequelize = require('../db.js');
var Twitter = require('twitter');

var tweets = [];

// Twitter API Credentials -
var client = new Twitter({
  consumer_key: process.env.KEY,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

router.post("/", function(req,res){
 
  tweets= []

  client.get('search/tweets', {count: 100, q: '#gooddog', lang: 'en',})
.then(function (tweet) {
    var length = tweet.statuses.length

    //find all of the text from the statuses pulled and add to the array
    for (var i = 0; i < length; i++) {
        tweets.push({tweet: tweet.statuses[i].text});
    }
   res.send(tweets)
})
.catch(function (err) {
    console.log(err);
    throw error;
});
})

module.exports = router;
