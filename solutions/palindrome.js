function palindrominator(str) {
  if (str === "") {
    return "Empty String";
  }
  return (str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
}

console.log(palindrominator("pizza")); // false
console.log(palindrominator("racecar")); // true


function palindrome(str) {
  if (str === "") {
    return "Empty String";
  }
  var letters = str.toLowerCase().split('').filter(function(letter) { return /[a-zA-Z]/.test(letter)})
  return (letters.join('') === letters.reverse().join(''));
}


console.log(palindrome("pizza")); // false
console.log(palindrome("racecar")); // true
console.log(palindrome("never odd or even")); // true
