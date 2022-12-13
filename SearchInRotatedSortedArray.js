/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  start = 0;
  end = nums.length - 1;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] > nums[start]) {
      if (nums[start] <= target && nums[mid] > target) end = mid - 1;
      else start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      if (nums[mid] < target && nums[end] >= target) start = mid + 1;
      else end = mid - 1;
    } else break;
  }
  return nums[end] === target ? end : -1;
};

nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
console.table(search(nums, target));
