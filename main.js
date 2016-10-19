
// var inquirer = require('inquirer');

var game = require('./game.js');
var Word = require('./word.js');
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
    // console.log(RandomWord);
    //populate currentWrd (made from Word constructor function) object with letters
    this.currentWrd = new Word(RandomWord);
    // console.log(this.currentWrd);
    this.currentWrd.getLets();
    this.keepPromptingUser();
    }, 
  
  keepPromptingUser : function(){
    var self = this;
    prompt.get(['guessLetter'], function(err, result) {
        // result is an object like this: { guessLetter: 'f' }
        //console.log(result);
        // console log the letter you chose
        console.log('Guessed Letter :'+ result.guessLetter);
        //this checks if the letter was found.
      var letterFoundByUser = 0;
      for(var i=0; i<self.currentWrd.word.length; i++){
        // if guessLetter matches currentWrd(which is a word constructor) in its property word, the letter object should be shown
        if(self.currentWrd.word[i]==result.guessLetter){
        letterFoundByUser=1;
        // this stores the letter in the currentWrd as the result of the letter guessed.
        self.currentWrd.let[i]=result.guessLetter;
        }
      }
      if(letterFoundByUser==0){
        self.guessesRemaining--;
        console.log("You Guessed it Wrong!!");
      }else{
            console.log("You Guessed it Right!");
      }
      var didWeFindTheWord = 1;
      for(var i=0; i<self.currentWrd.word.length; i++){
        // if we did'nt find letter matching with currentWrd's property word, then we didnt find the word.
        if(self.currentWrd.word[i]!==self.currentWrd.let[i]){
        didWeFindTheWord=0;
        }
      }
      // if we did find the letters of that word, you win!!
        if (didWeFindTheWord==1) {
          console.log("You Won!!!");
          return 1;
        }else {
          // display the user how many guesses remaining
          console.log("Guesses remaining:"+ self.guessesRemaining);
          // render the word 
          console.log(self.currentWrd.let);
          // if user has remaining guesses and Word isn't found
          if (self.guessesRemaining > 0 ){
            self.keepPromptingUser();
           } else {
            // if user has no guesses left, show them the word and tell them they lost
              console.log("Game Over !!"); 
              console.log("The word Guessed was:"+self.currentWrd.word);
       
            }
          }
      
      });
    }
  }

   game.startGame();    
        
        
      
        
        
        

        
        
      
  



























