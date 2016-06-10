function BitwiseOne(strArr) { 

  var newStr = '';
  for (var i = 0; i < strArr[0].length; i++){
  	((strArr[0].charAt(i)) ==+ "0" && (strArr[1].charAt(i)) === "0") ? newStr += "0" : newStr += "1";
  }
  return newStr; 
}
   
// keep this function call here 
BitwiseOne(readline()); 