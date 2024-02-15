// complete the given function
function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // Compare the original cleaned string with its reverse
  return cleanedStr === cleanedStr.split('').reverse().join('');
}
module.exports = palindrome;
// Test the function with an example
console.log(palindrome("race a car")); // Output: false 