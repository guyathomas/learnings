function AlphabetSoup(str) { 
    
    //Create an array with all of the characters in it
    var strArray = [];
    for (var i = 0; i < str.length; i++){
        strArray.push(str.charAt(i));
    }
    
    //Sort the array and join it together
    strArray = strArray.sort();
    
    return strArray.join("");
         
}
   
// keep this function call here 
AlphabetSoup(readline());                            