function countLetters() {
  var initialString = process.argv.slice(2);
  var counter = 0;
  // var letters = initialString.split("");
  var finalObject = {};
  for (var i = 0; i < initialString.length; i++) {
    var word = initialString[i];
    if (i !== 0) {
      counter++;
    }
    for (var j = 0; j < word.length; j++) {
      if (finalObject.hasOwnProperty(word[j])) {
        finalObject[word[j]].push(counter);
        //
      } else {
        var letterArray = [];

        finalObject[word[j]] = letterArray;
        letterArray.push(counter);
      }

      counter++;
    }
  }
  return finalObject;
}


console.log(countLetters());
//every time there is a new word add space unless last word