function ExOh(str) { 

  // code goes here
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < str.length; i++){
      if(str.charAt(i) === "x"){
          xCount++;
      } else {
          oCount++;
      }
  }
  return xCount === oCount; 
         
}
   
// keep this function call here 
ExOh(readline());