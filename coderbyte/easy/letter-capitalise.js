function LetterCapitalize(str) { 
 	//Split the string into an array
    var strArray = str.split(" ");
    var newStr = '';

    //Iterate through the array, capitalise & add a space to the end of every character
    for (var i = 0; i < strArray.length; i++){
        newStr += (strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1) + " ");
    }
  // Trim the space that is left at the end word from iterating through and adding spaces
  return newStr.trim(); 
         
}
   
// keep this function call here 
LetterCapitalize(readline());                            