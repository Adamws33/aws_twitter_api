var router = require('express').Router();
var Twitter = require('twitter');
router.use(function(req, res, next){
res.header('access-control-allow-origin', '*');
res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept');
next();
})

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

  client.get('search/tweets', {count: 100, q: '#gooddog', lang: 'en', exclude: "retweets"})
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
