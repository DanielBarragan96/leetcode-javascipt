/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  res = [];
  nums = nums.sort();
  for (i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    for (j = i + 1; j < nums.length - 1; j++) {
      for (k = j + 1; k < nums.length; k++) {
        if (i == j || i == k || j == k) continue;
        if (nums[i] + nums[j] + nums[k] == 0) {
          triplet = [nums[i], nums[j], nums[k]];
          var isNewTripplet = true;
          res.forEach((element) => {
            isNewTripplet &=
              JSON.stringify(element) !== JSON.stringify(triplet);
          });
          if (isNewTripplet) res.push(triplet);
        }
      }
    }
  }
  return res;
};

nums = [-1, 0, 1, 2, -1, -4];
nums = [
  9, -9, 4, 12, 12, 0, -14, -7, 10, -1, 11, -10, -3, 2, -9, 0, 8, -9, -5, -1,
  10, 5, 13, -5, -9, -12, 9, -3, 10, 10, -10, 4, 8, 1, -7, -2, -14, -6, 6, 11,
  8, -6, 9, 13, 11, 7, -10, -4, 14, 0, 3, 1, -10, -7, 3, -12, -3, -11, 0, -8,
  -15, 5, 3, 8, 13, 11, 13, -15, -9, 4, 3, 6, 5, -11, -4, -6, 4, 1, 5, -5, -13,
  -7, 11, -8, 2, -1, -12, 14, 3, 3, 13, -5, -14, -7, 11, 14, -11, 9, 6, -13, -9,
  -13, 1, 11, -9, 12, -10, 2, -1, 3, 12, -7, 3, 0, 0, 12, 6, 3, 3, -13, 14, 1,
  -3,
];

console.table(threeSum(nums));
