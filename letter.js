

// var GameList = require('./game.js');
// var NewWord = function(word,NewWord){
//   this.word = for(var i =0;i<word.length;i++);
//   this.NewWord =new Array(word.length);
//   this.addletter =function(){
//     NewWord[i] = '_';
//   }
//   }

var Letter = function(let,letterShown) {
  
// property to store the actual letter  
this.let =let,
// property/boolean if the letter can be shown 
this.letterShown = letterShown,
  this.letterRender = function() {
    //if appear is false then show the _
    if(letterShown==false){
      console.log('_');
      //else appear is true then show character
    }else{
      console.log(this.let);
    }
    
  };
};

// export to use in word.js
module.exports = Letter;





















