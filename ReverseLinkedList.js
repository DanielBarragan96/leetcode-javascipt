/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let last = null;
  while (head != null) {
    let next = head.next;
    head.next = last;
    last = head;
    head = next;
  }
  return last;
};

var reverseListRecursive = function (head) {
  if (head === null || head.next === null) return head;
  let res = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return res;
};

let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

console.log(reverseListRecursive(node1));
