function reverseString(word) {
  //split it to new array
  //reverse the new array
  //join array to string

  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  return word === reversedWord;
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("come"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("1"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");
}

module.exports = isPalindrome;
