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
    var obj = {};
    var count = 0;
    if(temp == null){
        return false;
    }
    while(true){
        for(var key in obj){
            if(obj[key] == temp){
                return true;
            } 
        }
        obj[count] = temp;
        count++;
        if(temp.next == null){
            return false;
        }
        temp = temp.next;
    }
};