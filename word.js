

// require your letter objects
var Letter = require('./letter.js');
 var Word = function(wrdString){
// // property to store the string wrd
   this.word = wrdString;
// // a collection of letter objects
   this.let = [];
//  property is the word found?
   this.Wordfound = false;
   this.getLets = function() {
//  populate the collection above with new Letter objects
for(var i=0; i< this.word.length;i++){
 var newLetter = new Letter(this.word[i]);
 // To create new letter object.
 this.let.push(newLetter);
}
  };
  
//   found the current word
   this.didWeFindTheWord = function() {
//  sets this.found in the word object to true or false if all letter objects have a true value in their appear property
     this.Wordfound = true;
     return this.Wordfound;
   };

  this.checkIfLetterFound = function(guessLetter) {
    var whatToReturn =0;
    //  iterate through the collection of letter Objects
    for(var i=0; i<this.let.length; i++){
      // if guessLetter matches Letter property, the letter object should be shown
      if(this.let[i]===guessLetter){
      this.let[i].letterShown = true;
      whatToReturn++;
      return whatToReturn;
      console.log('What to Return: ' + whatToReturn);
      }
    }
   
  };

   this.wordRender = function() {
//  render the word based on if letters are found or not found
var str = "";
str = this.let[i].letterRender();
    return str;
    console.log('Word Rendered : ' + str);

   };
 }

//  export to use in main.js
 module.exports = Word;

































