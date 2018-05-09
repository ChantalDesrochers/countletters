


function countLetters() {
var initialString = process.argv.slice(2);

// var letters = initialString.split("");
var finalObject = {};
for(var i = 0; i < initialString.length; i++) {
  var word = initialString[i];
  for(var j = 0; j < word.length; j++) {
if(finalObject.hasOwnProperty(word[j])) {
    finalObject[word[j]] += 1;
    //
  } else {
    finalObject[word[j]] = 1;
  }
 }
}
return finalObject;
}


console.log(countLetters());


// function createObject() {
// var finalObject = {};



// }