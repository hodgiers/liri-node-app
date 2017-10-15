//Liri takes the following arguments
// * my-tweets
// * spotify-this-song
// * movie-this
// * do-what-it-says

//var dataKeys = require("keys.js");

var twitter = require('twitter');
var twitterKeys = require('./keys.js');
//var spotify = require('spotify');
//var request = require('request');
var inquirer = require("inquirer");
var choiceArray = ["Display Tweets", 'Display Spotify', 'Display Movie'];
var output = [];
//var twitterHandleQuery =
//var queryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + twitterHandleQuery + "&count=2&include_rts=false"

//Take users input

var questions = [
  {
      type: 'list',
      name: 'userSelection',
      message: "Show Tweets: Will list last 20 tweets of the specified user." + "\r\n" +
        "Spotify Song Info: Will list information about the specified song." + "\r\n" +
        "Movie Info: Will list information about the specified movie." + "\r\n" +
        "Be sure to put the movie or song name in quotation marks if it's more than one word.",
      choices: ['Display Tweets', 'Display Spotify', 'Display Movie'],
    }
  ];

//Outputs users selection to global variable 'output'
//Compares selection to array and runs respective function
    function ask() {
      inquirer.prompt(questions).then(function(answers) {
        output.push(answers.userSelection);
        if (answers.userSelection == choiceArray[0]) {
          console.log("Run Display Twitter");
          twitterCall();
        } else if (answers.userSelection == choiceArray[1]) {
          console.log("Run Display Spotify");
        } else if (answers.userSelection == choiceArray[2]) {
          console.log("Run Display Movies");
        } else {
          console.log("Please make a selection by using the arrow keys");
        }
      })

    };

  ask();

//FUNCTIONS

//Twitter function takes last 20 tweets and displays in shell window

function twitterCall() {

var twitterQuestion = [
  {
    type: 'input',
    name: 'twitterHandleInput',
    message: "input the Twitter Handle of the user's tweets to display"
  }
]

function displayTweets() {
  inquirer.prompt(twitterQuestion).then(function(answers) {
    var client = new twitter({
        consumer_key: twitterKeys.consumer_key,
        consumer_secret: twitterKeys.consumer_secret,
        access_token_key: twitterKeys.access_token_key,
        access_token_secret: twitterKeys.access_token_secret,
      })
    var twitterHandle = answers.twitterHandleInput;
    params = {screen_name: twitterHandle};
    client.get('statuses/user_timeline/', params, function(error, data, response) {
      if (!error) {
        for(var i = 0; i < data.length; i++) {
          var twitterResults =
					"@" + data[i].user.screen_name + ": " +
					data[i].text + "\r\n" +
					data[i].created_at + "\r\n" +
					"------------------------------ " + i + " ------------------------------" + "\r\n";
					console.log(twitterResults);
					//log(twitterResults); // calling log function
        }
      } else {
        console.log("Error :" + error);
        return;
      }

  })
    })
  }
  displayTweets()
};

//Spotify function: Displays artist, song, album  and a preview link



//OMDB Function: displays Movie Title, Release year, rating, plot,
//rotten tomato score, origin country, language, actors
