/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 == null && list2 == null) return null;
  var mergeHead = new ListNode();
  mergeEnd = mergeHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      mergeEnd.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      mergeEnd.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    mergeEnd = mergeEnd.next;
  }
  while (list1) {
    mergeEnd.next = new ListNode(list1.val);
    list1 = list1.next;
    mergeEnd = mergeEnd.next;
  }
  while (list2) {
    mergeEnd.next = new ListNode(list2.val);
    list2 = list2.next;
    mergeEnd = mergeEnd.next;
  }
  return mergeHead.next;
};

list1 = [1, 2, 4];
list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
