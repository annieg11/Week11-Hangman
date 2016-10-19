

// require your letter objects
var Letter = require('./letter.js');
 var Word = function(wrdString){
 // property to store the string wrd
   this.word = wrdString;
  //  a collection of letter objects
   this.let = [];
   // this function gets letters for a word
   this.getLets = function() {
    //  populate the collection above with new Letter objects
      for(var i=0; i< this.word.length;i++){
      // To create new letter object which stores the array of the word and false parameter gives the dashes for that word.
       var newLetter = Letter(this.word[i],false);
       // pushes to newletter.
       this.let.push(newLetter);
      }
    console.log(this.let);
    return this.let;
    };
 };
//  export to use in main.js
 module.exports = Word;

































