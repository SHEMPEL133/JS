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
var mergeTwoLists = function (l1, l2) {
    var temp_l1 = l1;
    var temp_l2 = l2;
    var current = null;
    var start = null;
    while (temp_l1 != null & temp_l2 != null) {
        if (temp_l1.val > temp_l2.val) {
            if (current != null) {
                current.next = temp_l2;
            } else {
                start = temp_l2;
            }
            current = temp_l2;
            temp_l2 = temp_l2.next;
        } else {
            if (current != null) {
                current.next = temp_l1;
            } else {
                start = temp_l1;
            }
            current = temp_l1;
            temp_l1 = temp_l1.next;
        }
    }
    if (temp_l1 != null) {
        if (current != null) {
            current.next = temp_l1;
        } else {
            return temp_l1;
        }
    }
    if (temp_l2 != null) {
        if (current != null) {
            current.next = temp_l2;
        } else {
            return temp_l2;
        }
    }
    return start;
};