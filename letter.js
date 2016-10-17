

var Letter = function(let) {
  
// property to store the actual letter  
this.let =let;
// property/boolean if the letter can be shown 
this.letterShown = false;
  this.letterRender = function() {
    //if appear is false then show the _
    if(this.let==false){
      console.log('_');
      //else appear is true then show character
    }else{
      console.log(this.let);
    }
    
  };
};

// export to use in word.js
module.exports = Letter;





















