function TimeConvert(num) { 

  // The hours are calculated by rounding down the number that is returned when num is divided by 60
  // The hours are calculated by the modulo of 60 into num (gets the minutes remaining, when all of the multiples of 60 are removed)
  return (Math.floor(num/60) + ":" + num%60); 
         
}
   
// keep this function call here 
TimeConvert(readline());                            