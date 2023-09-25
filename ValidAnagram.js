/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let s_map = {};
  let t_map = {};

  for (let i = 0; i < s.length; i++) {
    s_map[s.charAt(i)] = (s_map[s.charAt(i)] || 0) + 1;
    t_map[t.charAt(i)] = (t_map[t.charAt(i)] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    let current = s.charAt(i);
    if (s_map[current] !== t_map[current]) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram"));
