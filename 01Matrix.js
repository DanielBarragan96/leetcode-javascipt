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

let cols = 0;
let rows = 0;

var validIndex = function (i, j) {
  let validI = i >= 0 && i < rows;
  let validJ = j >= 0 && j < cols;
  return validI && validJ;
};
var checkCellNeighbors = function (mat, i, j, offset) {
  let bestOffset = offset;
  let top = { i: i - offset, j: j };
  if (validIndex(top.i, top.j)) {
    let topCell = mat[top.i][top.j];
  }
  let right = { i: i, j: j + offset };
  if (validIndex(right.i, right.j)) {
    let rightCell = mat[right.i][right.j];
  }
  let down = { i: i + offset, j: j };
  if (validIndex(down.i, down.j)) {
    let downCell = mat[down.i][down.j];
  }
  let left = { i: i, j: j - offset };
  if (validIndex(left.i, left.j)) {
    let leftCell = mat[left.i][left.j];
  }
  offset++;
  return bestOffset;
};
/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  cols = mat.length;
  rows = mat[0].length;

  let res = new Array(rows);
  for (let i = 0; i < cols; i++) {
    res[i] = new Array(cols).fill(0);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        continue;
      }
      checkCellNeighbors(mat, i, j, 1);
    }
  }
  return res;
};

console.log(
  updateMatrix([
    [1, 2],
    [4, 0],
  ])
);
