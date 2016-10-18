
// var inquirer = require('inquirer');

var game = require('./game.js');
var Word = require('./word.js');
var gamelist = game();
 console.log(gamelist);
//  require prompt to use to make the game 
var prompt = require('prompt');
//require the objects/exports you will use
prompt.start();

    game = {
    wordBank : game(),// create or import a list of words
    guessesRemaining : 10, //per word
    currentWrd : null, //the word object
    startGame : function (wrd){
    //get a random word from the array
    var RandomWord = this.wordBank[Math.floor(Math.random()*this.wordBank.length)];
    console.log(RandomWord);
    //populate currentWrd (made from Word constructor function) object with letters
    this.currentWrd = new Word(RandomWord);
    this.currentWrd.getLets();
    this.keepPromptingUser();
    }, 
  resetGuessesRemaining : function(){
    // reset guess count for new game 
  },
  keepPromptingUser : function(){
    var userGuess = this;

    prompt.get(['guessLetter'], function(err, result) {
        // result is an object like this: { guessLetter: 'f' }
        //console.log(result);
        // console log the letter you chose
        console.log('Guessed Letter :'+ result.guessLetter)

        //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
        var letterFoundByUserGuess = userGuess.currentWrd.checkIfLetterFound(result.guessLetter);

        //if the user guessed incorrectly minus the number of guesses they have left
        // and console.log if they were incorrect or correct
          if(letterFoundByUserGuess===0){
            userGuess.guessesRemaining =-1;
            console.log("You Guessed it Wrong!!");
          }else{
            console.log("You Guessed it Right!");
          }
        //check if you win only when you are right
        if (userGuess.currentWrd.didWeFindTheWord()) {
          console.log("You Won!!!");
          return 1;
        }else {
          // display the user how many guesses remaining
          console.log("Guesses remaining:"+ userGuess.guessesRemaining);
          // render the word 
          console.log(userGuess.currentWrd.wordRender());
          // if user has remaining guesses and Word isn't found
          if (userGuess.guessesRemaining > 0 && userGuess.currentWrd.Wordfound === false){
            userGuess.keepPromptingUser();
           } else {
            // if user has no guesses left, show them the word and tell them they lost
            if (userGuess.guessesRemaining === 0){
              console.log("Game Over !!"); 
              console.log("The word Guessed was:"+userGuess.RandomWord);
            }else {
              // else show the user word and rendered
              console.log(userGuess.currentWrd.wordRender());
            }
          }
        }
      });
    }
  }

   game.startGame();    
        
        
      
        
        
        

        
        
      
  



























