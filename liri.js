//Liri takes the following arguments
// * my-tweets
// * spotify-this-song
// * movie-this
// * do-what-it-says

//var dataKeys = require("keys.js");

//var twitter = require('twitter');
//var spotify = require('spotify');
//var request = require('request');
var inquirer = require("inquirer");
var choiceArray = ["Display Tweets", 'Display Spotify', 'Display Movie'];
var output = [];

//Take users input

var questions = ([{
      type: 'list',
      name: 'userSelection',
      message: "Show Tweets: Will list last 20 tweets of the specified user." + "\r\n" +
        "Spotify Song Info: Will list information about the specified song." + "\r\n" +
        "Movie Info: Will list information about the specified movie." + "\r\n" +
        "Be sure to put the movie or song name in quotation marks if it's more than one word.",
      choices: ['Display Tweets', 'Display Spotify', 'Display Movie'],
    ])

    function ask() {
      inquirer.prompt(questions).then(function(answers) {
        output.push(answers.userSelection);
        if (answers.userSelection == choiceArray[0]) {
          console.log("Run Display Twitter");
        } else if (answers.userSelection == choiceArray[1]) {
          console.log("Run Display Spotify");
        } else if (answers.userSelection == choiceArray[2]) {
          console.log("Run Display Movies");
        }
      })

    };

  ask();




//FUNCTIONS

//Twitter function takes last 20 tweets and displays in shell window
//displayTweets


//Spotify function: Displays artist, song, album  and a preview link



//OMDB Function: displays Movie Title, Release year, rating, plot,
//rotten tomato score, origin country, language, actors
