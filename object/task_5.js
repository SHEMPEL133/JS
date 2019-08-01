/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    var temp = head;
    if (temp == null) {
        return head;
    }
    while (temp.next != null) {
        while ( temp.next != null &&  temp.val == temp.next.val) {
            temp.next = temp.next.next;
        }
        if(temp.next == null){
            break;
        }
        temp = temp.next;
    }
    return head;
};

