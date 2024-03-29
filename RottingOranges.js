/*
You are given an m x n grid where each cell can have one of three values:
0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.
Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:
Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:
Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:
Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let stack = [];
  let res = -1;
  let notRotten = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        notRotten++;
      }
      if (grid[i][j] == 2) {
        stack.push([i, j]);
      }
    }
  }
  if (notRotten == 0) {
    return 0;
  }
  if (stack.length == 0) {
    return res;
  }
  let len = stack.length;
  let dirs = [
    [0, -1], // left
    [1, 0], // down
    [0, 1], // right
    [-1, 0], // up
  ];
  while (len > 0) {
    res++;
    for (let i = 0; i < len; i++) {
      let curr = stack.shift();
      for (dir of dirs) {
        let x = curr[0] + dir[0];
        let y = curr[1] + dir[1];
        if (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length) {
          let currNeighbor = grid[x][y];
          if (currNeighbor == 1) {
            notRotten--;
            grid[x][y] = 2;
            stack.push([x, y]);
          }
        }
      }
    }
    len = stack.length;
  }
  return notRotten > 0 ? -1 : res;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
