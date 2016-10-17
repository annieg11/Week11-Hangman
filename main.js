
// var inquirer = require('inquirer');

var game = require('./game.js');
var WordCon = require('./word.js');
var gamelist = game();
 console.log(gamelist);
//  require prompt to use to make the game 
var prompt = require('prompt');
//require the objects/exports you will use
prompt.start();

var createGame = {
    wordBank : game(),// create or import a list of words
    wordsWon : 0,// count of words Found
    guessesRemaining : 10, //per word
    currentWrd : null, //the word object
    startGame : function (wrd){
    //make sure the user has 10 guesses
    this.userGuess = 10;

    //get a random word from the array
    this.RandomWord = wordBank[Math.floor(Math.random()* wordBank.length)];
    //populate currentWrd (made from Word constructor function) object with letters

    this.keepPromptingUser();

    }, 
  resetGuessesRemaining : function(){
    // reset guess count for new game 
  },
  keepPromptingUser : function(){
    var self = this;

    prompt.get(['guessLetter'], function(err, result) {
        // result is an object like this: { guessLetter: 'f' }
        //console.log(result);
        
        // console log the letetr you chose
        console.log('guessLetter :'+ result.guessLetter)

        //this checks if the letter was found and if it is then it sets that specific letter in the word to be found

        //if the user guessed incorrectly minus the number of guesses they have left
        // and console.log if they were incorrect or correct
          
        //check if you win only when you are right
        //end game
       
        
        // display the user how many guesses remaining
      
        // render the word 
        
        // display letters the user has guessed

        // if user has remaining guesses and Word isn't found
      
        // if user has no guesses left, show them the word and tell them they lost
      
        // else show the user word and rendered
        
    });
  }


};

createGame.startGame();

























