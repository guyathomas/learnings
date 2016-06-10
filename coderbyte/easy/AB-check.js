function ABCheck(str) { 
    for (var i = 0; i < str.length; i++){
        if(str.charAt(i).toLowerCase() === "a" && str.charAt(i+4).toLowerCase() === "b"){
        return true;
        }
        if(str.charAt(i).toLowerCase() === "b" && str.charAt(i+4).toLowerCase() === "a"){
        return true;
        }
    }
    return false;
}
 
// keep this function call here 
ABCheck(readline());                            