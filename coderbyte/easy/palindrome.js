function Palindrome(str) { 
//Removes spaces and convert to single characters in an array
	var oldStr = str.replace(/\s/g,"");
	var oldArray = oldStr.split("");
//Reverse that array and convert back to a string	
	var newArray = oldArray.reverse();
	var newStr = newArray.join("");
	
	return newStr === oldStr;
}
   
// keep this function call here 
Palindrome(readline());