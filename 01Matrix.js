/*
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two adjacent cells is 1.

Example 1:
Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:
Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]
 */

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  if (!mat || mat.length === 0 || mat[0].length === 0) return [];

  let rows = mat.length;
  let cols = mat[0].length;
  let MAX_VAL = rows * cols;
  let queue = [];

  // Add all the zero cells to queue and update all diff cells to MAX_VAL
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
      } else {
        mat[i][j] = MAX_VAL;
      }
    }
  }
  let directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (queue.length > 0) {
    // Check next cell
    let [row, col] = queue.shift();
    for (let [rowOffset, colOffset] of directions) {
      // Check neighbors
      let rowNeigh = row + rowOffset;
      let colNeigh = col + colOffset;
      let validIndex =
        rowNeigh >= 0 && rowNeigh < rows && colNeigh >= 0 && colNeigh < cols;
      if (validIndex && mat[rowNeigh][colNeigh] > mat[row][col] + 1) {
        // Store current cell to check it neighbors
        queue.push([rowNeigh, colNeigh]);
        // Update current cell value
        mat[rowNeigh][colNeigh] = mat[row][col] + 1;
      }
    }
  }

  return mat;
};

console.log(updateMatrix([[0], [0], [0], [0], [0]]));
