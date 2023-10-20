/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Constraints:
1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  var processString = function (word) {
    stack = [];
    for (let char of word) {
      if (char === "#") {
        stack.pop();
      } else {
        stack.push(char);
      }
    }
    return stack;
  };
  s = processString(s);
  t = processString(t);
  console.log(s);
  console.log(t);
  if (s.length !== t.length) return false;
  for (let index = 0; index < s.length; index++) {
    if (index >= t.length || s[index] !== t[index]) {
      return false;
    }
  }
  return true;
};

s = "aaa###a";
t = "aaaa###a";
console.log(backspaceCompare(s, t));
