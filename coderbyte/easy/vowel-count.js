function VowelCount(str) { 
    var vowels = ['a','e','i','o','u'];
    var vowelCount = 0;
    for (var i = 0; i < str.length; i++){
    	if (vowels.indexOf(str.charAt(i)) > -1){
        vowelCount++;
    }
    }

  // code goes here  
  return vowelCount; 
         
}
   
// keep this function call here 
VowelCount(readline());                            