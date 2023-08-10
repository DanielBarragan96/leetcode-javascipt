/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

Constraints:
1 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 104
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);
  // [[x,y],[z,a]]
  for (let index = 1; index < intervals.length; index++) {
    let x = intervals[index - 1][0];
    let y = intervals[index - 1][1];
    let z = intervals[index][0];
    let a = intervals[index][1];
    if (y >= z) {
      let end = y > a ? y : a;
      let newInterval = [x, end];
      intervals.splice(index--, 1);
      intervals[index] = newInterval;
    }
  }
  return intervals;
};

console.log(
  merge([
    [1, 4],
    [2, 3],
  ])
);
