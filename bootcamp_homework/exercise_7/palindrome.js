function checkPalindrome(str) {
    for(var i=0;i<str.length;i++){
      if(str.charAt(i)!=str.charAt(str.length-i-1)){ // Comparison fail
        return false;
      }
    }
    return true;
  }
  
  console.log(checkPalindrome("bannana")) //false
  console.log(checkPalindrome("racecar")) //true
 // console.log(checkPalindrome("madam")) //true