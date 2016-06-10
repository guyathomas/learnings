function LongestWord(sen) { 
    //Remove punctuation and split into a word array
    sen = sen.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    wordArray = sen.split(" ");

    //Initialise variables to store characteristics of the longest word
    var maxLen = 0;
    var maxWord = '';

    //Iterate through array and store the length of the longest word and the word itself
    for (var i = 0; i < wordArray.length; i++){
        if (wordArray[i].length > maxLen){
            maxLen = wordArray[i].length;
            maxWord = wordArray[i];
        }
    }
  return maxWord; 
}
   
// keep this function call here 
LongestWord(readline());                            