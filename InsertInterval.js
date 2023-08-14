/*
You are given an array of non-overlapping intervals intervals where 
intervals[i] = [start_i, end_i] represent the start and the end of the ith 
interval and intervals is sorted in ascending order by start_i. You are also 
given an interval newInterval = [start, end] that represents the start and 
end of another interval.

Insert newInterval into intervals such that intervals is still sorted in 
ascending order by start_i and intervals still does not have any overlapping 
intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Constraints:
0 <= intervals.length <= 104
intervals[i].length == 2
0 <= start_i <= end_i <= 105
intervals is sorted by start_i in ascending order.
newInterval.length == 2
0 <= start <= end <= 105
*/
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  if (intervals.length < 1) {
    return [newInterval];
  }

  let searchForStart = true;
  let minIntervalIndex = -1;
  let minIntervalValue = -1;
  let maxIntervalIndex = -1;
  let maxIntervalValue = -1;

  let isInRange = (value, interval) => {
    return value === 0 || (value >= interval[0] && value <= interval[1]);
  };

  for (let index = 0; index < intervals.length; index++) {
    if (searchForStart) {
      if (isInRange(newInterval[0], intervals[index])) {
        searchForStart = false;
        minIntervalIndex = index;
        minIntervalValue =
          newInterval[0] < intervals[index][0]
            ? newInterval[0]
            : intervals[index][0];
      }
    }

    if (newInterval[1] < intervals[index][0]) {
      break;
    }
    maxIntervalIndex = index;
    maxIntervalValue =
      newInterval[1] > intervals[index][1]
        ? newInterval[1]
        : intervals[index][1];
  }

  if (minIntervalIndex === -1) {
    intervals.push(newInterval);
    return intervals;
  }

  let intervalToInsert = [minIntervalValue, maxIntervalValue];
  let intervalsToRemove = maxIntervalIndex - minIntervalIndex + 1;
  intervals.splice(minIntervalIndex, intervalsToRemove, intervalToInsert);

  // console.log(`Min ${minIntervalIndex}    ${minIntervalValue}`);
  // console.log(`Max ${maxIntervalIndex}    ${maxIntervalValue}`);
  // console.log(`Remove ${intervalsToRemove}`);
  // console.log(`Interval2Ins ${intervalToInsert}`);

  return intervals;
};

console.log(insert([[1, 5]], [6, 8]));
