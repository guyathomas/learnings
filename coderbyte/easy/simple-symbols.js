function SimpleSymbols(str) { 
    //Iterate through all characters
    for (var i = 0; i < str.length; i++){
    	//If it is has the ASCII number that indicates a letter, return false if either the character preceeding or after it is not a "+" sign
        if ((str.charAt(i).charCodeAt() >= 65) && (str.charAt(i).charCodeAt() <= 122)){
            if ((str.charAt(i-1) !== "+") || (str.charAt(i+1) !== "+")){
                return "false";
            }
        }
    }
    return "true";
}
   
// keep this function call here 
SimpleSymbols(readline());                            