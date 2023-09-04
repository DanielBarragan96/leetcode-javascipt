/*
Given a binary tree, determine if it is 
height-balanced

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: root = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: root = []
Output: true

Constraints:
The number of nodes in the tree is in the range [0, 5000].
-104 <= Node.val <= 104
*/
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var Height = function (root) {
  if (root === null) return 0;
  let leftHeight = Height(root.left);
  let rightHeight = Height(root.right);

  if (leftHeight < 0 || rightHeight < 0) return -1;
  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
};

var isBalanced = function (root) {
  if (root === null) return true;
  return Height(root) !== -1;
};

let node5 = {
  val: 7,
  left: null,
  right: null,
};
let node4 = {
  val: 15,
  left: null,
  right: null,
};
let node3 = {
  val: 20,
  left: node4,
  right: node5,
};
let node2 = {
  val: 9,
  left: null,
  right: null,
};
let node1 = {
  val: 1,
  left: node2,
  right: node3,
};

console.log(isBalanced(node1));
