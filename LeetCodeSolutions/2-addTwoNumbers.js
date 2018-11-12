// https://leetcode.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * Since l1 and l2 are reverse ordered, we can simply traverse the list and add each node value.
 * We can simply use a variable to denote if there is digit that should be carried over and we sum accordingly to produce the digits
 *
 * Runtime: O(max(l1.length, l2.length))
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let sum = [];
  while (l1 || l2) {
    let l1Val = !!l1 && !!l1.val ? l1.val : 0;
    let l2Val = !!l2 && !!l2.val ? l2.val : 0;
    let currentSum = l1Val + l2Val + carry;
    carry = currentSum >= 10 ? 1 : 0;

    sum.push(currentSum % 10);

    l1 = !!l1 && l1.next ? l1.next : null;
    l2 = !!l2 && l2.next ? l2.next : null;
  }
  if (carry > 0) sum.push(carry);
  return sum;
};
