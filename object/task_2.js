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
var middleNode = function (head) {
    var temp = head;
    var count = 1;
    while (temp.next != null) {
        count++;
        temp = temp.next;
    }
    count = Math.floor(count/2);
    temp = head;
    while(count > 0){
        temp = temp.next;
        count--;
    }
    console.log(temp);
    return(temp)
};