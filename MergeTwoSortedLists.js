/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  mergedList = new Array(list1.length + list2.length);
  i = 0;
  j = 0;
  for (index = 0; index < mergedList.length; index++) {
    if (i > list1.length) {
      mergedList[index] = list2[j++];
    } else if (j > list2.length) {
      mergedList[index] = list1[i++];
    } else if (list1[i] <= list2[j]) {
      mergedList[index] = list1[i++];
    } else {
      mergedList[index] = list2[j++];
    }
  }
  return mergedList;
};

list1 = [1, 2, 4];
list2 = [1, 3, 4];
console.log(mergeTwoLists(list1, list2));
