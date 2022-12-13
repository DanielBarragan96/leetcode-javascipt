/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  for (index = 0; index < nums.length; index++) {
    if (nums[index] == target) {
      return index;
    }
  }
  return -1;
};

nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
console.table(search(nums, target));
