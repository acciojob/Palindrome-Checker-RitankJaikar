// complete the given function

function palindrome(str){
  // Normalize the string: convert to lowercase and remove non-alphanumeric characters
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  // Check if the normalized string is equal to its reverse
  return normalizedStr === normalizedStr.split('').reverse().join('');
}
module.exports = palindrome
