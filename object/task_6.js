/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var temp = head;
    if(temp == null){
        return false;
    }
    while(temp.next != null){
        if(temp.hasOwnProperty('bool')){
            return true;
        }
        temp.bool = true;
        temp = temp.next;
    }
    return false;
};