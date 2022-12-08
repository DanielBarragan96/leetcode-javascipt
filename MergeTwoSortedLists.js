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

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

list1 = new ListNode(1);
list2 = new ListNode(2);
auxList1 = list1;
auxList2 = list2;
for (offset = 1; offset < 3; offset++) {
  auxList1.next = new ListNode(list1.val + offset);
  auxList2.next = new ListNode(list2.val + offset);
  auxList1 = auxList1.next;
  auxList2 = auxList2.next;
}

console.log(mergeTwoLists(list1, list2));
