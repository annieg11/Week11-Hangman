

var Letter = function(let,letterShown) {
  
// property to store the actual letter  
    if(letterShown==false){
      return '_';
      //else letterShown is true then show character
    }else{
      return let;
    };
    
  };


// export to use in word.js
module.exports = Letter;





















