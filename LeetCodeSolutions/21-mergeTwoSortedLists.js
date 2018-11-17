// https://leetcode.com/problems/merge-two-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let newHead = null;
  let curr = null;

  const processL1 = () => {
    if (!newHead) {
      newHead = l1;
      curr = newHead;
    } else {
      curr.next = l1;
      curr = curr.next;
    }
    l1 = l1.next;
  };
  const processL2 = () => {
    if (!newHead) {
      newHead = l2;
      curr = newHead;
    } else {
      curr.next = l2;
      curr = curr.next;
    }
    l2 = l2.next;
  };

  while (l1 || l2) {
    // both l1 & l2 - most of the time this is the case
    if (!!l1 && !!l2) {
      if (l1.val < l2.val) {
        processL1();
      } else {
        processL2();
      }
    }
    // just l1
    else if (!!l1) {
      processL1();
    }
    // just l2
    else if (!!l2) {
      processL2();
    }
  }
  return newHead;
};
