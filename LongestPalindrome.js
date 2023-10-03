/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only.
*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let dictionary = {};
  for (let word of s) {
    if (!dictionary[word]) {
      dictionary[word] = 0;
    }
    dictionary[word]++;
  }
  let total = 0;
  let isOdd = false;
  for (let word in dictionary) {
    while (dictionary[word] > 1) {
      total += 2;
      dictionary[word] -= 2;
    }
    if (!isOdd && dictionary[word] == 1) {
      total++;
      isOdd = true;
    }
  }
  return total;
};

console.log(longestPalindrome("abccccdd"));
