/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  checked = [];
  res = 0;
  for (index = 0; index < s.length; index++) {
    count = 0;
    for (subindex = index; subindex < s.length; subindex++) {
      letter = s.charAt(subindex);
      if (checked.includes(letter)) {
        break;
      }
      count++;
      checked.push(letter);
    }
    if (count > res) res = count;
    checked = [];
  }
  return res;
};

console.log(lengthOfLongestSubstring("abcddffrtyuipo"));
