/*
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  let res = [];
  if (nums.length == 1) return [[nums[0]]];
  for (let i = 0; i < nums.length; i++) {
    let aux = nums.splice(0, 1)[0];
    let perms = permute(nums);

    for (let index = 0; index < perms.length; index++) {
      perms[index].push(aux);
      res.push(perms[index]);
    }
    nums.push(aux);
  }
  return res;
}

console.log(permute([1, 2, 3, 4]));
