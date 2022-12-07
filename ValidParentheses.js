/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  aux = [];
  for (index = 0; index < s.length; index++) {
    currChar = s.charAt(index);
    if (parentheses[currChar] != undefined) aux.push(currChar);
    else {
      currOpen = aux.pop();
      if (parentheses[currOpen] != currChar) return false;
    }
    // console.log(`${index} ${currChar} aux: ${aux}`);
  }
  return aux.length == 0;
};

input = "()[]{}";
console.log("res: " + isValid(input));
