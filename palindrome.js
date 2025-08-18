const isPalindrome = (str) => {
  str = str.toLowerCase();

  let reverse = str.split("").reverse().join("");

  return str === reverse;
};

console.log(isPalindrome("madam"));
console.log(isPalindrome("Level"));
console.log(isPalindrome("mammam"));
console.log(isPalindrome("kadak"));
console.log(isPalindrome("kuduk"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("sudus"));
