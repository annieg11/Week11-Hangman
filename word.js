

// require your letter objects
var Letter = require('./letter.js');
var Word = function(wrdString,letterObj,found){
// property to store the string wrd
  this.wrdString = wrdString,
// a collection of letter objects
  this.letterObj = letterObj,
// property is the word found?
  this.found = found,
  this.getLets = function() {
// populate the collection above with new Letter objects
var newLetter = new Letter(this.let,this.letterShown,this.letterRender);
  };
  
  //found the current word
  this.didWeFindTheWord = function() {
    //sets this.found in the word object to true or false if all letter objects have a true value in their appear property
    this.found = false;
    };

    return this.found;
  };

  this.checkIfLetterFound = function(guessLetter) {

// iterate through the collection of letter Objects
for(i=0;i<this.letterObj.length;i++){
guessLetter.word = guessLetter.word + guessLetter.word[i];
}

// if guessLetter matches Letter property, the letter object should be shown
    return whatToReturn;
  };

  this.wordRender = function() {
// render the word based on if letters are found or ot found
    return str;
  };
}

// export to use in main.js
module.exports = 

































