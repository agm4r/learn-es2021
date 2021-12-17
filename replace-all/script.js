/* 
  using replace only replace first occurrence or
  if you one replace full occurrence supply the pattern as a regular expression.
*/

// Example replace()
const str = "Backbencher sits at the Back";
const newStr = str.replace("Back", "Front");
console.log(newStr); // "Frontbencher sits at the Back"
// code above only change the first occurrence

// Example replace() using regular expression
const str1 = "Backbencher sits at the Back";
const newStr1 = str.replace(/Back/g, "Front");
console.log(newStr1); // "Frontbencher sits at the Front"
// code above change full occurrence because using regular expression



// <================================================================>
/*
  String.prototype.replaceAll() 
  is trying to bring the full replacement option even when the input pattern is a string.
*/

//Example
const str3 = "Backbencher sits at the Back";
const newStr3 = str.replaceAll("Back", "Front");
console.log(newStr3); // "Frontbencher sits at the Front"

//  source: https://backbencher.dev/articles/javascript-es2021-new-features