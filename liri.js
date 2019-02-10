require("dotenv").config();
var fs = require("fs");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var axios = require("axios");

// // function spotify-this-song 
function spotifythissong(song) {
    spotify
    .search({type: 'track', query: song })
    .then(function (response) {
        var songObj = JSON.stringify(response, null, 2);
        console.log(songObj.tracks.album);
    //The song's name
    // console.log(response)
// * A preview link of the song from Spotify

// * The album that the song is from

// * If no song is provided then your program will default to "The Sign" by Ace of Base.

    fs.appendFile("response3.txt", songObj +", ", function(err) {
            // If an error was experienced we will log it.
            if (err) {
              console.log(err);
            }
         })
    })
     .catch(function(err) {
    console.log(err);
    });
   
}


function moviethis(movie) {
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
    axios.get(queryURL).then( function(response) {
       
        // Title of the movie.
        console.log("The movie's title is: " + response.data.Title);
        
       
    // Year the movie came out.
    console.log("The movice was released in: " + response.data.Released);
    //IMDB Rating of the movie.
    console.log("The movie's rating is: " + response.data.imdbRating);
    //Rotten Tomatoes Rating of the movie.
    console.log("The Rotten Tomatoes rating is: " + response.data.Ratings);
    //Country where the movie was produced.
    console.log("The movie's was produced in: " + response.data.Production);
    //Language of the movie.
    console.log("The movie's Language is: " + response.data.Language);
    //Plot of the movie.
    console.log("The movie's plot is: " + response.data.Plot);
    //Actors in the movie.
    console.log("The movie's actors were: " + response.data.Actors);
    })
    .catch(function (error) {
        console.log(error);
      });
    }


// * Artist(s)
// var spotify = new Spotify(keys.spotify);
// console.log(process.argv[2]);

if (process.argv[2] === "spotify-this-song") { 
    var song = process.argv.slice(3).join(" ");
    // process.argv[3];
       console.log({
           song: song
       });
       spotifythissong(song);
   }

   if (process.argv[2] === "movie-this") { 
    var movie = process.argv.slice(3).join(" ");
    // process.argv[3];
       console.log({
           movie: movie
       });
       moviethis(movie);
   }



    



//     The song's name

//     A preview link of the song from Spotify

//     The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.



// function do-what-it-says

// * `concert-this`

//`spotify-this-song`

//`movie-this`

//`do-what-it-says`